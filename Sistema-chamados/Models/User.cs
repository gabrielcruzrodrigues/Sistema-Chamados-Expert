using Sistema_chamados.Enums;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.Models;

public class User
{
    [Key]
    public int Id { get; set; }
    [Required]
    [MinLength(3, ErrorMessage = "The Username must have more 3 words")]
    public required string Username { get; set; }
    [Required]
    [MinLength(6, ErrorMessage = "The Password must have more 3 words")]
    public required string Password { get; set; }
    public required RoleEnum Role { get; set; }
    public DateTime CreatedAt { get; set; }
}
