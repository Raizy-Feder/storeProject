using DAL.Models;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICategoryBL
    {

        public bool Add(CategoryDTO  category);
        public bool Delete(int code);
        public List<CategoryDTO> GetAll();
        public Category GetCategoryByCode(int code);
        public bool Update(int code, CategoryDTO category);
    }
}

