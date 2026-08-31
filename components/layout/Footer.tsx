'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-[#0a0f1c] pb-4 pt-8 text-slate-300 md:pb-8 md:pt-12">
      <div className="max-w-7xl mx-auto px-3 md:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-10 lg:gap-8 mb-8 md:mb-12">
          
          {/* Company Info */}
          <div className="col-span-2 space-y-4 md:col-span-1 md:space-y-5">
            <Link href="/" className="inline-block">
               <div className="text-xl md:text-2xl font-heading font-bold tracking-tight flex items-center">
                 <span className="text-primary-500">BKP</span>
                 <span className="text-white ml-1 text-base md:text-lg">Developers</span>
               </div>
               <p className="text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Innovate. Develop. Deliver.</p>
            </Link>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="mb-3 text-sm font-semibold text-white md:mb-4 md:text-base">Services</h3>
            <ul className="space-y-2 md:space-y-2.5">
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
                  <Link href={link.path} className="flex items-start gap-2 text-[11px] leading-4 text-slate-400 transition-colors hover:text-primary-400 md:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="min-w-0">
            <h3 className="mb-3 text-sm font-semibold text-white md:mb-4 md:text-base">Contact Us</h3>
            <ul className="space-y-3 md:space-y-3.5">
              <li className="flex items-start gap-2 md:gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 md:h-5 md:w-5" />
                <div>
                  <a href="tel:+918280482686" className="block text-[11px] leading-4 text-slate-400 transition-colors hover:text-white md:text-sm">+91 8280482686</a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 md:h-5 md:w-5" />
                <div>
                  <a href="mailto:inboxtobibek@gmail.com" className="mb-1 block break-all text-[11px] leading-4 text-slate-400 transition-colors hover:text-white md:text-sm">inboxtobibek@gmail.com</a>
                  <a href="mailto:support@bkpdevelopers.com" className="block break-all text-[11px] leading-4 text-slate-400 transition-colors hover:text-white md:text-sm">support@bkpdevelopers.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 md:h-5 md:w-5" />
                <div>
                  <p className="mb-1 text-[11px] leading-4 text-slate-400 md:text-sm">Mayurbhanj, Odisha, India</p>
                  <p className="text-[11px] leading-4 text-slate-400 md:text-sm">Jamshedpur, Jharkhand, India</p>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 md:h-5 md:w-5" />
                <div>
                  <p className="mb-1 text-[11px] leading-4 text-slate-400 md:text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-[11px] leading-4 text-slate-400 md:text-sm">Sunday Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-slate-400">
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <p className="text-xs md:text-sm text-slate-500">
            © {new Date().getFullYear()} BKP Developers. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
