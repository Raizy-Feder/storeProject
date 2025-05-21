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
    public class GameBL : IGameBL
    {
        RaizyRokachProject_2025Context DB = new();


        IMapper iMapper;
        IGameDAL I;
        public GameBL(IGameDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool Add(GameDTO game)
        {
            Game gameAdd=iMapper.Map<GameDTO,Game>(game);
            return I.Add(gameAdd);
        }

        public bool Delete(int code)
        {
            return I.Delete(code);  
        }

        public List<GameDTO> GetAll()
        {
            return iMapper.Map<List<Game>, List<GameDTO>>(I.GetAll());
        }

        public GameDTO GetGameByCode(int code)
        {

            return iMapper.Map<List<Game>, List<GameDTO>>(I.GetAll()).FirstOrDefault(g => g.GameCode == code);

        }

        public List<GameDTO> GetGamesByCategoryCode(int code)
        {
            List<GameDTO> getall=iMapper.Map<List<Game>, List<GameDTO>>(I.GetAll());
            List<GameDTO> games = new();
            for(int i=0;i< getall.Count; i++)
                if(I.GetAll()[i].CategoryCode == code)
                    games.Add(getall[i]);
            return games;
        }

        public bool Update(int code, GameDTO game)
        {
            Game gameUpdate = iMapper.Map<GameDTO, Game>(game);
            return I.Update(code, gameUpdate);
        }
        public bool UpdateQTY(int code, int qty)
        {
            try
            {
                I.GetAll().FirstOrDefault(o => o.GameCode == code).QuantityInStock = qty;

                DB.SaveChanges();
                return true;
            }
            catch { return false; }

        }
    }
}
