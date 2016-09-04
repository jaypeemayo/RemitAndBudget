﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RemitAndBudgetAPI.Models
{
    public class UserInfo
    {
        public UserInfo()
        {
            this.TransactionInfos = new HashSet<TransactionInfo>();
        }
        public int UserInfoId { get; set; }
        public string Name { get; set; }

        public string Password { get; set; }

        public int UserType { get; set; }

        public virtual ICollection<TransactionInfo> TransactionInfos { get; set; }
    }
}