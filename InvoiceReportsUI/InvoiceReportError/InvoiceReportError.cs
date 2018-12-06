using System;

namespace InvoiceReportError
{
    public class InvoiceReportsError : Exception
    {

    
        public InvoiceReportsError(string FileName) 
        {
        }

        public InvoiceReportsError(string error, Exception innerException) : base("Error Generating Generating Excel")
        {
                      
        }
        public string  InvoiceReportEmptyDataSet(string error)
        {
            return "The requested Association does not exist.";
        }
            
        
        
    }
}


