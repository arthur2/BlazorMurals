using System.Collections.Generic;

namespace BlazorMurals.Shared.Models
{
    // Root object for galleryData.json — now uses Album/AlbumImage directly (no DTOs)
    public class GalleryData
    {
        public Artist Artist { get; set; } = new();

        public List<Album> Albums { get; set; } = new();
    }

    public class Artist
    {
        public string ArtistName { get; set; } = string.Empty;
        public string ArtistBio { get; set; } = string.Empty;
        public string ArtistPhotoPath { get; set; } = string.Empty;
        public string Contact { get; set; } = string.Empty;
    }
}