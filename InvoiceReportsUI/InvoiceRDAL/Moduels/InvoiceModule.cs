using Nancy;
using InvoiceRDAL.Data;
using Nancy.Bootstrapper;
using System.IO;

namespace InvoiceRDAL.Moduels
{
    public class InvoiceModule : NancyModule
    {
        public InvoiceModule()
        {
            Before += ctx =>
            {
                if (ctx.Parameters == null)
                    return HttpStatusCode.NotFound;
                return null;
            };

            Get("/association/{id}",  (perameters) => {
               return InvoiceDataStructure.SetEmpty(InvoiceRep.GetInvoice(perameters.id));
                              
            });

            Get("/association/report/save/{id}", (perameters) => {
                byte[] temp = InvoiceDataAccessLayer.CreateExcel(perameters.id);               
                var response = new Response();                  
                response.Headers.Add("Content-Disposition", "filename=test444.xlsx");
                response.ContentType = "application/octet-stream";
                byte[] j = new byte[temp.Length];
                response.Contents = s =>
                {
                    s.Write(temp, 0, temp.Length);
                };
                return response;
            });
        }
    }
}
 