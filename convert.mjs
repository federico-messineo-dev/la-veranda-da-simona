import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const dir = './public/images';
const skip = ['logo-colored.jpeg', 'logo-main.jpeg', 'logo-round.png'];

const files = readdirSync(dir).filter(f => {
  const ext = extname(f).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext) && !skip.includes(f);
});

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, basename(file, extname(file)) + '.webp');
  await sharp(input).webp({ quality: 80 }).toFile(output);
  console.log(`✓ ${file} → ${basename(output)}`);
}