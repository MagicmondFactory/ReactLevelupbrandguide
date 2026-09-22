import fs from 'fs';
import path from 'path';

const dir = 'C:\\Users\\Kunal\\Downloads\\brand guide pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
const fills = {};

files.forEach(f => {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const matches = c.match(/fill="#[0-9a-fA-F]{6}"/gi) || [];
  matches.forEach(m => {
    const val = m.slice(6, 13).toUpperCase();
    fills[val] = (fills[val] || 0) + 1;
  });
});

console.log('Brand Color Fills Analysis:');
console.log(Object.entries(fills).sort((a,b) => b[1] - a[1]).slice(0, 20));
