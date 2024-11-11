using System.ComponentModel.DataAnnotations;

namespace Sistema_chamados.Models
{
    public class Called
    {
        public int Id { get; set; }
        [Required]
        [MinLength(3, ErrorMessage = "The Username must have more 3 words")]
        public required string Title { get; set; }
        [Required]
        public required string Content { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int SectorId { get; set; }
        [Required]
        public bool Resolved { get; set; }

        public User User { get; set; }
        public Sector Sector { get; set; }
    }
}
