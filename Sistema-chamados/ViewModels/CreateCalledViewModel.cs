using Sistema_chamados.Models;
using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.ViewModels
{
    public class CreateCalledViewModel
    {
        [Required]
        [MinLength(3, ErrorMessage = "The Username must have more 3 words")]
        public required string Title { get; set; }

        [Required]
        [MinLength(3, ErrorMessage = "The Content is required")]
        public required string Content { get; set; }
     
        [Required]
        public int UserId { get; set; }
        [Required]
        public int SectorId { get; set; }

        public Called createCalled()
        {
            return new Called
            {
                Title = Title,
                Content = Content,
                CreatedAt = DateTime.UtcNow,
                UserId = UserId,
                SectorId = SectorId,
                Resolved = false
            };
        }
    }
}
