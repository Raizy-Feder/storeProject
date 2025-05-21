using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICustomerBL
    {
        public List<CustomerDTO> GetAll();
        public bool  Add(CustomerDTO customer);
        public bool IfExist(string name, string pass);

    }
}
