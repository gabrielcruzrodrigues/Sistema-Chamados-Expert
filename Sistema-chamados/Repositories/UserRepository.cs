using Microsoft.EntityFrameworkCore;
using Sistema_chamados.Database;
using Sistema_chamados.Extensions;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;

namespace Sistema_chamados.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MyAppContext _context;
        private readonly ILogger<UserRepository> _logger;

        public UserRepository(MyAppContext context, ILogger<UserRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<User> CreateAsync(User user)
        {
            try
            {
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
                return user;
            }
            catch(Exception ex)
            {
                _logger.LogError($"An error occured when tryning to create the user! err: {ex.Message}");
                throw new HttpResponseException(400, "An error occured when tryning to create the user");
            }
        }

        public async Task DeleteAsync(User user)
        {
            try
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Un error occured when tryning delete a user! - err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning delete a user!");
            }
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<User> GetByIdAsync(int userId)
        {
            var user = await _context.Users
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user is null)
            {
                throw new HttpResponseException(404, "The user not found");
            }

            return user;
        }

        public async Task UpdateAsync(User user)
        {
            try
            {
                _context.Entry(user).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Un error occured when tryning update a user! err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning update a user!");
            }
        }
    }
}
