import re

# Update components/home/Projects.tsx
with open('components/home/Projects.tsx', 'r') as f:
    content = f.read()

new_projects_home = """const projects = [
  {
    title: 'Bibek Books',
    category: 'Book Publishing Platform',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800',
    path: 'https://bibekbook.store/',
  },
  {
    title: 'GenGram',
    category: 'AI Social Media Platform',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800',
    path: 'https://gengram.online/',
  },
  {
    title: 'Bibek Patra Official',
    category: 'Personal Brand Website',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800',
    path: 'https://bibekpatra.site/',
  },
];"""

content = re.sub(r'const projects = \[.*?\];', new_projects_home, content, flags=re.DOTALL)
content = content.replace('<Link href={project.path} className="block">', '<Link href={project.path} target="_blank" rel="noopener noreferrer" className="block">')
content = content.replace('View Project', 'View Live Project')

with open('components/home/Projects.tsx', 'w') as f:
    f.write(content)

# Update components/portfolio/PortfolioList.tsx
with open('components/portfolio/PortfolioList.tsx', 'r') as f:
    content = f.read()

new_categories = "const categories = ['All', 'Book Publishing Platform', 'AI Social Media Platform', 'Personal Brand Website', 'E-commerce Product Discovery Platform', 'AI Voice Assistant', '3D Interior Design Platform', 'Utility Web Application'];"
content = re.sub(r"const categories = \[.*?\];", new_categories, content, flags=re.DOTALL)

new_projects_portfolio = """const projects = [
  { id: 1, title: 'Bibek Books', category: 'Book Publishing Platform', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800', description: 'A modern multi-author digital publishing platform where writers can publish books, manage their author profiles, and reach readers worldwide. The platform features secure authentication, premium UI, responsive design, author dashboards, advanced search, SEO optimization, and a seamless reading experience.', url: 'https://bibekbook.store/' },
  { id: 2, title: 'GenGram', category: 'AI Social Media Platform', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800', description: 'An AI-powered social media content generation platform that helps creators produce engaging captions, posts, hashtags, bios, and marketing content with an intuitive, responsive, and modern interface powered by artificial intelligence.', url: 'https://gengram.online/' },
  { id: 3, title: 'Bibek Patra Official', category: 'Personal Brand Website', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800', description: 'A professional personal branding website showcasing my portfolio, books, services, projects, achievements, blog, and contact information. Designed with premium UI, responsive layouts, smooth animations, and optimized performance.', url: 'https://bibekpatra.site/' },
  { id: 4, title: 'KRAYVO', category: 'E-commerce Product Discovery Platform', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800', description: 'A smart e-commerce aggregation platform that helps users discover products from multiple online shopping websites through a fast, organized, and user-friendly browsing experience with premium UI.', url: 'https://bibekpatra307-bot.github.io/Krayvo/' },
  { id: 5, title: 'Vivika AI', category: 'AI Voice Assistant', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800', description: 'Vivika AI is an intelligent conversational AI assistant designed to interact with users in real time through natural, human-like conversations. It provides instant responses, intelligent assistance, and an engaging chat experience powered by advanced artificial intelligence.', url: 'https://bibekpatra307-bot.github.io/Vivika/' },
  { id: 6, title: '3D Creator', category: '3D Interior Design Platform', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800', description: 'A professional 3D interior design showcase highlighting realistic architectural visualizations, room concepts, creative layouts, modern furniture, and immersive design experiences.', url: 'https://bibekpatra307-bot.github.io/3d-creator/' },
  { id: 7, title: 'Feet & Inches Calculator', category: 'Utility Web Application', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800', description: 'A lightweight and responsive web application designed to quickly convert feet, inches, centimeters, and meters with an intuitive interface, instant calculations, and mobile-friendly usability.', url: 'https://bibekpatra307-bot.github.io/feet-inches-calculator/' },
];"""
content = re.sub(r'const projects = \[.*?\];', new_projects_portfolio, content, flags=re.DOTALL)

# Make image wrapper a link
content = content.replace('<div className="relative aspect-[4/3] overflow-hidden">', '<a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] overflow-hidden">')
# Close a tag for image
content = content.replace('                  </div>\n                                \n                                <div className="p-3', '                  </a>\n                                \n                                <div className="p-3')

# Change button to div
content = content.replace('<button className="w-10 h-10', '<div className="w-10 h-10')
content = content.replace('</button>', '</div>')

# Change "View Case Study" to a link
old_view_case_study = """                  <div className="flex items-center text-xs md:text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>"""

new_view_live_project = """                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs md:text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                    View Live Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>"""

content = content.replace(old_view_case_study, new_view_live_project)

with open('components/portfolio/PortfolioList.tsx', 'w') as f:
    f.write(content)

