using AutoMapper;
using DiscussionsApi.Models;
using DiscussionsApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscussionsApi.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DiscussionViewModel, Discussion>().ReverseMap();
        }
    }
}
