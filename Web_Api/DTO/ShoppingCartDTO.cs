using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingCartDTO
    {
        public int GameCode { get; set; }
        public string? GameName { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public int? FinalPrice { get; set; }
    }
}
