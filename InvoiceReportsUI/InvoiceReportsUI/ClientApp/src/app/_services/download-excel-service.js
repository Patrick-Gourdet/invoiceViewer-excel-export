//import { Injectable } from '@angular/core';
//import { saveAs } from '../../../node_modules/file-saver';
//import { Report } from '../_models/reports';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';
//@Injectable()
//export class DownloadExcelService {
//  constructor(private http: HttpClient) { }
//  async doDownload(association): Observable<Blob>  {
//    return await this.http.get<Blob>(environment.baseUrl + 'association/report' + association);
//  }
//  saveFile = (blobContent: Blob, fileName: string) => {
//    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
//    saveAs(blob, fileName);
//  };
//}
//# sourceMappingURL=download-excel-service.js.map