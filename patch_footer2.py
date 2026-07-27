import re

with open('components/layout/Footer.tsx', 'r') as f:
    content = f.read()

# Update Location
content = re.sub(
    r'<MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\s*<div>\s*<p className="text-xs md:text-sm text-slate-400">11th Floor, Techno Hub, Near VR Mall, Surat, Gujarat - 395007, India</p>\s*</div>',
    '<MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\n                <div>\n                  <p className="text-xs md:text-sm text-slate-400 mb-1">Mayurbhanj, Odisha, India</p>\n                  <p className="text-xs md:text-sm text-slate-400">Jamshedpur, Jharkhand, India</p>\n                </div>',
    content
)

# Update Phone
content = re.sub(
    r'<Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\s*<div>\s*<a href="tel:\+911234567890" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors block">\+91 12345 67890</a>\s*</div>',
    '<Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\n                <div>\n                  <a href="tel:+918280482686" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors block">+91 8280482686</a>\n                </div>',
    content
)

# Update Email
content = re.sub(
    r'<Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\s*<div>\s*<a href="mailto:hello@bkpdevelopers\.com" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors block">hello@bkpdevelopers\.com</a>\s*</div>',
    '<Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\n                <div>\n                  <a href="mailto:inboxtobibek@gmail.com" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors block mb-1">inboxtobibek@gmail.com</a>\n                  <a href="mailto:support@bkpdevelopers.com" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors block">support@bkpdevelopers.com</a>\n                </div>',
    content
)

# Update Hours
content = re.sub(
    r'<Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\s*<div>\s*<p className="text-xs md:text-sm text-slate-400">Mon - Sat: 10:00 AM - 7:00 PM</p>\s*</div>',
    '<Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />\n                <div>\n                  <p className="text-xs md:text-sm text-slate-400 mb-1">Mon – Sat: 10:00 AM – 7:00 PM</p>\n                  <p className="text-xs md:text-sm text-slate-400">Sunday Closed</p>\n                </div>',
    content
)

with open('components/layout/Footer.tsx', 'w') as f:
    f.write(content)

