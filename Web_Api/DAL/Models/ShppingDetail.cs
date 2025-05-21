using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class ShppingDetail
    {
        public int ShoppingDetailsCode { get; set; }
        public int? ShoppingCode { get; set; }
        public int? GameCode { get; set; }
        public int? Qty { get; set; }

        public virtual Game? GameCodeNavigation { get; set; }
        public virtual Shopping? ShoppingCodeNavigation { get; set; }
    }
}
