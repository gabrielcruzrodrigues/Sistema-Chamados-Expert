﻿using Sistema_chamados.Models;

namespace Sistema_chamados.Repositories.Interfaces
{
    public interface ISectorRepository
    {
        Task<Sector> CreateAsync(Sector sector);
        Task<IEnumerable<Sector>> GetAllAsync();
        Task<Sector> GetByIdAsync(int sector);
        Task UpdateAsync(Sector sector);
        Task DeleteAsync(Sector sector);
    }
}
