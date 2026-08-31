'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MoreHorizontal, Send } from 'lucide-react';

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
      { name: 'Maintenance & Support', path: '/services/maintenance-support' },
    ],
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(navLinks.length);
  const [showOverflowButton, setShowOverflowButton] = useState(false);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showCta, setShowCta] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const overflowButtonRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateNavigation = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setVisibleCount(navLinks.length);
        setShowOverflowButton(false);
        setShowCta(true);
        return;
      }

      const headerWidth = headerRef.current?.clientWidth ?? 0;
      const logoElement = headerRef.current?.querySelector('[data-logo]') as HTMLElement | null;
      const logoWidth = logoElement ? logoElement.offsetWidth : 130;
      const navGap = 18;
      const ctaWidth = ctaRef.current ? ctaRef.current.offsetWidth : 0;
      const overflowWidth = 42;

      let remaining = headerWidth - logoWidth - 28;

      if (remaining < ctaWidth + 24) {
        setShowCta(false);
      } else {
        remaining -= ctaWidth + 16;
        setShowCta(true);
      }

      let used = 0;
      let visible = 0;

      for (let index = 0; index < navLinks.length; index += 1) {
        const node = navItemRefs.current[index];
        if (!node) continue;

        const itemWidth = node.offsetWidth;
        const gap = index === 0 ? 0 : navGap;
        const nextUsed = used + gap + itemWidth;

        if (nextUsed <= remaining) {
          used = nextUsed;
          visible = index + 1;
        } else {
          break;
        }
      }

      const shouldShowOverflow = visible < navLinks.length && width < 1024;
      setVisibleCount(visible);
      setShowOverflowButton(shouldShowOverflow);

      if (shouldShowOverflow && remaining < overflowWidth + 12) {
        setShowCta(false);
      }
    };

    updateNavigation();

    const observer = new ResizeObserver(() => updateNavigation());
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isOverflowOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOverflowOpen(false);
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOverflowOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOverflowOpen]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen]);

  const renderServicesDropdown = (link: (typeof navLinks)[number]) => {
    if (!link.dropdown) return null;

    return (
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 md:pt-6 ${
          isServicesOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100'
        }`}
      >
        <div className="flex w-64 flex-col gap-1 overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
          {link.dropdown.map((dropLink) => (
            <Link
              key={dropLink.name}
              href={dropLink.path}
              onClick={() => setIsServicesOpen(false)}
              className={`block rounded-lg px-2 py-3 text-xs font-medium transition-colors md:px-4 md:text-sm ${
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
    );
  };

  const renderNavItem = (link: (typeof navLinks)[number], index: number) => {
    const isActive = pathname === link.path || (link.dropdown && pathname.startsWith(link.path));

    return (
      <div
        key={link.name}
        className="relative group"
        onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
        ref={(node) => {
          navItemRefs.current[index] = node;
        }}
      >
        <Link
          href={link.path}
          onClick={(event) => {
            if (link.dropdown) {
              event.preventDefault();
              setIsServicesOpen((prev) => !prev);
            }
          }}
          className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
            isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'
          }`}
        >
          {link.name}
          {link.dropdown && <ChevronDown className="w-4 h-4" />}
        </Link>

        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
          />
        )}

        {renderServicesDropdown(link)}
      </div>
    );
  };

  const renderOverflowItem = (link: (typeof navLinks)[number]) => {
    if (!link.dropdown) {
      return (
        <Link
          key={link.name}
          href={link.path}
          onClick={() => setIsOverflowOpen(false)}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            pathname === link.path
              ? 'bg-primary-50 text-primary-600'
              : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
          }`}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <div key={link.name} className="group relative">
        <Link
          href={link.path}
          onClick={(event) => {
            event.preventDefault();
            setIsServicesOpen((prev) => !prev);
          }}
          className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary-600"
        >
          {link.name}
          <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isServicesOpen && (
          <div className="border-t border-slate-100 bg-slate-50 px-2 py-1">
            {link.dropdown.map((dropLink) => (
              <Link
                key={dropLink.name}
                href={dropLink.path}
                onClick={() => {
                  setIsServicesOpen(false);
                  setIsOverflowOpen(false);
                }}
                className="block rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-white hover:text-primary-600"
              >
                {dropLink.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const overflowItems = navLinks.slice(visibleCount);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 py-3 shadow-sm backdrop-blur-md' : 'bg-white py-2 md:py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="bkp-header-inner flex items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="BKP Developers home">
            <div data-logo className="relative h-8 w-24 md:h-10 md:w-32">
              <div className="flex items-center text-xl font-heading font-bold tracking-tight text-primary-900 md:text-2xl">
                <span className="text-primary-600">BKP</span>
                <span className="ml-1 text-base text-slate-800 md:text-lg">Developers</span>
              </div>
            </div>
          </Link>

          <div className="ml-auto flex shrink-0 items-center justify-end gap-3">
            <nav className="flex shrink-0 items-center gap-[18px]">
              {navLinks.slice(0, visibleCount).map((link, index) => renderNavItem(link, index))}
            </nav>

            {showCta && (
              <div ref={ctaRef} className="shrink-0">
                <Link
                 href="/contact"
                 className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-3 py-2.5 text-xs font-medium text-white shadow-sm shadow-primary-600/20 transition-colors hover:bg-primary-700 md:px-6 md:text-sm"
                >
                 Get a Free Quote
                 <Send className="h-4 w-4" />
                </Link>
              </div>
            )}

            {showOverflowButton && (
              <div className="relative shrink-0">
                <button
                 ref={overflowButtonRef}
                 type="button"
                 aria-label="More navigation"
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200"
                 onClick={() => setIsOverflowOpen((prev) => !prev)}
                >
                 <MoreHorizontal className="h-5 w-5" />
                </button>

                <AnimatePresence>
                 {isOverflowOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 8 }}
                     transition={{ duration: 0.15 }}
                     className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                   >
                     <div className="flex flex-col py-2">
                       {overflowItems.map(renderOverflowItem)}
                     </div>
                   </motion.div>
                 )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
