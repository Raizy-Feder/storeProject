using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IShoppingDetailBL
    {
        public bool AddSal(int code, List<ShoppingCartDTO> sal);
        public List<ShoppingDetailDTO> GetShoppingDetailByCode(int code);
        public List<ShoppingDetailDTO> GetAll();


    }
}
