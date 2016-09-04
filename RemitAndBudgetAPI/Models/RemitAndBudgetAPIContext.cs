using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RemitAndBudgetAPI.Models
{
    public class RemitAndBudgetAPIContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public RemitAndBudgetAPIContext() : base("name=RemitAndBudgetAPIContext")
        {
        }

        public System.Data.Entity.DbSet<RemitAndBudgetAPI.Models.TransactionInfo> TransactionInfoes { get; set; }

        public System.Data.Entity.DbSet<RemitAndBudgetAPI.Models.UserInfo> UserInfoes { get; set; }
    }
}
