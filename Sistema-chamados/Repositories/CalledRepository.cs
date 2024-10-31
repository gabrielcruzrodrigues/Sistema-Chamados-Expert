using Microsoft.EntityFrameworkCore;
using Sistema_chamados.Database;
using Sistema_chamados.Extensions;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;

namespace Sistema_chamados.Repositories
{
    public class CalledRepository : ICalledRepository
    {
        private readonly MyAppContext _context;
        private readonly ILogger<CalledRepository> _logger;

        public CalledRepository(MyAppContext context, ILogger<CalledRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Called> CreateAsync(Called called)
        {
            try
            {
                await _context.Calleds.AddAsync(called);
                await _context.SaveChangesAsync();
                return called;
            }
            catch (Exception ex)
            {
                _logger.LogError($"An error occured when tryning to create the called! err: {ex.Message}");
                throw new HttpResponseException(400, "An error occured when tryning to create the called");
            }
        }

        public async Task DeleteAsync(Called called)
        {
            try
            {
                _context.Calleds.Remove(called);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Un error occured when tryning delete a called! - err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning delete a called!");
            }
        }

        public async Task<IEnumerable<Called>> GetAllAsync()
        {
            return await _context.Calleds
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<Called> GetByIdAsync(int calledId)
        {
            var called = await _context.Calleds
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == calledId);

            if (called is null)
            {
                throw new HttpResponseException(404, "The called not found");
            }

            return called;
        }

        public async Task UpdateAsync(Called called)
        {
            try
            {
                _context.Entry(called).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Un error occured when tryning update a called! err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning update a called!");
            }
        }
    }
}
