using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Category
    {
        public Category()
        {
            Games = new HashSet<Game>();
        }

        public int CategoryCode { get; set; }
        public string? CategoryName { get; set; }

        public virtual ICollection<Game> Games { get; set; }
    }
}
