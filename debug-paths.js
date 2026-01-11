import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, 'src');
const appPath = path.resolve(srcPath, 'App.tsx');
const aliasPath = path.resolve(__dirname, 'src').replace(/\\/g, '/');

console.log('__dirname:', __dirname);
console.log('srcPath:', srcPath);
console.log('appPath:', appPath);
console.log('Exists:', fs.existsSync(appPath));
console.log('Alias Path (Forward Slashes):', aliasPath);
