using Microsoft.EntityFrameworkCore;
using Sistema_chamados.Database;

namespace Sistema_chamados.Extensions;

public static class ActiveUpdateMigrationsExtension
{
    public static void ActiveUpdateDatabaseMigrations(this IApplicationBuilder app)
    {
        var env = app.ApplicationServices.GetRequiredService<IWebHostEnvironment>();
        if (env.IsProduction())
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<MyAppContext>();

                context.Database.Migrate();
            }
        }
    }
}
