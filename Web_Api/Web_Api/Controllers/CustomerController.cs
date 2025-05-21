using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerBL I;
        public CustomerController(ICustomerBL i)
        {
            I = i;
        }
        [HttpGet("GetAllCustomers")]
        public List<CustomerDTO> GetAllCustomers()
        {
            return I.GetAll();
        }
        [HttpPost("AddCustomer")]
        public bool AddCustomer(CustomerDTO customer)
        {
            return I.Add(customer);
        }
        [HttpGet("IfExist")]
        public bool IfExist(string name, string pass)
        {
            return I.IfExist(name, pass);
        }
    }
}
