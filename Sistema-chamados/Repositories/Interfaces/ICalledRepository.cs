using Sistema_chamados.Models;

namespace Sistema_chamados.Repositories.Interfaces
{
    public interface ICalledRepository
    {
        Task<Called> CreateAsync(Called called);
        Task<IEnumerable<Called>> GetAllAsync();
        Task<Called> GetByIdAsync(int called);
        Task UpdateAsync(Called called);
        Task DeleteAsync(Called called);
    }
}
