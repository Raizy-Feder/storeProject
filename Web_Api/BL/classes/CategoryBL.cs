using AutoMapper;
using BL.services;
using DAL.Models;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.classes
{
    public class CategoryBL :ICategoryBL
    {
        IMapper iMapper;

        ICategoryDAL I;
        public CategoryBL(ICategoryDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool Add(CategoryDTO category)
        {
            Category categoryAdd=iMapper.Map<CategoryDTO, Category>(category);
            return I.Add(categoryAdd);
        }

        public bool Delete(int code)
        {
            return I.Delete(code);
        }

        public List<CategoryDTO> GetAll()
        {
            return iMapper.Map<List<Category>,List<CategoryDTO>>(I.GetAll());
        }

        public Category GetCategoryByCode(int code)
        {

            return I.GetAll().FirstOrDefault(x=>x.CategoryCode==code);
        }

        public bool Update(int code, CategoryDTO category)
        {
            Category categoryUp = iMapper.Map<CategoryDTO, Category>(category);
            return I.Update(code,categoryUp);
        }
       
    }
}
