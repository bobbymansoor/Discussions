using System;

namespace DiscussionsApi.Models
{
    public class Discussion
    {
        public int Id { get; set; }
        public string ObserverName { get; set; }
        public string DateOfDiscussion { get; set; }
        public string Location { get; set; }
        public string ColleagueName { get; set; }
        public string Subject { get; set; }
        public string Outcomes { get; set; }
    }
}
