export interface Report {
  Table: TableItem[];
}
interface TableItem {
  'Invoice ID': number;
  'Log ID': number;
  'Invoice Number': string;
  'Voucher Number': string;
  'Vendor Code': string;
  'Vendor Name': string;
  'Association Name': string;
  Sources: string;
  Invoice_Amount: number;
  Date: string;
  Event: string;
  ModifiedDate: string;
  Name: string;
  ModifiedBy: string;
  Note: string;
}
