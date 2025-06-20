#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'gachi-app';
const templateDir = path.join(__dirname, 'template');
const targetPath = path.resolve(process.cwd(), projectName);

fs.cpSync(templateDir, targetPath, { recursive: true });

console.log('📦 Устанавливаем зависящие жопы...');
execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

console.log(`✅ Gachi App установлен в папку ${targetPath}`);
console.log(`\n🚀 Запуск:`);
console.log(`cd ${projectName}`);
console.log(`npm run dev`);
