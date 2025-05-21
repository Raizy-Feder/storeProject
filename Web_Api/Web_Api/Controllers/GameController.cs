using BL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IGameBL I;
        public GameController(IGameBL i)
        {
            I = i;
        }
        [HttpGet("GetAllGames")]
        public List<GameDTO> GetAllGames()
        {
            return I.GetAll();
        }
        [HttpGet("GetGameByCode/{code}")]
        public GameDTO GetGameByCode(int code)
        {
            return I.GetGameByCode(code);
        }
        [HttpGet("GetGamsByCategoyCode/{code}")]
        public List<GameDTO> GetGamsByCategoyCode(int code)
        {
            return I.GetGamesByCategoryCode(code);
        }
        [HttpPut("UpdateGame/{code}")]
        public bool UpdateGame(int code, GameDTO game)
        {
            return I.Update(code,game);
        }
        [HttpPost("UpdateQTY/{code}")]
        //public bool UpdateQTY(int code, int qty)
        //{
        //    return I.UpdateQTY(code, qty);
        //}
        [HttpPost("AddGame")]
        public bool AddGame(GameDTO game)
        {
            return I.Add(game);
        }
        [HttpDelete("DelereGame/{code}")]
        public bool DelereGame(int code)
        {
            return I.Delete(code);
        }
    }
}
