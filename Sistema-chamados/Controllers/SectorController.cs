using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;
using Sistema_chamados.ViewModels;

namespace Sistema_chamados.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SectorController : ControllerBase
    {
        private readonly ISectorRepository _repository;

        public SectorController(ISectorRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<ActionResult<Sector>> Create(CreateSectorViewModel request)
        {
            if (request is null)
            {
                return BadRequest("the Sector body must not be null");
            }

            Sector sector = request.CreateSector();
            var result = await _repository.CreateAsync(sector);
            return StatusCode(201, result);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sector>>> GetAll()
        {
            return Ok(await _repository.GetAllAsync());
        }

        [HttpGet("{sectorId:int}")]
        public async Task<ActionResult<Sector>> GetById(int sectorId)
        {
            if (sectorId <= 0)
            {
                return BadRequest("The id for search sector must be greater than zero");
            }

            return Ok(await _repository.GetByIdAsync(sectorId));
        }

        [HttpDelete("{sectorId:int}")]
        public async Task<IActionResult> Delete(int sectorId)
        {
            if (sectorId <= 0)
            {
                return BadRequest("The id for search sector must be greater than zero");
            }

            Sector sector = await _repository.GetByIdAsync(sectorId);
            await _repository.DeleteAsync(sector);
            return NoContent();
        }

        [HttpPut("{sectorId:int}")]
        public async Task<ActionResult<User>> Update(int sectorId, UpdateSectorViewModel request)
        {
            if (sectorId <= 0)
            {
                return BadRequest("The id for search sector must be greater than zero");
            }

            if (request is null)
            {
                return BadRequest("the User body must not be null");
            }

            Sector sector = await _repository.GetByIdAsync(sectorId);
            Sector sectorUpdated = request.UpdateSector(sector);
            await _repository.UpdateAsync(sectorUpdated);

            return NoContent();
        }
    }
}
