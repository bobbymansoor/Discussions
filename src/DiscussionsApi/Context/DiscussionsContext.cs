using DiscussionsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DiscussionsApi.Context
{
    public class DiscussionsContext : DbContext
    {
        public DiscussionsContext(DbContextOptions<DiscussionsContext> options)
            : base(options) { }

        public DiscussionsContext() { }
        public DbSet<Discussion> Discussions { get; set; }
    }
}
