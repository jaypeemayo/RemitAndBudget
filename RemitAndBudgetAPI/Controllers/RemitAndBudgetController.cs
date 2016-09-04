using RemitAndBudgetAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RemitAndBudgetAPI.Controllers
{
   
    public class RemitAndBudgetController : ApiController
    {
        static List<TransactionInfo> transactionInfo = new List<TransactionInfo>();
        public RemitAndBudgetController()
        {
        

        }
        // GET: api/RemitAndBudget
        public IEnumerable<TransactionInfo> Get()
        {
            return transactionInfo;
        }
        
        // GET: api/RemitAndBudget/5
        public TransactionInfo Get(int id)
        {
            return transactionInfo.Where(o=>o.TransactionInfoId == id).FirstOrDefault();
        }

        //// POST: api/RemitAndBudget
        //public void Post([FromBody]string value)
        //{
        //}

        // POST: api/RemitAndBudget

        
        public void Post(TransactionInfo value)
        {
            transactionInfo.Add(value);
        }

        // PUT: api/RemitAndBudget/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/RemitAndBudget/5
        public void Delete(int id)
        {
        }
    }

   
}
