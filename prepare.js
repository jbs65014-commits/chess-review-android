// Copies the web app and its two libraries into ./www before the Android build.
const fs = require('fs');
const path = require('path');

fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
fs.copyFileSync('node_modules/chess.js/chess.js', 'www/chess.js');

function find(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { const r = find(p); if (r) return r; }
    else if (f.name === 'stockfish.js') return p;
  }
  return null;
}
const sf = find('node_modules/stockfish');
if (!sf) throw new Error('stockfish.js not found in node_modules/stockfish');
fs.copyFileSync(sf, 'www/stockfish.js');
console.log('Prepared www/: index.html, chess.js, stockfish.js (from ' + sf +
