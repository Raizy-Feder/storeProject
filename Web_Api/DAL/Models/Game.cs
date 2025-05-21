using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Game
    {
        public Game()
        {
            ShppingDetails = new HashSet<ShppingDetail>();
        }

        public int GameCode { get; set; }
        public string? GameName { get; set; }
        public double? Price { get; set; }
        public int? QuantityInStock { get; set; }
        public int? CategoryCode { get; set; }
        public string? Pic { get; set; }

        public virtual Category? CategoryCodeNavigation { get; set; }
        public virtual ICollection<ShppingDetail> ShppingDetails { get; set; }
    }
}
