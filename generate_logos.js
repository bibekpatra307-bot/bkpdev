const simpleIcons = require('simple-icons');
const fs = require('fs');

const techs = [
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
  { name: 'CSS3', slug: 'css3', color: '1572B6', localPath: 'public/icons/css3.svg' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'Express.js', slug: 'express', color: '000000' },
  { name: 'Firebase', slug: 'firebase', color: 'DD2C00' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: '181717' },
  { name: 'Vercel', slug: 'vercel', color: '000000' },
  { name: 'Cloudflare', slug: 'cloudflare', color: 'F38020' },
  { name: 'Visual Studio Code', slug: 'visualstudiocode', color: '007ACC', localPath: 'public/icons/vscode.svg' },
  { name: 'npm', slug: 'npm', color: 'CB3837' },
  { name: 'OpenAI', slug: 'openai', color: '412991', localPath: 'public/icons/openai.svg' },
  { name: 'Google AI Studio', slug: 'google', color: '4285F4' },
  { name: 'Google Gemini', slug: 'googlegemini', color: '8E75B2' },
  { name: 'Claude', slug: 'claude', color: 'D97757' },
  { name: 'Cursor AI', slug: 'cursor', color: '000000' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E' },
];

const output = [];

for (const tech of techs) {
  let svg = '';
  if (tech.localPath && fs.existsSync(tech.localPath)) {
    svg = fs.readFileSync(tech.localPath, 'utf8');
    // If it has fill="#000000" or fill="none" maybe replace it, but devicons might have own colors
    // Wait, the OpenAI icon we downloaded had fill="#000000", let's replace it:
    if (tech.slug === 'openai') {
       svg = svg.replace(/fill="#000000"/g, `fill="#${tech.color}"`);
    } else {
       // Just use it as is
       // wait, we can also inject width and height to 100% just in case
    }
  } else {
      const iconName = 'si' + tech.slug.charAt(0).toUpperCase() + tech.slug.slice(1);
      let icon = simpleIcons[iconName];
      if (!icon) {
        const key = Object.keys(simpleIcons).find(k => k.toLowerCase() === iconName.toLowerCase());
        if (key) icon = simpleIcons[key];
      }
      if (icon) {
         svg = icon.svg.replace('<svg ', `<svg fill="#${tech.color}" `);
      } else {
          console.log("NOT FOUND:", tech.name);
          continue;
      }
  }
  
  // ensure SVG has standard props? 
  // We can just dangerouslySetInnerHTML in React
  
  output.push({
    name: tech.name,
    svg: svg,
  });
}

fs.writeFileSync('components/home/logos.ts', `export const technologies = ${JSON.stringify(output, null, 2)};`);
