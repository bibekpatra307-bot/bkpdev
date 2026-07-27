const fs = require('fs');
let content = fs.readFileSync('app/api/chat/route.ts', 'utf8');
content = content.replace(
  "Website Development, Mobile App Development, UI/UX Design, E-commerce Solutions, AI & Software Solutions, and SEO & Digital Marketing",
  "Website Development, Mobile App Development, UI/UX Design, E-commerce Solutions, AI & Software Solutions, SEO & Digital Marketing, and Maintenance & Support"
);
fs.writeFileSync('app/api/chat/route.ts', content);
