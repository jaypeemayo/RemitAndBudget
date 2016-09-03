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
        // GET: api/RemitAndBudget
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/RemitAndBudget/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/RemitAndBudget
        public void Post([FromBody]string value)
        {
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
