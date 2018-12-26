import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from '../../../node_modules/file-saver';
import { Report } from '../_models/reports';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
export class DownloadExcelService {
  excel: any;
  constructor(private http: HttpClient) { }

  doDownload(association) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.get(environment.baseUrl + 'association/report' + '/save/' + association, {
      headers: new HttpHeaders({
        'Authorization': 'Basic ',
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      }), responseType: 'blob' as 'json'
    }).subscribe((data: Blob) => { console.log(data); this.saveFile(data, "test444344"); }, (err) => { console.log(err) });
  }
  saveFile = (json: any, fileName: string) => {
    console.log('worksheet', json);
    const data: Blob = new Blob([json], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + EXCEL_EXTENSION);
  };
}
