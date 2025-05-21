using AutoMapper;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class MyProfile : Profile
    {
        public MyProfile()
        {
            //game
            CreateMap<Game, GameDTO>().
                ForMember(v => v.CategoryName, y => y.
                MapFrom(v => v.CategoryCodeNavigation.CategoryName));
            CreateMap<GameDTO, Game>();
            //category
            CreateMap<Category, CategoryDTO>();
            CreateMap<CategoryDTO, Category>();
            //custemer
            CreateMap<Customer, CustomerDTO>();
            CreateMap<CustomerDTO, Customer>();
            //Shopping
            CreateMap<Shopping, ShoppingDTO>();
            CreateMap<ShoppingDTO, Shopping>();
            //ShoppingDetail
            CreateMap<ShppingDetail, ShoppingDetailDTO>().
                ForMember(v => v.Pic, y => y.
                MapFrom(v => v.GameCodeNavigation.Pic)).
                ForMember(v => v.GameName, y => y.
                MapFrom(v => v.GameCodeNavigation.GameName));
            CreateMap<ShoppingDetailDTO, ShppingDetail>();
        }
    }
}
