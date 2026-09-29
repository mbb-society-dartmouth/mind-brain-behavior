// Favicon set from the MBB logo. Run: node scripts/generate-icons.mjs
// og.png is rendered separately from scripts/og-template.html (any browser
// at 1200x630); see docs/TODO.md.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const SRC = 'public/media/mbb-logo-green.png';
const BG = { r: 1, g: 101, b: 45 }; // the logo file's own green, sampled

async function square(size) {
  const { width, height } = await sharp(SRC).metadata();
  const side = Math.max(width, height);
  return sharp(SRC)
    .extend({
      top: Math.floor((side - height) / 2),
      bottom: Math.ceil((side - height) / 2),
      left: Math.floor((side - width) / 2),
      right: Math.ceil((side - width) / 2),
      background: BG,
    })
    .resize(size, size)
    .png()
    .toBuffer();
}

// ICO container with embedded PNGs (valid since Windows Vista; all modern browsers)
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, buf } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size === 256 ? 0 : size, 0);
    e.writeUInt8(size === 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bit count
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.buf)]);
}

await writeFile('public/favicon-32.png', await square(32));
await writeFile('public/apple-touch-icon.png', await square(180));
await writeFile('public/favicon.ico', ico([
  { size: 16, buf: await square(16) },
  { size: 32, buf: await square(32) },
]));
console.log('wrote favicon-32.png, apple-touch-icon.png, favicon.ico');
