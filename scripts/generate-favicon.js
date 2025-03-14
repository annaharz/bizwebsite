const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path');

// Create directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create a canvas
const size = 64;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Set background color (white)
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, size, size);

// Draw a rounded rectangle background
const radius = 12;
ctx.fillStyle = '#D8C7FF'; // Primary lavender color

// Draw rounded rectangle manually
ctx.beginPath();
ctx.moveTo(4 + radius, 4);
ctx.lineTo(60 - radius, 4);
ctx.arcTo(60, 4, 60, 4 + radius, radius);
ctx.lineTo(60, 60 - radius);
ctx.arcTo(60, 60, 60 - radius, 60, radius);
ctx.lineTo(4 + radius, 60);
ctx.arcTo(4, 60, 4, 60 - radius, radius);
ctx.lineTo(4, 4 + radius);
ctx.arcTo(4, 4, 4 + radius, 4, radius);
ctx.closePath();
ctx.fill();

// Draw the letters "L" and "S"
ctx.fillStyle = '#ffffff'; // White text
ctx.font = 'bold 32px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('LS', 32, 32);

// Save as PNG first
const pngBuffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffer);

console.log('Favicon PNG generated successfully!');
console.log('Now convert to ICO using sharp-cli...'); 