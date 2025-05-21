using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class ShoppingDAL : IShoppingDAL
    {
        RaizyRokachProject_2025Context DB = new();

        public bool Add(Shopping s)
        {
            try
            {
                DB.Shoppings.Add(s);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }
        public List<Shopping> GetAll()
        {
            return DB.Shoppings.ToList();
        }

    }
}
