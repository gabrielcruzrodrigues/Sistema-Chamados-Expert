using Sistema_chamados.Models;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.ViewModels
{
    public class UpdateSectorViewModel
    {
        [Required]
        public required string Name { get; set; }

        public Sector UpdateSector(Sector sector)
        {
            sector.Name = Name;
            return sector;
        }
    }
}
