// Copies the web app and its local library (chess.js) into ./www before the Android build.
// Stockfish is loaded from a CDN at runtime instead (see index.html), so it needs no local copy.
const fs = require('fs');

fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
fs.copyFileSync('node_modules/chess.js/chess.js', 'www/chess.js');
console.log('Prepared www/: index.html, chess.js');
