using System;
using System.Collections.Generic;

namespace Web_Api.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Shoppings = new HashSet<Shopping>();
        }

        public int CustCode { get; set; }
        public string? CustName { get; set; }
        public string? Pass { get; set; }
        public string? CreditInformation { get; set; }

        public virtual ICollection<Shopping> Shoppings { get; set; }
    }
}
