﻿using Microsoft.Office.Interop.Excel;
using OfficeOpenXml;
using System.Data;
using System.IO;

namespace InvoiceRDAL.Data
{
    public static class InvoiceRep 
    {

        public static DataSet GetInvoice(int assosicationID)
        {
            return InvoiceDataAccessLayer.GetAllAssociationVendorInvoices(assosicationID);
        }
    }
}