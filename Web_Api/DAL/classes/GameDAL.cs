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
    public class GameDAL : IGameDAL
    {
        RaizyRokachProject_2025Context DB = new();
        public bool Add(Game game) 
        {
            try
            {
                DB.Games.Add(game);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }

        public bool Delete(int code)
        {
            try
            {
                Game c = DB.Games.FirstOrDefault(c => c.GameCode == code);
                DB.Games.Remove(c);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }

        public List<Game> GetAll()
        {
            return DB.Games.Include(j => j.CategoryCodeNavigation).ToList();
        }

        public bool Update(int code, Game g)
        {
            try
            {

                DB.Games.FirstOrDefault(o => o.GameCode == code).GameName = g.GameName;
                DB.Games.FirstOrDefault(o => o.GameCode == code).Price = g.Price;
                DB.Games.FirstOrDefault(o => o.GameCode == code).QuantityInStock = g.QuantityInStock;
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }
      
       
        
    }
}
