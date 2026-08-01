const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('{app,components,lib}/**/*.{ts,tsx}');

let hasError = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    
    if (importPath.startsWith('.')) {
      const dir = path.dirname(file);
      let targetPath = path.join(dir, importPath);
      
      // Check extensions
      let found = false;
      for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx', '.js', '.json', '']) {
        if (fs.existsSync(targetPath + ext)) {
          found = true;
          // check exact case
          const realPath = fs.realpathSync(targetPath + ext);
          const expectedSuffix = path.normalize(targetPath + ext);
          
          if (!realPath.endsWith(expectedSuffix) && !realPath.toLowerCase().endsWith(expectedSuffix.toLowerCase())) {
             // wait this might be flaky. Let's just do a simple case check on the basename
          }
          const basename = path.basename(targetPath + ext);
          const realBasename = path.basename(realPath);
          if (basename !== realBasename) {
             console.log(`Casing error in ${file}: imported ${importPath}, but file is ${realBasename}`);
             hasError = true;
          }
          break;
        }
      }
      if (!found) {
        console.log(`File not found: ${importPath} in ${file}`);
        hasError = true;
      }
    } else if (importPath.startsWith('@/')) {
      let targetPath = importPath.replace('@/', './');
      let found = false;
      for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx', '.js', '.json', '']) {
        if (fs.existsSync(targetPath + ext)) {
          found = true;
          const realPath = fs.realpathSync(targetPath + ext);
          const basename = path.basename(targetPath + ext);
          const realBasename = path.basename(realPath);
          if (basename !== realBasename) {
             console.log(`Casing error in ${file}: imported ${importPath}, but file is ${realBasename}`);
             hasError = true;
          }
          break;
        }
      }
      if (!found) {
        console.log(`File not found: ${importPath} in ${file}`);
        hasError = true;
      }
    }
  }
});

if (!hasError) console.log("All imports look good!");
