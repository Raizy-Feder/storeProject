using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IShoppingDAL
    {
        public bool Add(Shopping s);
        public List<Shopping> GetAll();

    }
}
