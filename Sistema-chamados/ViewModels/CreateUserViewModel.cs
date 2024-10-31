using Sistema_chamados.Models;
using Sistema_chamados.Enums;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.ViewModels
{
    public class CreateUserViewModel
    {
        [MinLength(3, ErrorMessage = "The Username must have more 3 words")]
        public required string Username { get; set; }
        [MinLength(6, ErrorMessage = "The Password must have more 3 words")]
        public required string Password { get; set; }
        [Required]
        public required string Role { get; set; }

        public User CreateUser()
        {
            return new User
            {
                Username = Username,
                Password = Password,
                Role = RoleEnum.USER,
                CreatedAt = DateTime.UtcNow
            };
        }
    }
}
