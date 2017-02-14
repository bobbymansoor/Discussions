using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscussionsApi.ViewModels
{
    public class DiscussionViewModel
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
