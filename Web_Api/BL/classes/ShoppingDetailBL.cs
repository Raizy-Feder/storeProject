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
    public class ShoppingDetailBL : IShoppingDetailBL
    {
        IMapper iMapper;
        IShoppingDetailDAL I;
        public ShoppingDetailBL(IShoppingDetailDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }
        public bool AddSal(int code, List<ShoppingCartDTO> sal)
        {
            try
            {
                for (int i = 0; i < sal.Count; i++)
                {

                    ShppingDetail s = new();
                    s.ShoppingCode = code;
                    s.GameCode = sal[i].GameCode;
                    s.Qty = sal[i].Quantity;
                    I.Add(s);
                }
                return true;
            }
            catch { return false; }


        }

        public List<ShoppingDetailDTO> GetAll()
        {
            return iMapper.Map<List<ShppingDetail>, List<ShoppingDetailDTO>>(I.GetAll());
        }

        public List<ShoppingDetailDTO> GetShoppingDetailByCode(int code)
        {
            List<ShoppingDetailDTO> s = new();
            List<ShoppingDetailDTO> all = iMapper.Map<List<ShppingDetail>, List<ShoppingDetailDTO>>(I.GetAll());
            foreach (var item in all)
                if (item.ShoppingCode == code)
                    s.Add(item);
            return s;

        }
    }
}
