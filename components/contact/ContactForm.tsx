'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'; import Toast from '@/components/shared/Toast';

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false); const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowToast(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="py-12 md:py-24 bg-white relative -mt-10">
      <Toast message="Thank you for contacting us! We will get back to you soon." isVisible={showToast} onClose={() => setShowToast(false)} /> <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3 md:mb-6">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-5 md:mb-10 leading-relaxed">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-2 md:gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    📍 Mayurbhanj, Odisha, India<br />
                    📍 Jamshedpur, Jharkhand, India
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-2 md:gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-slate-600 text-xs md:text-sm">
                    <a href="tel:+918280482686" className="hover:text-primary-600 transition-colors">+91 8280482686</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 md:gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600 text-xs md:text-sm">
                    <a href="mailto:inboxtobibek@gmail.com" className="hover:text-primary-600 transition-colors">inboxtobibek@gmail.com</a>
                  </p>
                  <p className="text-slate-600 text-xs md:text-sm">
                    <a href="mailto:support@bkpdevelopers.com" className="hover:text-primary-600 transition-colors">support@bkpdevelopers.com</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-2 md:gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
                  <p className="text-slate-600 text-xs md:text-sm">
                    Monday - Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>

              {/* Our Locations */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Our Locations</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Card 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white rounded-2xl p-3 border border-slate-100 shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900 text-sm">Mayurbhanj, Odisha</h4>
                    <p className="text-xs text-slate-500 mb-3">India</p>
                    <div className="rounded-xl overflow-hidden mb-3 bg-slate-100">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119299.88219455325!2d86.6433552097063!3d21.9320257036662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1df58b5e54d193%3A0xe9ec16c8799bbd!2sMayurbhanj%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="160" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a href="https://maps.google.com/?q=Mayurbhanj,+Odisha,+India" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-50 hover:bg-primary-50 text-primary-600 font-medium text-xs rounded-lg transition-colors border border-slate-100">
                      📍 Open in Google Maps
                    </a>
                  </motion.div>
                  
                  {/* Card 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 bg-white rounded-2xl p-3 border border-slate-100 shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900 text-sm">Jamshedpur, Jharkhand</h4>
                    <p className="text-xs text-slate-500 mb-3">India</p>
                    <div className="rounded-xl overflow-hidden mb-3 bg-slate-100">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91494801931!2d86.11585863266209!3d22.802872658882582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9bf61!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="160" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a href="https://maps.google.com/?q=Jamshedpur,+Jharkhand,+India" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-50 hover:bg-primary-50 text-primary-600 font-medium text-xs rounded-lg transition-colors border border-slate-100">
                      📍 Open in Google Maps
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-3 md:p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs md:text-sm font-medium text-slate-700 block">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-2 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs md:text-sm font-medium text-slate-700 block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-2 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs md:text-sm font-medium text-slate-700 block">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-2 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="+91 8280482686"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs md:text-sm font-medium text-slate-700 block">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-2 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs md:text-sm font-medium text-slate-700 block">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-2 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
