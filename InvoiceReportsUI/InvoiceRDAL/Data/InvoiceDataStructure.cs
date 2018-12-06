using System;
using System.Data;
using Microsoft.Office.Interop.Excel;
using Newtonsoft.Json;

namespace InvoiceRDAL
{
    public static class InvoiceDataStructure
    { 
        public  static string SetEmpty(DataSet db)
        {
            string res = "Dataset is Empty";
            if(db.Tables[0].Rows.Count == 0)
            {
                return JsonConvert.SerializeObject(res, Formatting.Indented);
            }
            return JsonConvert.SerializeObject(db,Formatting.Indented);
        }
        public static Workbook SetEmpty1(Workbook workBook) 
        {
            try
            {
                if (workBook.Sheets.Count.Equals(0))
                {
                    
                    return null;
                }
                return workBook;
            }
            catch (Exception e)
            {
                throw new TypeInitializationException("Crap",e);
            }

        }
    }
}
