using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Shopping
    {
        public Shopping()
        {
            ShppingDetails = new HashSet<ShppingDetail>();
        }

        public int ShoppingCode { get; set; }
        public int? CustCode { get; set; }
        public DateTime? ShoppingDate { get; set; }
        public int? ShoppingSum { get; set; }

        public virtual Customer? CustCodeNavigation { get; set; }
        public virtual ICollection<ShppingDetail> ShppingDetails { get; set; }
    }
}
