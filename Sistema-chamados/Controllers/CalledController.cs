using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;
using Sistema_chamados.ViewModels;

namespace Sistema_chamados.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CalledController : ControllerBase
    {
        private readonly ICalledRepository _calledRepository;
        private readonly IUserRepository _userRepository;
        private readonly ISectorRepository _sectorRepository;

        public CalledController(
            ICalledRepository calledRepository, IUserRepository userRepository, ISectorRepository sectorRepository
        )
        {
            _calledRepository = calledRepository;
            _userRepository = userRepository;
            _sectorRepository = sectorRepository;
        }

        [HttpPost]
        public async Task<ActionResult<Called>> Create(CreateCalledViewModel request)
        {
            if (request is null)
            {
                return BadRequest("the Called body must not be null");
            }

            var userVerify = await _userRepository.GetByIdAsync(request.UserId);
            if (userVerify is null)
            {
                return NotFound("User not found");
            }

            var sectorVerify = await _sectorRepository.GetByIdAsync(request.SectorId);
            if (sectorVerify is null)
            {
                return BadRequest("Sector not found");
            }

            Called called = request.createCalled();
            var result = await _calledRepository.CreateAsync(called);
            return StatusCode(201, result);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Called>>> GetAll()
        {
            return Ok(await _calledRepository.GetAllAsync());
        }

        [HttpGet("{calledId:int}")]
        public async Task<ActionResult<Called>> GetById(int calledId)
        {
            if (calledId <= 0)
            {
                return BadRequest("The id for search calledId must be greater than zero");
            }

            return Ok(await _calledRepository.GetByIdAsync(calledId));
        }

        [HttpDelete("{calledId:int}")]
        public async Task<IActionResult> Delete(int calledId)
        {
            if (calledId <= 0)
            {
                return BadRequest("The id for search called must be greater than zero");
            }

            Called called = await _calledRepository.GetByIdAsync(calledId);
            await _calledRepository.DeleteAsync(called);
            return NoContent();
        }

        [HttpGet("user/{userId:int}")]
        public async Task<ActionResult<IEnumerable<Called>>> GetByUserId(int userId)
        {
            if (userId <= 0)
            {
                return BadRequest("The id for search called must be greater than zero");
            }

            return Ok(await _calledRepository.GetByUserIdAsync(userId));
        }

        [HttpGet("sector/{sectorId:int}")]
        public async Task<ActionResult<IEnumerable<Called>>> GetBysectorId(int sectorId)
        {
            if (sectorId <= 0)
            {
                return BadRequest("The id for search called must be greater than zero");
            }

            return Ok(await _calledRepository.GetBySectorIdAsync(sectorId));
        }
    }
}

