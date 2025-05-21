using DAL.classes;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IGameDAL
    {
        public List<Game> GetAll();
        public bool Add(Game g);
        public bool Delete(int code);
        public bool Update(int code, Game g);

    }
}
