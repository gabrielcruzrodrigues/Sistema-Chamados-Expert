using Sistema_chamados.Models;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.ViewModels
{
    public class CreateCalledViewModel
    {
        [Required]
        [MinLength(3, ErrorMessage = "The Username must have more 3 words")]
        public required string Name { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int SectorId { get; set; }
        [Required]
        public bool Resolved { get; set; }

        public Called createCalled()
        {
            return new Called
            {
                Name = Name,
                CreatedAt = DateTime.UtcNow,
                UserId = UserId,
                SectorId = SectorId,
                Resolved = false
            };
        }
    }
}
