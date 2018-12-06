/*This function maps the invoice number to the relative data for the invoice*/
export class SortService {
    constructor() {
        this.details = [];
        this.arr = new Map();
    }
    sort(t) {
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
    }
    ;
}
//# sourceMappingURL=sortService.js.map