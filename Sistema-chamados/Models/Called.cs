namespace Sistema_chamados.Models
{
    public class Called
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public int SectorId { get; set; }
        public bool Resolved { get; set; }

        public User User { get; set; }
        public Sector Sector { get; set; }
    }
}
