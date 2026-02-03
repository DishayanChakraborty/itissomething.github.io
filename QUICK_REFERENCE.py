#!/usr/bin/env python3
"""
Quick Reference Card - Print this for easy customization!
"""

print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                       💕 OUR LOVE TIMELINE - QUICK REF 💕                    ║
╚══════════════════════════════════════════════════════════════════════════════╝

🎨 MAIN FILES TO EDIT:
├── index.html      → Content (text, images, titles)
├── styles.css      → Colors, fonts, animations
└── script.js       → Interactivity, music control, effects

📝 QUICK CUSTOMIZATION CHECKLIST:

  ✓ CONTENT
    [ ] Edit hero title: "Hey love…"
    [ ] Edit hero subtitle
    [ ] Update 4 timeline events with your memories
    [ ] Update 6 "why I love you" reasons
    [ ] Update slideshow captions
    [ ] Change surprise message
    [ ] Update footer quote and name

  ✓ IMAGES
    [ ] Replace 4 timeline placeholder images
    [ ] Replace 4 slideshow placeholder images
    [ ] Use JPG/PNG format
    [ ] Size: ~400x250px for timeline, ~800x500px for slideshow

  ✓ COLORS (Edit :root in styles.css)
    [ ] --color-primary: #ff6b9d (main color)
    [ ] --color-secondary: #c44569 (dark color)
    [ ] --color-accent: #ffeef8 (light color)

  ✓ FONTS (Edit in index.html & styles.css)
    [ ] Great Vibes → Heading (romantic cursive)
    [ ] Playfair Display → Titles
    [ ] Montserrat → Body text

  ✓ MUSIC (Optional)
    [ ] Save MP3 to: assets/music/romantic-song.mp3
    [ ] Use site like pixabay.com/music for free music

🎯 FILE PATHS (Important!):
├── Assets: assets/images/filename.jpg
├── Music: assets/music/romantic-song.mp3
└── CSS: styles.css
└── JS: script.js

🌈 RECOMMENDED COLORS:
Pink Theme (current)      → #ff6b9d, #c44569, #ffeef8
Red Theme                 → #e63946, #a4161a, #ffcccc
Purple Theme              → #d896ff, #9d4edd, #e0aaff
Gold Theme                → #ffd700, #daa520, #fff8dc

🔤 RECOMMENDED FONTS:
Romantic    → Great Vibes + Playfair Display + Montserrat (current)
Modern      → Pacifico + Poppins + Inter
Classic     → Dancing Script + Cormorant Garamond + Lora

⚡ QUICK TIPS:
• Compress images first → tinypng.com
• Test on mobile before sharing
• Use high-quality personal photos
• Add specific memories to timeline (not generic text)
• Put it on Netlify for free hosting (2 minutes!)

🚀 TO VIEW WEBSITE:
1. Open file explorer
2. Navigate to c:\\Loveletter
3. Right-click index.html
4. Open with browser
5. Click music button (🔊) to add background music!

📱 RESPONSIVE:
✓ Desktop (1200px+)    → Full layout
✓ Tablet (768px+)      → Optimized
✓ Mobile (480px+)      → Stacked
✓ All touch-friendly

💾 IMPORTANT NOTES:
• No external libraries needed - pure vanilla code!
• Works offline - just open index.html
• All CSS animations hardware-accelerated
• Confetti & heart rain are pure JavaScript + Canvas

✨ SHARE WITH:
• GitHub Pages (free)
• Netlify (free, drag & drop)
• Google Drive
• USB Drive
• Email (zip the folder)

═══════════════════════════════════════════════════════════════════════════════

Made with ❤️ for your special someone.

═══════════════════════════════════════════════════════════════════════════════
""")

# Create a simple text checklist file
with open('CUSTOMIZATION_CHECKLIST.txt', 'w', encoding='utf-8') as f:
    f.write("""
╔════════════════════════════════════════════════════════════════════════════╗
║                 💕 OUR LOVE TIMELINE - CUSTOMIZATION CHECKLIST            ║
╚════════════════════════════════════════════════════════════════════════════╝

STEP 1: PREPARE YOUR CONTENT
  [ ] Gather 4 timeline memories with dates and stories
  [ ] Write 6 reasons why you love her
  [ ] Select 4 meaningful photos for slideshow
  [ ] Choose a romantic background song (optional)
  [ ] Find a romantic quote for footer (or use the included one)

STEP 2: EDIT index.html
  [ ] Hero section: Update greeting message
  [ ] Hero section: Update subtitle
  [ ] Timeline Item 1: Date, title, story
  [ ] Timeline Item 2: Date, title, story
  [ ] Timeline Item 3: Date, title, story
  [ ] Timeline Item 4: Date, title, story
  [ ] Reason Cards: Update all 6 reasons
  [ ] Slideshow: Update photo captions (4 of them)
  [ ] Surprise section: Update final message
  [ ] Footer: Update quote and your name

STEP 3: ADD YOUR PHOTOS
  [ ] Save 4 timeline photos to assets/images/ (or replace placeholders)
  [ ] Rename: photo-timeline-1.jpg, photo-timeline-2.jpg, etc. (optional)
  [ ] Save 4 slideshow photos to assets/images/
  [ ] Update image paths in HTML (if renamed)
  [ ] Compress images with tinypng.com for faster loading

STEP 4: CUSTOMIZE STYLING (Optional)
  [ ] Edit colors in styles.css (if you want different colors)
  [ ] Change fonts if desired
  [ ] Adjust animation speeds if needed

STEP 5: ADD MUSIC (Optional)
  [ ] Find romantic background song (pixabay.com/music)
  [ ] Save as MP3 format
  [ ] Place in assets/music/romantic-song.mp3
  [ ] Test by clicking music button (🔊)

STEP 6: TEST & REVIEW
  [ ] Open index.html in browser
  [ ] Check all text displays correctly
  [ ] Verify all images appear
  [ ] Test music toggle
  [ ] Scroll through timeline
  [ ] Test slideshow (next/prev buttons, auto-advance)
  [ ] Click "YES" to test confetti animation
  [ ] Test on mobile device
  [ ] Check links and buttons work

STEP 7: DEPLOYMENT (Optional)
  [ ] Upload to Netlify (drag and drop)
  [ ] Or upload to GitHub Pages
  [ ] Or share via email/USB drive
  [ ] Test on her device

STEP 8: PRESENTATION
  [ ] Choose special moment to show
  [ ] Have music playing softly
  [ ] Let her scroll through at own pace
  [ ] Enjoy her reaction! 💕

═══════════════════════════════════════════════════════════════════════════════

ESTIMATED TIME: 30-60 minutes
DIFFICULTY: Very Easy (no coding knowledge needed!)
COMPLEXITY: Just editing text and adding photos

═══════════════════════════════════════════════════════════════════════════════
""")

print("✅ Checklist created! Open CUSTOMIZATION_CHECKLIST.txt for detailed steps.")
