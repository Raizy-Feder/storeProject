using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingController : ControllerBase
    {
        IShoppingBL I;
        public ShoppingController(IShoppingBL i)
        {
            I = i;
        }
        [HttpGet("GetAll")]
        public List<ShoppingDTO> GetAll()
        {
            return I.GetAll();
        }
        [HttpGet("GetShoppingByCustCode")]
        public List<ShoppingDTO> GetShoppingByCustCode(int custCode)
        {
            return I.GetShoppingByCustCode(custCode);
        }
        [HttpPost("Save")]
        public int Save(ShoppingDTO s)
        {
            return I.saveShopping(s);
        }


    }
}
