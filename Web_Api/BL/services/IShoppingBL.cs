using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IShoppingBL
    {
        //שמירת רשומה בטבלתקניות
        public int saveShopping(ShoppingDTO s);
        public List<ShoppingDTO> GetAll();

        public List<ShoppingDTO> GetShoppingByCustCode(int custCode);

        
    }
}
