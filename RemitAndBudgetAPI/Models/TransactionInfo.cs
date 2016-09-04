using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RemitAndBudgetAPI.Models
{
    public class TransactionInfo
    {
        public int Id { get; set; }
        public string Amount { get; set; }
        public DateTime Month { get; set; }
        public string Description { get; set; }
        public string Action { get; set; }
    }
}