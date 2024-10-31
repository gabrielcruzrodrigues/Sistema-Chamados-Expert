using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.Models;

public class Sector
{
    [Key]
    public int Id { get; set; }
    [Required]
    public required string Name { get; set; }
    public DateTime CreatedAt { get; set; }
}
