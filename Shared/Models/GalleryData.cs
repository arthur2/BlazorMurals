using System.Collections.Generic;

namespace BlazorMurals.Shared.Models
{
    // DTOs to mirror wwwroot/galleryData.json structure
    public class GalleryData
    {
        public List<AlbumDto> Albums { get; set; } = new();
    }

    public class AlbumDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string DateCreated { get; set; } = string.Empty;
        public string Thumbnail { get; set; } = string.Empty;
        public List<ImageDto> Images { get; set; } = new();
    }

    public class ImageDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string DateCreated { get; set; } = string.Empty;
        public string Thumbnail { get; set; } = string.Empty;
        public string ImagePath { get; set; } = string.Empty;
    }
}