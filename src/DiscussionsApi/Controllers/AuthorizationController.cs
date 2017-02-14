using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DiscussionsApi.Controllers
{
    [Route("api/[controller]")]
    public class AuthorizationController : Controller
    {
        [HttpGet]
        public string Get()
        {
            var identity = User.Identity as ClaimsIdentity;
            if (identity.FindFirst("name")?.Value != null)
                return identity.FindFirst("name")?.Value;
            else
            {
                return string.Empty;
            }
        }

        [HttpGet]
        [Authorize]
        [Route("authorize")]
        public void Authorize()
        {
            Response.Redirect("http://localhost:6000");
        }
    }
}
