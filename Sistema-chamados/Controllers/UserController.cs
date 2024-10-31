using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;
using Sistema_chamados.ViewModels;

namespace Sistema_chamados.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<ActionResult<User>> Create(CreateUserViewModel request)
        {
            if (request is null)
            {
                return BadRequest("the User body must not be null");
            }

            User user = request.CreateUser();
            var result = await _repository.CreateAsync(user);
            return StatusCode(201, result);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            return Ok(await _repository.GetAllAsync());
        }

        [HttpGet("{userId:int}")]
        public async Task<ActionResult<User>> GetById(int userId)
        {
            if (userId <= 0)
            {
                return BadRequest("The id for search user must be greater than zero");
            }

            return Ok(await _repository.GetByIdAsync(userId));
        }

        [HttpDelete("{userId:int}")]
        public async Task<IActionResult> Delete(int userId)
        {
            if (userId <= 0)
            {
                return BadRequest("The id for search user must be greater than zero");
            }

            User user = await _repository.GetByIdAsync(userId);
            await _repository.DeleteAsync(user);
            return NoContent();
        }

        [HttpPut("{userId:int}")]
        public async Task<ActionResult<User>> Update(int userId, UpdateUserViewModel request)
        {
            if (request is null)
            {
                return BadRequest("the User body must not be null");
            }

            User user = await _repository.GetByIdAsync(userId);
            User userUpdated = request.UpdateUser(user);
            await _repository.UpdateAsync(userUpdated);

            return NoContent();
        }
    }
}
