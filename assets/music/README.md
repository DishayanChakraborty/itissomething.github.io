# 🎵 Audio Setup Guide

## Background Music

To add a romantic background song to your website:

1. **Place your audio file** in the `assets/music/` folder
2. **Rename it** to `romantic-song.mp3`
3. The music will automatically be available for toggle via the music button

### Recommended Background Music:
- **Free options:**
  - Pixabay Music (pixabay.com/music)
  - Free Music Archive (freemusicarchive.org)
  - YouTube Audio Library
  - Incompetech (incompetech.com)

- **Recommended tracks:**
  - Piano instrumental pieces
  - Romantic ambient music
  - Lo-fi beats with romantic vibes

### Audio Format:
- Use MP3, WAV, or OGG format
- Optimal bitrate: 128-192 kbps
- Keep file size under 10MB for fast loading
- Duration: 3-5 minutes (will loop)

### Important Notes:
- Music will be **muted by default** (respects user preferences)
- Users can toggle it with the music button (🔊) in the top-right corner
- The button shows "playing" state visually
- Compatible with all modern browsers

## Custom Audio Implementation

If you need to add more audio elements:

```html
<audio id="yourAudio" loop>
    <source src="assets/music/your-file.mp3" type="audio/mpeg">
</audio>
```

Then control it with JavaScript:
```javascript
const audio = document.getElementById('yourAudio');
audio.play();
audio.pause();
```
