using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DiscussionsApi.Context;

namespace DiscussionsApi.Migrations
{
    [DbContext(typeof(DiscussionsContext))]
    partial class DiscussionsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DiscussionsApi.Models.Discussion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ColleagueName");

                    b.Property<string>("DateOfDiscussion");

                    b.Property<string>("Location");

                    b.Property<string>("ObserverName");

                    b.Property<string>("Outcomes");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.ToTable("Discussions");
                });
        }
    }
}
