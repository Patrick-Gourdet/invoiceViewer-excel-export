import { Report } from '../_models/reports';

/*This function maps the invoice number to the relative data for the invoice*/

export class SortService {
  InvoiceId: number;
  details: any[] = [];
  arr: Map<any, any> = new Map<any, any>();
  sort(t: Report['Table']) {
    this.InvoiceId = t[0]['Invoice ID'];
    for (let inv in t) {      
      if (this.InvoiceId != t[inv]['Invoice ID']) {
        this.arr.set(this.InvoiceId, this.details);
        this.InvoiceId = t[inv]['Invoice ID'];
        this.details = [];
      }       
        this.details.push(t[inv]);
    }
    this.arr.set(this.InvoiceId, this.details);
    return this.arr;
  };
}
