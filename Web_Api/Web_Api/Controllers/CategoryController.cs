using BL.services;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        ICategoryBL I;
        public CategoryController(ICategoryBL i)
        {
            I = i;
        }
        [HttpGet("GetAllCategories")]
        public List<CategoryDTO> GetAllCategories()
        {

            return I.GetAll();
        }
        [HttpPut("UpdateCategory/{code}")]
        public bool UpdateCategory(int code, CategoryDTO category)
        {
            return I.Update(code, category);
        }
        [HttpDelete("DeleteCategory/{code}")]
        public bool DeleteCategory(int code)
        {
            return I.Delete(code);
        }
        [HttpGet("GetCategoriesByCode/{code}")]
        public Category GetCategoriesByCode(int code)
        {
            return I.GetCategoryByCode(code);
        }
        [HttpPost("AddCategory")]
        public bool AddCategory(CategoryDTO category)
        {
            return I.Add(category);

        }

    }
}
