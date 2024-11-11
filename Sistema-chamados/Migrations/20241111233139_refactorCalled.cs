using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sistemachamados.Migrations
{
    /// <inheritdoc />
    public partial class refactorCalled : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Calleds",
                newName: "Title");

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Calleds",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Calleds");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Calleds",
                newName: "Name");
        }
    }
}
