using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingDTO
    {
        public int ShoppingCode { get; set; }
        public int? CustCode { get; set; }
        public DateTime? ShoppingDate { get; set; }
        public int? ShoppingSum { get; set; }

    }
}

