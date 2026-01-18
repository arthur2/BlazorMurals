using System.Collections.Generic;

namespace BlazorMurals.Shared.Models
{
    public class AlbumImage
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string DateCreated { get; set; } = string.Empty;
        public string Thumbnail { get; set; } = string.Empty;
        public string ImagePath { get; set; } = string.Empty;
    }

    public class Album
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string DateCreated { get; set; } = string.Empty;

        // JSON uses "thumbnail" for album-level cover — keep the same property
        public string Thumbnail { get; set; } = string.Empty;

        // Backwards-compatible convenience property used by UI components
        public string CoverUrl => Thumbnail;

        public List<AlbumImage> Images { get; set; } = new List<AlbumImage>();
    }
}