using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RemitAndBudgetAPI.Models
{
    public class TransactionInfo
    {
        public int TransactionInfoId { get; set; }
        public string Amount { get; set; }
        public DateTime Month { get; set; }
        public string Description { get; set; }
        public string Action { get; set; }
        public int UserInfoId { get; set; }
        public virtual UserInfo UserInfo { get; set; }
    }
}