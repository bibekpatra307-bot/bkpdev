'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the upcoming trends in web development, from AI-driven coding assistants to edge computing and advanced web animations.',
    category: 'Technology',
    author: 'Rohit Sharma',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
  },
  {
    id: 2,
    title: 'Why UI/UX Design is Crucial for E-commerce Success',
    excerpt: 'Learn how intuitive design and seamless user experience can significantly boost your conversion rates and customer retention.',
    category: 'Design',
    author: 'Sneha Kapoor',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 3,
    title: 'A Guide to Building Scalable Mobile Applications',
    excerpt: 'Discover the best practices, architectures, and tools required to build mobile apps that can scale seamlessly with your growing user base.',
    category: 'Development',
    author: 'Amit Patel',
    date: 'Oct 05, 2023',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    id: 4,
    title: 'SEO Strategies for 2024: Navigating Algorithm Updates',
    excerpt: 'Stay ahead of the curve with these actionable SEO strategies designed to adapt to the latest search engine algorithm changes.',
    category: 'Marketing',
    author: 'Priya Verma',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: 5,
    title: 'How AI is Transforming Enterprise Software Solutions',
    excerpt: 'An in-depth look at how artificial intelligence and machine learning are automating workflows and providing actionable insights for enterprises.',
    category: 'AI & Tech',
    author: 'Vikas Singh',
    date: 'Sep 20, 2023',
    image: 'https://images.unsplash.com/photo-1504384545592-4d5ce2da580a?w=800&q=80',
  },
  {
    id: 6,
    title: 'Choosing the Right Tech Stack for Your Startup',
    excerpt: 'A comprehensive guide to help startup founders select the optimal technology stack for their next big software product.',
    category: 'Business',
    author: 'Rohit Sharma',
    date: 'Sep 15, 2023',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
  },
];

export default function BlogList() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image referrerPolicy="no-referrer"
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-[10px] md:text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-3 md:p-6 md:p-8">
                <div className="flex items-center gap-2 md:gap-4 text-slate-500 text-xs md:text-sm mb-2 md:mb-4">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-slate-600 text-xs md:text-sm mb-3 md:mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-xs md:text-sm font-bold text-primary-600 group-hover:text-primary-700"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
