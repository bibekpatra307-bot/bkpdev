'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0f1c] text-slate-300 pt-20 pb-10 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               <div className="text-2xl font-heading font-bold tracking-tight flex items-center">
                 <span className="text-primary-500">BKP</span>
                 <span className="text-white ml-1 text-lg">Developers</span>
               </div>
               <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Innovate. Develop. Deliver.</p>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              BKP Developers is a leading software development company delivering innovative, reliable and high-quality digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Career', path: '/career' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Website Development', path: '/services/website-development' },
                { name: 'Mobile App Development', path: '/services/mobile-app-development' },
                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                { name: 'E-commerce Solutions', path: '/services/e-commerce-solutions' },
                { name: 'AI & Software Solutions', path: '/services/ai-software-solutions' },
                { name: 'SEO & Digital Marketing', path: '/services/seo-digital-marketing' },
                { name: 'Maintenance & Support', path: '/services/maintenance-support' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+911234567890" className="text-sm text-slate-400 hover:text-white transition-colors block">+91 12345 67890</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:hello@bkpdevelopers.com" className="text-sm text-slate-400 hover:text-white transition-colors block">hello@bkpdevelopers.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">11th Floor, Techno Hub, Near VR Mall, Surat, Gujarat - 395007, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BKP Developers. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary-600/30 transition-all duration-300 z-50 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
