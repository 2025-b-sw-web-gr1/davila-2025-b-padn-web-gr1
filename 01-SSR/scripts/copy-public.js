import fs from 'fs/promises';
import path from 'path';

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

(async () => {
  try {
    const root = process.cwd();
    const src = path.join(root, 'public');
    const dest = path.join(root, 'dist', 'public');
    // comprobar si existe carpeta public
    await fs.access(src);
    console.log(`Copying ${src} -> ${dest}`);
    await copyDir(src, dest);
    console.log('Public folder copied to dist/public');
    process.exit(0);
  } catch (err) {
    console.error('Error copying public folder:', err.message || err);
    // No abort compilation entirely; exit with non-zero so npm shows failure if needed
    process.exit(1);
  }
})();
