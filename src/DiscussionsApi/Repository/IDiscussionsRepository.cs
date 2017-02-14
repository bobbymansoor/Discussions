using DiscussionsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscussionsApi.Repository
{
    public interface IDiscussionsRepository : IRepository<Discussion>
    {
        IEnumerable<Discussion> GetAllByUserName(string userName);
    }
}
