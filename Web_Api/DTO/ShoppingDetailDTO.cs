using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingDetailDTO
    {
        public int ShoppingDetailsCode { get; set; }
        public int? ShoppingCode { get; set; }
        public int? GameCode { get; set; }
        public int? Qty { get; set; }

        public string? Pic { get; set; }
        public string? GameName { get; set; }
    }
}
