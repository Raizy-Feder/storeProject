using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IGameBL
    {
        public bool Add(GameDTO game);
        public bool Delete(int code);
        public List<GameDTO> GetAll();
        public GameDTO GetGameByCode(int code);
        public bool Update(int code, GameDTO game);
        public List<GameDTO> GetGamesByCategoryCode(int code);

    }
}
