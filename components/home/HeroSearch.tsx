"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, Clock, Flame, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import servicesData from '@/lib/services.json';
import useDebounce from '@/hooks/useDebounce';

interface Service {
  name: string;
  slug: string;
  category: string;
}

const POPULAR_SERVICES = [
  "Custom AI Solutions",
  "Cloud Migration & Devops",
  "Full-Stack Web App Development"
];

const RECENT_SEARCHES_KEY = 'bkp_recent_searches';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 150);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Reset selected index when query changes
  useEffect(() => {
    // By placing it in a timeout, we avoid the strict React warnings about synchronous state updates in effects
    const t = setTimeout(() => {
      setSelectedIndex(0);
    }, 0);
    return () => clearTimeout(t);
  }, [debouncedQuery]);
  
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          // ignore
        }
      }
    }
    return [];
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fuse = useMemo(() => new Fuse(servicesData, {
    keys: ['name', 'category'],
    threshold: 0.3,
    distance: 100,
    includeMatches: true,
  }), []);

  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    return fuse.search(debouncedQuery).map(r => r.item).slice(0, 5);
  }, [debouncedQuery, fuse]);

  const saveRecentSearch = (term: string) => {
    const updated = [term, ...recentSearches.filter(t => t !== term)].slice(0, 3);
    setRecentSearches(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isFocused) return;
    
    const isShowingResults = debouncedQuery.length > 0;
    let maxIndex = 0;
    
    if (isShowingResults) {
      maxIndex = Math.max(0, results.length - 1);
    } else {
      maxIndex = recentSearches.length + POPULAR_SERVICES.length - 1;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < maxIndex ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isShowingResults && results.length > 0 && results[selectedIndex]) {
        handleSelectService(results[selectedIndex]);
      } else if (!isShowingResults) {
        if (selectedIndex < recentSearches.length) {
          setQuery(recentSearches[selectedIndex]);
        } else {
          const popIndex = selectedIndex - recentSearches.length;
          if (POPULAR_SERVICES[popIndex]) {
            setQuery(POPULAR_SERVICES[popIndex]);
          }
        }
      }
    } else if (e.key === 'Escape') {
      inputRef.current?.blur();
      setIsFocused(false);
    }
  };

  const handleSelectService = (service: Service) => {
    saveRecentSearch(service.name);
    router.push(`/services/${service.slug}`);
    setQuery('');
    setIsFocused(false);
    inputRef.current?.blur();
  };

  const handleSelectSuggestion = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  const HighlightMatch = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? <span key={i} className="text-white font-medium">{part}</span> : <span key={i} className="text-slate-300">{part}</span>
        )}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto z-50">
      <motion.div 
        layout
        className={`relative flex items-center bg-slate-900/60 backdrop-blur-2xl border transition-all duration-300 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] ${isFocused ? 'border-blue-500/50 ring-4 ring-blue-500/10' : 'border-slate-800'}`}
      >
        <div className={`flex items-center justify-center pl-6 transition-colors duration-300 ${isFocused ? 'text-blue-400' : 'text-slate-500'}`}>
          <Search className="w-5 h-5" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search for AI, Cloud, Web, Mobile..."
          className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-500 text-lg w-full px-4 py-5"
          aria-label="Search services"
          spellCheck="false"
        />
        
        <div className="hidden sm:flex items-center gap-1 pr-6">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-slate-800/80 border border-slate-700 text-slate-400">
            <Command className="w-3 h-3" />
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-medium font-sans">
            K
          </div>
        </div>

        {isFocused && (
          <motion.div
            layoutId="focus-border"
            className="absolute inset-0 border border-blue-400/30 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-3 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[400px]"
          >
            {debouncedQuery.length > 0 ? (
              <div className="flex flex-col py-2 overflow-y-auto">
                <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Services</div>
                {results.length > 0 ? (
                  <ul className="pb-2">
                    {results.map((service, idx) => (
                      <li key={service.slug}>
                        <button
                          onClick={() => handleSelectService(service)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors ${selectedIndex === idx ? 'bg-blue-500/10' : 'hover:bg-slate-800/50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg transition-colors ${selectedIndex === idx ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-base">
                                <HighlightMatch text={service.name} highlight={debouncedQuery} />
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                              {service.category}
                            </span>
                            {selectedIndex === idx && (
                              <CornerDownLeft className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-12 px-6 text-center flex flex-col items-center">
                    <Search className="w-6 h-6 md:w-8 md:h-8 text-slate-600 mb-3" />
                    <p className="text-slate-300 font-medium text-lg mb-1">No services found</p>
                    <p className="text-slate-500 text-sm mb-6">We couldn't find anything matching "{query}"</p>
                    <button 
                      onClick={() => { router.push('/contact'); setIsFocused(false); }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm"
                    >
                      Contact Sales
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col p-2 overflow-y-auto">
                
                {recentSearches.length > 0 && (
                  <div className="mb-2">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> Recent
                    </div>
                    <ul>
                      {recentSearches.map((term, idx) => (
                        <li key={`recent-${idx}`}>
                          <button
                            onClick={() => handleSelectSuggestion(term)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full text-left px-4 py-2.5 flex items-center justify-between rounded-lg transition-colors ${selectedIndex === idx ? 'bg-blue-500/10 text-blue-400' : 'text-slate-300 hover:bg-slate-800/50'}`}
                          >
                            <span className="text-sm font-medium">{term}</span>
                            {selectedIndex === idx && <CornerDownLeft className="w-3.5 h-3.5" />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" /> Popular Services
                  </div>
                  <ul>
                    {POPULAR_SERVICES.map((term, idx) => {
                      const actualIdx = recentSearches.length + idx;
                      return (
                        <li key={`popular-${idx}`}>
                          <button
                            onClick={() => handleSelectSuggestion(term)}
                            onMouseEnter={() => setSelectedIndex(actualIdx)}
                            className={`w-full text-left px-4 py-2.5 flex items-center justify-between rounded-lg transition-colors ${selectedIndex === actualIdx ? 'bg-blue-500/10 text-blue-400' : 'text-slate-300 hover:bg-slate-800/50'}`}
                          >
                            <span className="text-sm font-medium">{term}</span>
                            {selectedIndex === actualIdx && <CornerDownLeft className="w-3.5 h-3.5" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

              </div>
            )}
            
            <div className="bg-slate-800/50 border-t border-slate-700/50 px-4 py-2 flex items-center justify-between text-xs text-slate-500">
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="font-sans px-1 rounded bg-slate-700 border border-slate-600">↑↓</kbd> to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-sans px-1 rounded bg-slate-700 border border-slate-600">↵</kbd> to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-sans px-1 rounded bg-slate-700 border border-slate-600">esc</kbd> to close
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
