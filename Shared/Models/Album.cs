using System.Collections.Generic;

namespace BlazorMurals.Shared.Models
{
    public class Album
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string CoverUrl { get; set; } = string.Empty;
        public List<string> Images { get; set; } = new List<string>();
    }
}