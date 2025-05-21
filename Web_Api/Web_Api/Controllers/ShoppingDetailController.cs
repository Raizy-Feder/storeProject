using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingDetailController : ControllerBase
    {
        IShoppingDetailBL I;
        public ShoppingDetailController(IShoppingDetailBL i)
        {
            I = i;
        }
        [HttpGet("GetShoppingDetailByCodeShopping")]
        public List<ShoppingDetailDTO> GetShoppingDetailByCodeShopping(int code)
        {
            return I.GetShoppingDetailByCode(code);
        }
        [HttpPost("AddSal")]
        public bool AddSal(int code, List<ShoppingCartDTO> sal)
        {
            return I.AddSal(code, sal);
        }

    }
}
