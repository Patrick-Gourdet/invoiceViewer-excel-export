import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { Report } from '../../_models/reports';
import { ReportTest } from '../../_models/file';
import { environment } from '../../../environments/environment';
import { ReportService } from '../../_services/reports_services';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SortService } from '../../_services/sortService';
import { Toster } from '../../_services/toster-service';
import { DownloadExcelService } from '../../_services/download-excel-service';
import { Subscription } from 'rxjs';
import { saveAs } from '../../../../node_modules/file-saver';
import * as XLSX from 'xlsx';
// Instantiation
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
@Component({
  selector: 'app-report-component',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class ReportComponentComponent implements OnInit {
  subscription: Subscription;
  excel: any;
  saveID: any;
  displayedColumns = environment.displayedColumns;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datasource: any;
  association: number;
  hasData = environment.hasData;
  reports: any;
  search = {association: 0};
  constructor(private reportService: ReportService,
    private sortService: SortService,
    private toast: Toster,
    private saveing: DownloadExcelService
    ) { }
  //private download: DownloadExcelService
  ngOnInit() { }

  getReport(association) {
    this.association = association;
    this.saveID = association;
    this.reportService.getReport(this.association).subscribe((report: Report) => {
      this.reports = report.Table;
      let temp = null;
      if (report !== undefined) {
        console.log(report);
        this.association = null;
        this.toast.success('Report executed sucssesfully');
        temp = this.sortService.sort(this.reports);
        this.hasData = true;
        this.datasource = new MatTableDataSource<any>(this.reports);
        this.datasource.paginator = this.paginator;     
      }
      else {
        this.hasData = false;
        this.toast.warning('Association Does not Exsist');
        this.datasource = new MatTableDataSource<any>(null);
        this.association = null;
      }
    }, err => {
      console.log(err + "ERROR NOW");
    });
  }
  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  async Save() {
   let t = this.saveing.doDownload(this.saveID);
    console.log(this.excel);
   // this.saveFile(this.excel, 'YoMoma.xlsx');
    //this.saveFile(this.excel, 'blaaaaaa.xlsx')   
  }
  saveFile = (json: any, fileName: string) => {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  };
}
