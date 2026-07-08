import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-primary-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-start gap-6 relative z-10 md:w-2/3">
            <div className="hidden sm:flex shrink-0 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center border border-white/20">
              <Send className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Have A Project In Mind?
              </h2>
              <p className="text-primary-100 text-lg max-w-xl">
                Let's discuss your idea and turn it into a successful digital solution. Our team is ready to help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-900 bg-white rounded-full hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
