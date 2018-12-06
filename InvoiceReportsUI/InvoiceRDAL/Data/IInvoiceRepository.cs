using System.Data;
using System.Threading.Tasks;

namespace InvoiceDataAL.Data
{
    public interface IInvoiceRepository
    {
        DataSet GetInvoice(int assosicationID);
    }
}
