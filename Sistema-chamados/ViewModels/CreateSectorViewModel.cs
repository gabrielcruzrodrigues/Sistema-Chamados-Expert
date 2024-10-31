using Sistema_chamados.Models;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.ViewModels
{
    public class CreateSectorViewModel
    {
        [Required]
        public required string Name { get; set; }

        public Sector CreateSector()
        {
            return new Sector
            {
                Name = Name,
                CreatedAt = DateTime.UtcNow
            };
        }
    }
}
