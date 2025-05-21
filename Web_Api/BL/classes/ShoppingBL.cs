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
    public class ShoppingBL : IShoppingBL
    {
        IMapper iMapper;
        IShoppingDAL I;
        public ShoppingBL(IShoppingDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public List<ShoppingDTO> GetAll()
        {
            return iMapper.Map<List<Shopping>, List<ShoppingDTO>>(I.GetAll());
        }

        public List<ShoppingDTO> GetShoppingByCustCode(int custCode)
        {
            List<ShoppingDTO> all = new(); 
            all= iMapper.Map<List<Shopping>, List<ShoppingDTO>>(I.GetAll());
            List<ShoppingDTO> newList =new();
            foreach (ShoppingDTO item in all)
            {
                if (item.CustCode == custCode)
                    newList.Add(item);
            }
            return newList;                     
        }

        public int saveShopping(ShoppingDTO s)
        {
            s.ShoppingDate = DateTime.Today;
            Shopping s1 = iMapper.Map<ShoppingDTO, Shopping>(s);
            I.Add(s1);
            return s1.ShoppingCode;


        }
    }
}