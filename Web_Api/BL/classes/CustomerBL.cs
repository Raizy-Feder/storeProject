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
    public class CustomerBL : ICustomerBL
    {
        IMapper iMapper;

        ICustomerDAL I;
        public CustomerBL(ICustomerDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool Add(CustomerDTO customer)
        {
            Customer customerAdd = iMapper.Map<CustomerDTO, Customer>(customer);
            return I.Add(customerAdd);
        }

        public List<CustomerDTO> GetAll()
        {
            return iMapper.Map<List<Customer>, List<CustomerDTO>>(I.GetAll());
        }
        public bool IfExist(string name, string pass)
        {
            Customer c = I.GetAll().FirstOrDefault(c => c.Pass == pass && c.CustName == name);
            if (c == null)
                return false;
            return true;
        }
    }
}
