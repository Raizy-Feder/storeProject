using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class ShoppingDetailDAL :IShoppingDetailDAL
    {
        RaizyRokachProject_2025Context DB = new();

        public bool Add(ShppingDetail s)
        {
            try
            {
                DB.ShppingDetails.Add(s);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }

        public List<ShppingDetail> GetAll()
        {
            return DB.ShppingDetails.Include(j => j.GameCodeNavigation).ToList();
        }
    }
}
