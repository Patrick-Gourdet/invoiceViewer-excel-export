import { Injectable } from '@angular/core';
import { saveAs } from '../../../node_modules/file-saver';
import { Report } from '../_models/reports';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
export class DownloadExcelService {
  excel: any;
  constructor(private http: HttpClient) { }

  doDownload(association) {
    let headers: HttpHeaders = new HttpHeaders();
    //headers = headers.append('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8');
    //let promise = new Promise((resolve, reject) => {
    
    //  .toPromise().then(res => { console.log(res); this.saveFile(res, 'blaaa.xlsx'); resolve(); }).catch(err => { console.log(err); });

    //});
    return this.http.get(environment.baseUrl + 'association/report' + '/save/' + association, {
      headers: new HttpHeaders({
        'Authorization': 'Basic ',
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      }), responseType: 'blob' as 'json'
    }).subscribe((data: Blob) => { console.log(data); this.saveFile(data, "test444344"); }, (err) => { console.log(err) });
  }
  saveFile = (json: any, fileName: string) => {
    //const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', json);
    //const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([json], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + EXCEL_EXTENSION);
  };

}
//.subscribe(res => {
//  try {
//    let supported = !!new Blob;
//  }
//  catch (e) {
//    this.saveFile(new Blob([res], { type: 'Microsoft/Excel' }), 'ExcelFile.xls');
//  };
//})
