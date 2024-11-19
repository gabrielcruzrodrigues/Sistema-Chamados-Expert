using Microsoft.AspNetCore.Connections;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Sistema_chamados.Database;
using Sistema_chamados.Extensions;
using Sistema_chamados.Repositories;
using Sistema_chamados.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "aplicatalogo", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Bearer JWT ",
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{}
        }
    });
});


builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ISectorRepository, SectorRepository>();
builder.Services.AddScoped<ICalledRepository, CalledRepository>();

var postgreSqlConnection = builder.Configuration.GetConnectionString("DefaultConnection");

//----------------------------- Cors -----------------------------
var OriginsWithAllowedAccess = "OriginsWithAllowedAccess";

builder.Services.AddCors(options =>
    options.AddPolicy(name: OriginsWithAllowedAccess,
    policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:9090")
            .AllowAnyHeader()
            .AllowAnyMethod();
    })
);

// Configure DbContext with PostgreSQL
builder.Services.AddDbContext<MyAppContext>(options =>
    options.UseNpgsql(postgreSqlConnection));

var app = builder.Build();
app.ConfigureExceptionHandler();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "aplicatalogo v1");
    c.RoutePrefix = "swagger"; // Define o prefixo de rota (voc� pode deixar vazio para raiz)
});

if (app.Environment.IsProduction())
{
    app.ActiveUpdateDatabaseMigrations();
}

app.UseCors(OriginsWithAllowedAccess);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
