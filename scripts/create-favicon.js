const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create an SVG favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <!-- Background -->
  <rect width="64" height="64" rx="12" fill="#D8C7FF" />
  
  <!-- Letters "L" and "S" -->
  <text x="32" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#FFFFFF">LS</text>
</svg>`;

// Write the SVG file
const svgPath = path.join(publicDir, 'favicon.svg');
fs.writeFileSync(svgPath, svgContent);
console.log('SVG favicon created at:', svgPath);

// Create a simple HTML file that links to the favicon
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Favicon Test</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
</head>
<body>
  <h1>Favicon Test</h1>
  <p>Check the browser tab to see the favicon.</p>
</body>
</html>`;

// Write the HTML file
const htmlPath = path.join(publicDir, 'favicon-test.html');
fs.writeFileSync(htmlPath, htmlContent);
console.log('HTML test file created at:', htmlPath);

console.log('To view the favicon, open the HTML file in a browser.');
console.log('To convert to ICO format, you can use online converters or tools like sharp-cli.'); 