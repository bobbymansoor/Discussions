using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscussionsApi.Models;
using DiscussionsApi.Context;

namespace DiscussionsApi.Repository
{
    public class DiscussionsRepository : IDiscussionsRepository
    {
        private DiscussionsContext _context;

        public DiscussionsRepository(DiscussionsContext context)
        {
            _context = context;
        }

        public void Add(Discussion item)
        {
            if (item.Id != 0)
            {

                Update(item.Id, item);
            }
            else
            {
                _context.Discussions.Add(item);
                _context.SaveChanges();
            }
        }

        public Discussion Find(string id)
        {
            return _context.Discussions
                .Where(e => e.Id.ToString() == id)
                .SingleOrDefault();
        }

        public IEnumerable<Discussion> GetAll()
        {
            return _context.Discussions.ToList();
        }

        public IEnumerable<Discussion> GetAllByUserName(string userName)
        {
            return _context.Discussions
                .Where(e => e.ObserverName == userName).ToList();
        }

        public void Remove(string Id)
        {
            var itemToRemove = _context.Discussions.SingleOrDefault(r => r.Id.ToString() == Id);
            if (itemToRemove != null)
            {
                _context.Discussions.Remove(itemToRemove);
                _context.SaveChanges();
            }
        }

        public void Update(int id, Discussion discussion)
        {
            var itemToUpdate = _context.Discussions.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
                itemToUpdate.ObserverName = discussion.ObserverName;
                itemToUpdate.Location = discussion.Location;
                itemToUpdate.ColleagueName = discussion.ColleagueName;
                itemToUpdate.DateOfDiscussion = discussion.DateOfDiscussion;
                itemToUpdate.Subject = discussion.Subject;
                itemToUpdate.Outcomes = discussion.Outcomes;
                _context.Discussions.Update(itemToUpdate);
                _context.SaveChanges();
            }
        }
    }
}
