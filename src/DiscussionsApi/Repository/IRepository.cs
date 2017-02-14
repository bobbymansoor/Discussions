using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscussionsApi.Repository
{
    public interface IRepository<T> where T: class 
    {
        void Add(T item);
        IEnumerable<T> GetAll();
        T Find(string id);
        void Remove(string Id);
        void Update(int id, T item);
    }
}
