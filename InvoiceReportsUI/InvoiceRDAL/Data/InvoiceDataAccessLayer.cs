using System;
using System.Data;
using System.Data.SqlClient;
using InvoiceReportError;

namespace InvoiceRDAL
{
    public class InvoiceDataAccessLayer
    {
        #region Get All Undeliverable Acordding to Time
        public static DataSet GetAllAssociationVendorInvoices(int assocciationId)
        {
            try
            {
                DataSet dsUndeliverables = new DataSet();
                // string sql = Queries.QueryforNonDeliverables();
                string sql = MassCommQuery();

                using (SqlConnection msqconn = new SqlConnection("Server=localhost;Database=DEV_CastleGroup_JenarkPayables;Integrated Security=True;MultipleActiveResultSets=True"))
                using (SqlCommand command = new SqlCommand(sql, msqconn))
                using (SqlDataAdapter dataAdapter = new SqlDataAdapter(command))
                {
                    msqconn.Open();
                    command.Parameters.AddWithValue("@association", assocciationId);
                    dataAdapter.Fill(dsUndeliverables);
                    return dsUndeliverables;   
                }
            }
            catch (Exception e)
            {
                throw new InvoiceReportsError("Error while connecting to Database", e);
            }
        }
        #endregion
        public static byte[] CreateExcel(int assocciationId)
        {
            try
            {             
                DataSet dsUndeliverables = GetAllAssociationVendorInvoices(assocciationId);
                byte[] workBook = GetWorkBook(dsUndeliverables);
                return workBook;
            }
            catch (Exception e)
            {
                throw new InvoiceReportsError("Error while connecting to Database", e);
            }
        }

        private static byte[] GetWorkBook(DataSet dsUndeliverables)
        {
            return ExcelS.ExportToExcel(dsUndeliverables);
        }

        private static string MassCommQuery()
        {
            return "SELECT	DISTINCT Logs.InvoiceId as 'Invoice ID',Logs.APInvoiceLogId as 'Log ID',COALESCE(InvoiceCode, 'Not Exported to Jenark') AS 'Invoice Number',COALESCE(str(VoucherNumber), 'Not Exported to Jenark') AS 'Voucher Number', COALESCE(Detail.vendorcode, 'No Vendor Selected') AS 'Vendor Code',COALESCE(vname.vendorName, 'No Vendor Selected') As 'Vendor Name',DisplayName AS 'Association Name',CASE WHEN Invoice.source = 0 THEN 'Castle ClicK' WHEN Invoice.source = 1 THEN 'Jenark'end as Sources, COALESCE(InvoiceAmount,0) as Invoice_Amount, COALESCE(InvoiceDate,0) as Date,COALESCE(case WHEN LogType = -1 THEN 'Error' WHEN LogType = 1 THEN 'Approved' WHEN LogType = 6  THEN 'PreAppoved' WHEN LogType = 13 THEN 'ApprovalStepNote'  WHEN LogType = 11 THEN 'Invoice_Exported'  WHEN LogType = 12  THEN 'SkippedApproval' WHEN LogType = 13  THEN 'ApprovalStepNote'    WHEN LogType = 10 THEN 'QCPass'   WHEN LogType = 9  THEN 'QCFail'   WHEN LogType = 8 THEN 'EntryComplete'  WHEN LogType = 7  THEN 'Created'  WHEN LogType = 14  THEN 'Restart'  WHEN LogType = 2 THEN 'Rejected' WHEN LogType = 3 THEN 'Modified'  WHEN LogType = 4 THEN 'Note'  WHEN LogType = 5 THEN 'Reset'   WHEN LogType = 999  THEN 'Deleted'  End, 'Blank') as Event, Logs.ModifiedDate,COALESCE({ fn CONCAT(FirstName,{ fn CONCAT('  ' ,LastName)}) }, 'Blank') AS Name, Logs.ModifiedBy, Note FROM DEV_CastleGroup_JenarkPayables.dbo.APInvoiceLog AS Logs RIGHT JOIN DEV_CastleGroup_JenarkPayables.dbo.APInvoice AS Invoice ON Invoice.APInvoiceId = Logs.InvoiceId INNER JOIN DEV_CastleGroup_KingsData.dbo.CG_Associations AS Association ON Association.AssociationID = Invoice.AssociationID LEFT JOIN DEV_CastleGroup_JenarkPayables.[dbo].APInvoiceDetails AS Detail ON Detail.InvoiceId = Logs.InvoiceId LEFT JOIN [DEV_CastleGroup_JenarkPayables].[dbo].[UserProfile] AS Profiles ON Logs.ModifiedBy = Profiles.UserName LEFT JOIN [Test].[dbo].[VC] AS vname on vname.vendorCode = Detail.vendorcode where Invoice.AssociationID = @association  order by Logs.InvoiceId";

        }
    }
}
