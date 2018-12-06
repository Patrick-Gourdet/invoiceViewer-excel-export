using System.Data;

namespace InvoiceRDAL.Data
{
    public static class InvoiceRepository
    {       
        
        public static DataSet GetInvoice(int assosicationID)
        {
            return InvoiceDataAccessLayer.GetAllAssociationVendorInvoices(assosicationID);
        }
    }
}
