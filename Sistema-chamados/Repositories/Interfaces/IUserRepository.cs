using Sistema_chamados.Models;

namespace Sistema_chamados.Repositories.Interfaces;

public interface IUserRepository
{
    Task<User> CreateAsync(User user);
    Task<IEnumerable<User>> GetAllAsync();
    Task<User> GetByIdAsync(int userId);
    Task UpdateAsync(User user);
    Task DeleteAsync(User user);
}
