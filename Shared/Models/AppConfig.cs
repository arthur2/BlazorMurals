namespace BlazorMurals.Shared.Models
{
    public  class AppConfig
    {
        public string Theme { get; set; } = String.Empty;
        public bool RoundedProfilePic { get; set; }
        public bool RequireLegalAffirmation { get; set; }
        public string FeaturedAlbumHeading { get; set; } = String.Empty;
    }
}
