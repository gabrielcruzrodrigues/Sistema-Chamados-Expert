using Microsoft.EntityFrameworkCore;
using Sistema_chamados.Database;
using Sistema_chamados.Extensions;
using Sistema_chamados.Models;
using Sistema_chamados.Repositories.Interfaces;

namespace Sistema_chamados.Repositories
{
    public class SectorRepository : ISectorRepository
    {
        private readonly MyAppContext _context;
        private readonly ILogger<SectorRepository> _logger;

        public SectorRepository(MyAppContext context, ILogger<SectorRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Sector> CreateAsync(Sector sector)
        {
            try
            {
                await _context.Sectors.AddAsync(sector);
                await _context.SaveChangesAsync();
                return sector;
            }
            catch (Exception ex)
            {
                _logger.LogError($"An error occured when tryning to create the sector! err: {ex.Message}");
                throw new HttpResponseException(400, "An error occured when tryning to create the sector");
            }
        }

        public async Task DeleteAsync(Sector sector)
        {
            try
            {
                _context.Sectors.Remove(sector);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Un error occured when tryning delete a sector! - err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning delete a sector!");
            }
        }

        public async Task<IEnumerable<Sector>> GetAllAsync()
        {
            return await _context.Sectors
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<Sector> GetByIdAsync(int sectorId)
        {
            var sector = await _context.Sectors
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == sectorId);

            if (sector is null)
            {
                throw new HttpResponseException(404, "The sector not found");
            }

            return sector;
        }

        public async Task UpdateAsync(Sector sector)
        {
            try
            {
                _context.Entry(sector).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Un error occured when tryning update a sector! err: {ex.Message}");
                throw new HttpResponseException(400, "Un error occured when tryning update a sector!");
            }
        }
    }
}
