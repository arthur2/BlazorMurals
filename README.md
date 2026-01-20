# BlazorMurals Artist Portfolio Application

## Overview

BlazorMurals is a Blazor WebAssembly single-page gallery application built with .NET 10.  
It is designed for fast, flexible, and content-driven art or photo galleries, with all content managed via a simple JSON file and static assets.

### Feature Highlights

- **Dynamic Gallery**: Albums and images are loaded from a JSON file (`galleryData.json`)—no code changes required to update content.
- **Responsive UI**: Modern, mobile-friendly layout with smooth transitions and animations.
- **Image Carousel**: Full-screen modal carousel with fade/zoom effects, keyboard navigation, and image captions.
- **18+ Legal Affirmation Modal**: Optional mature content gate, configurable via `appsettings.json`, requiring user affirmation before viewing the site.
- **Theme Support**: Light/dark mode, user preference saved in localStorage.
- **Animated Thumbnails**: Album thumbnails feature slow zoom and opacity transitions on hover.
- **Accessible**: Keyboard navigation for albums and carousel, focus management, and ARIA labels.
- **No Backend Required**: All data and assets are served statically from `wwwroot`.

---

## Technology

- .NET 10
- Blazor WebAssembly (client-side)
- C# 14
- Razor components for UI (`.razor`)
- Static assets in `wwwroot` (images, GIFs, CSS, data)
- Styling: plain CSS in `wwwroot/css/app.css`
- Optional: Bootstrap for basic button and layout styles

---

## Repository Layout

- `Pages/`
  - `Home.razor` — landing page showing featured albums and artist/contact info.
  - `Gallery.razor` — gallery index page.
- `Shared/`
  - `AlbumGallery.razor` — grid of album cards.
  - `AlbumCarousel.razor` — full-screen modal carousel with image title, description, and thumbnails.
- `Shared/Models/`
  - `Album.cs` — domain model: `Album` and `AlbumImage`.
  - `GalleryData.cs` — root container for JSON deserialization.
- `wwwroot/`
  - `data/galleryData.json` — content file for all albums, images, artist, and contact info (editable at runtime).
  - `css/app.css` — global styles and component sizing (thumbnails, carousel, modals).
  - `images/` — image and GIF assets referenced in `galleryData.json`.
  - `appsettings.json` — site configuration (theme, 18+ modal, etc).
  - `js/site.js` — all site JavaScript (theme, legal modal, etc).
- Solution/project files at repository root (open with Visual Studio or `dotnet` CLI).

---

## Domain Model

- `GalleryData`  
  - `List<Album> Albums`
  - `Artist` (object, e.g. name, bio, photo)
  - `Contact` (object, e.g. email, message)
- `Album`  
  - `string Id`, `Title`, `Description`, `DateCreated`, `Thumbnail` (album cover), `List<AlbumImage> Images`
- `AlbumImage`  
  - `string Id`, `Title`, `Description`, `DateCreated`, `Thumbnail`, `ImagePath`

---

## How the Gallery Loads Data

- The app reads `wwwroot/data/galleryData.json` at runtime via `HttpClient` and deserializes it into `GalleryData`.
- Each album's `Thumbnail` maps to the album cover; each image has `Thumbnail` (small) and `ImagePath` (full image shown in carousel).
- If `ImagePath` is missing, the app falls back to `Thumbnail` (code already ensures this).
- Artist and contact info are also loaded from `galleryData.json` and displayed on the homepage.

---

## 18+ Legal Affirmation Modal

- Controlled by the `RequireLegalAffirmation` flag in `wwwroot/appsettings.json`.
- If enabled, users must confirm they are 18+ before accessing the site.
- The modal appears full-screen on first visit (or if not affirmed), and sets a flag in `localStorage` if the user affirms.
- If the user selects "No", they are redirected to [Google](https://www.google.com/).
- All logic and styles are in `js/site.js` and `css/app.css`.

---

## Run Locally (Visual Studio)

1. Open the solution in Visual Studio (2026 recommended).
2. Set the Blazor WebAssembly project as the startup project.
3. Start debugging with __F5__ or run without debugging using __Debug > Start Without Debugging__.

## Run Locally (dotnet CLI)

1. Ensure .NET 10 SDK is installed and on your PATH.
2. From repo root:
   - Restore:  
     ```bash
     dotnet restore
     ```
   - Build:  
     ```bash
     dotnet build
     ```
   - Run (project name may vary; replace `<Project.csproj>` if needed):  
     ```bash
     dotnet run --project ./YourBlazorProjectName.csproj
     ```
   - For WebAssembly standalone the local dev server will host the app (check console output for URL, usually `https://localhost:5001` or similar).

## Publish for Production

- Publish the WebAssembly project: