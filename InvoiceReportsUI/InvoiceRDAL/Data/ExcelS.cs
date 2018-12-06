
using InvoiceReportError;
using System;
using System.Data;
//using Microsoft.Office.Interop.Excel;
using OfficeOpenXml;
using System.Collections.Generic;
using System.IO;

namespace InvoiceRDAL
{
    public class ExcelS
    {
        public static byte[] ExportToExcel(DataSet dsUndeliverables)
        {
            try
            {

                ExcelPackage excel = new ExcelPackage();


                var worksheet = excel.Workbook.Worksheets.Add("Worksheet1");
                worksheet.Cells["A1"].LoadFromDataTable(dsUndeliverables.Tables[0], true);
                var stream = new MemoryStream(excel.GetAsByteArray(),0,0,true,true);

                var g  = stream.GetBuffer();
                stream.Position = 0;
                return g;
            }            
        
            catch (Exception e)
            {
                throw new InvoiceReportsError("Error while generating Excel SPreadsheet", e);
            }
}
    }
}
