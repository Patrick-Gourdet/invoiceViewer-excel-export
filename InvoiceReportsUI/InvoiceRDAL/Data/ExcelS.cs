
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

                var workSheet = excel.Workbook.Worksheets.Add("Worksheet1");
                workSheet.Cells["A1"].LoadFromDataTable(dsUndeliverables.Tables[0], true);
                workSheet.Cells.AutoFitColumns();
                workSheet.Cells.Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Right;
                excel.Save();
                return excel.GetAsByteArray();
            }            
        
            catch (Exception e)
            {
                throw new InvoiceReportsError("Error while generating Excel SPreadsheet", e);
            }
}
    }
}
