using DAL.classes;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IShoppingDetailDAL
    {
        public bool Add(ShppingDetail s);
        public List<ShppingDetail> GetAll();

    }
}
