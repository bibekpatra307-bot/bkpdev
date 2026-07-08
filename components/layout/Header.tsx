'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Website Development', path: '/services/website-development' },
      { name: 'Mobile App Development', path: '/services/mobile-app-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'E-commerce Solutions', path: '/services/e-commerce-solutions' },
      { name: 'AI & Software Solutions', path: '/services/ai-software-solutions' },
      { name: 'SEO & Digital Marketing', path: '/services/seo-digital-marketing' },
    ],
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-10">
               {/* Replace with actual logo image when available */}
               <div className="text-2xl font-heading font-bold text-primary-900 tracking-tight flex items-center">
                 <span className="text-primary-600">BKP</span>
                 <span className="text-slate-800 ml-1 text-lg">Developers</span>
               </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.path}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    pathname === link.path || (link.dropdown && pathname.startsWith(link.path))
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Active Indicator */}
                {(pathname === link.path || (link.dropdown && pathname === link.path)) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                  />
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 w-64 p-2 overflow-hidden flex flex-col gap-1">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          href={dropLink.path}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            pathname === dropLink.path
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                          }`}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors shadow-sm shadow-primary-600/20"
            >
              Get a Free Quote
              <Send className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.path}
                    className={`block py-2 text-base font-medium ${
                      pathname === link.path ? 'text-primary-600' : 'text-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          href={dropLink.path}
                          className={`block py-2 text-sm font-medium ${
                            pathname === dropLink.path
                              ? 'text-primary-600'
                              : 'text-slate-500'
                          }`}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Get a Free Quote
                  <Send className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
