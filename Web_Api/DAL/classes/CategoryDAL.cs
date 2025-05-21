using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class CategoryDAL : ICategoryDAL
    {
        RaizyRokachProject_2025Context DB = new();
        public bool Add(Category c)
        {
            try 
            {
                DB.Categories.Add(c);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
            
        }

        public bool Delete(int code)
        {
            try
            {
                Category c = DB.Categories.FirstOrDefault(c=>c.CategoryCode==code);
                DB.Categories.Remove(c);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }

        public List<Category> GetAll()
        {
            
               return DB.Categories.ToList();
            
        }

        public bool Update(int code, Category c)
        {
            try
            {

                DB.Categories.FirstOrDefault(o=>o.CategoryCode==code).CategoryName=c.CategoryName;
                
                //DB.Entry(c1).CurrentValues.SetValues(c);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }
    }
}

