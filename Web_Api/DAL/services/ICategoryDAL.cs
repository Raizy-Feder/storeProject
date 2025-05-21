using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface ICategoryDAL
    {
        public List<Category> GetAll();
        public bool Add(Category c);
        public bool Delete(int code);
        public bool Update(int code, Category c);
    }
}
