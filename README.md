# YouTube Downloader Website

Static Cloudflare Pages website for publishing `YouTubeDownloader.exe`.

## Files

- `index.html` - public download page.
- `styles.css` - page styling.
- `script.js` - reads file metadata for the download note.
- `_headers` - Cloudflare Pages security and download headers.
- `downloads/YouTubeDownloader.exe` - Windows app download.
- `assets/downloader_icon.png` - app icon used by the page.

## Cloudflare Pages

Use these settings when creating the Pages project:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/` if this folder is the repository root, or `anylinkdownloader` if deploying from the parent repository
- Production branch: `main`

## Update The Download

Replace `downloads/YouTubeDownloader.exe` with the new build, commit the change, and push to the branch connected to Cloudflare Pages.
