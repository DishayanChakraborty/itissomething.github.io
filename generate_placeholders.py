#!/usr/bin/env python3
"""
Placeholder Image Generator for Love Timeline
This script creates simple placeholder images in PNG format.
"""

import os
from PIL import Image, ImageDraw, ImageFont

# Create images directory if it doesn't exist
os.makedirs('assets/images', exist_ok=True)

def create_placeholder(filename, text, color1, color2):
    """
    Create a placeholder image with gradient background and text
    """
    width, height = 400, 250
    
    # Create image with gradient
    img = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(img)
    
    # Create simple gradient effect by drawing rectangles
    for y in range(height):
        # Interpolate between color1 and color2
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.rectangle([(0, y), (width, y+1)], fill=(r, g, b))
    
    # Add centered text
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box to center it
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=(255, 255, 255), font=font)
    
    # Save image
    img.save(f'assets/images/{filename}')
    print(f"Created {filename}")

# Define placeholder images
placeholders = [
    ('placeholder-1.jpg', 'The Day We Met 💫', (255, 107, 157), (196, 69, 105)),
    ('placeholder-2.jpg', 'Our First Date ☕', (255, 150, 120), (200, 100, 70)),
    ('placeholder-3.jpg', 'Crazy Memory 😂', (255, 200, 120), (255, 150, 80)),
    ('placeholder-4.jpg', 'When I Knew 🥹', (200, 150, 255), (150, 100, 200)),
    ('photo-1.jpg', 'Memory 1', (255, 107, 157), (196, 69, 105)),
    ('photo-2.jpg', 'Memory 2', (255, 150, 120), (200, 100, 70)),
    ('photo-3.jpg', 'Memory 3', (255, 200, 120), (255, 150, 80)),
    ('photo-4.jpg', 'Memory 4', (200, 150, 255), (150, 100, 200)),
]

for filename, text, color1, color2 in placeholders:
    create_placeholder(filename, text, color1, color2)

print("✅ All placeholder images created successfully!")
