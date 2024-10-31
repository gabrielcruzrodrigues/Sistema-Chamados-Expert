namespace Sistema_chamados.Database;

using Microsoft.EntityFrameworkCore;
using Sistema_chamados.Models;

public class MyAppContext : DbContext
{
    public MyAppContext(DbContextOptions<MyAppContext> options) : base(options)
    { }

    public DbSet<User>? Users { get; set; }
    public DbSet<Called>? Calleds { get; set; }
    public DbSet<Sector>? Sectors { get; set; }
}
