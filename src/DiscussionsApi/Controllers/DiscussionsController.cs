using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DiscussionsApi.Repository;
using DiscussionsApi.ViewModels;
using AutoMapper;
using DiscussionsApi.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace DiscussionsApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class DiscussionsController : Controller
    {
        private readonly IDiscussionsRepository _discussionssRepo;
        private readonly IMapper _mapper;

        public DiscussionsController(IMapper mapper, IDiscussionsRepository repo)
        {
            _discussionssRepo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<DiscussionViewModel> GetAll()
        {
            var identity = User.Identity as ClaimsIdentity;
            var userName = identity.FindFirst("name").Value;

            return _mapper.Map<IEnumerable<DiscussionViewModel>>(_discussionssRepo.GetAllByUserName(userName));
        }

        [HttpGet("{id}", Name = "GetDiscussion")]
        public IActionResult GetById([FromQuery] string id)
        {
            var item = _discussionssRepo.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] DiscussionViewModel discussion)
        {
            if (discussion == null)
            {
                return BadRequest();
            }
            _discussionssRepo.Add(_mapper.Map<Discussion>(discussion));
            return CreatedAtRoute("GetDiscussion", new { Controller = "Discussions", id = discussion.Id }, discussion);
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromQuery] int id, [FromBody] DiscussionViewModel discussion)
        {
            if (discussion == null)
            {
                return BadRequest();
            }
            _discussionssRepo.Update(id, _mapper.Map<Discussion>( discussion));
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public void Delete([FromQuery] string id)
        {
            _discussionssRepo.Remove(id);
        }
    }
}
