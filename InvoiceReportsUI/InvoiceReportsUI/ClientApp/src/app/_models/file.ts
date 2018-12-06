export class ReportTest {
  public Invoice_ID: number;
  public Log_ID: string;
  public Invoice_Number: string;
  public Voucher_Number: string;
  public Vendor_Code: string;
  public Vendor_Name: string;
  public Association_Name: string;
  public Sources: string;
  public Invoice_Amount: number;
  public Date: Date;
  public Event: string;
  public ModifiedDate: Date;
  public Name: string;
  public ModifiedBy: string;
  public Note: string;
  constructor(Invoice_ID,Log_ID,
    Invoice_Number,
     Voucher_Number,
    Vendor_Code,
    Vendor_Name,
    Association_Name,
    Invoice_Amount,
     Date,
     Event,
     ModifiedDate,
     Name,
     ModifiedBy,
    Note) {
    this.Invoice_ID = Invoice_ID; this.Log_ID = Log_ID;
    this.Invoice_ID = Invoice_Number;
    this.Voucher_Number = Voucher_Number;
    this.Vendor_Code = Vendor_Code;
    this.Vendor_Name = Vendor_Name;
    this.Association_Name = Association_Name;
    this.Invoice_Amount = Invoice_Amount;
    this.Date = Date;
    this.Event = Event,
    this.ModifiedDate = ModifiedDate;
    this.Name = Name,
    this.ModifiedBy = ModifiedDate,
    this.Note = Note

  }
}
