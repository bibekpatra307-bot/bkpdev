const fs = require('fs');
let content = fs.readFileSync('components/home/Services.tsx', 'utf8');
content = content.replace(
  "import { ArrowRight, Monitor, Smartphone, PenTool, ShoppingCart, Cpu, BarChart } from 'lucide-react';",
  "import { ArrowRight, Monitor, Smartphone, PenTool, ShoppingCart, Cpu, BarChart, LifeBuoy } from 'lucide-react';"
);
const newService = `  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: 'Maintenance & Support',
    description: 'Reliable software maintenance and support services to keep your digital assets running smoothly.',
    path: '/services/maintenance-support',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];`;
content = content.replace(/];/g, newService);
fs.writeFileSync('components/home/Services.tsx', content);
