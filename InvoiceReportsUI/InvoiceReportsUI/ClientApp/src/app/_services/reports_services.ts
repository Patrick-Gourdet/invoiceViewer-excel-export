import { Injectable } from '@angular/core';
import { Report } from '../_models/reports';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ReportService {
 
  constructor(private http: HttpClient) {}
   getReport(association): Observable<Report> {
    console.log(association);
    return  this.http.get<Report>(environment.baseUrl + 'association/' + association);
  }
}
