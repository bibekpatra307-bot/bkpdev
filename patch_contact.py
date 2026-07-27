import re

with open('components/contact/ContactForm.tsx', 'r') as f:
    content = f.read()

# Update Location
content = re.sub(r'11th Floor, Techno Hub, Near VR Mall,<br />\s*Surat, Gujarat - 395007, India', '📍 Mayurbhanj, Odisha, India<br />\n                    📍 Jamshedpur, Jharkhand, India', content)

# Update Phone Number
content = re.sub(r'<a href="tel:\+911234567890".*?>\+91 12345 67890</a>\s*</p>\s*<p className="text-slate-600 text-xs md:text-sm">\s*<a href="tel:\+919876543210".*?>\+91 98765 43210</a>', '<a href="tel:+918280482686" className="hover:text-primary-600 transition-colors">+91 8280482686</a>', content)

# Update Email Addresses
content = re.sub(r'href="mailto:hello@bkpdevelopers\.com".*?>hello@bkpdevelopers\.com</a>', 'href="mailto:inboxtobibek@gmail.com" className="hover:text-primary-600 transition-colors">inboxtobibek@gmail.com</a>', content)

# Update Working Hours
content = re.sub(r'Monday - Friday: 10:00 AM - 7:00 PM<br />\s*Saturday: 10:00 AM - 2:00 PM', 'Monday - Saturday: 10:00 AM - 7:00 PM<br />\n                    Sunday: Closed', content)

# Update Placeholders in form
content = content.replace('placeholder="John Doe"', 'placeholder="Your Name"')
content = content.replace('placeholder="john@example.com"', 'placeholder="your@email.com"')
content = content.replace('placeholder="+91 98765 43210"', 'placeholder="+91 8280482686"')
content = content.replace('placeholder="How can we help?"', 'placeholder="Project Inquiry"')
content = content.replace('placeholder="Tell us about your project..."', 'placeholder="Tell us about your project requirements..."')

# Insert the Map Section just after the left column `</div>` and before `{/* Contact Form */}`

map_section = """
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
                        allowFullScreen={False} 
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
                        allowFullScreen={False} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a href="https://maps.google.com/?q=Jamshedpur,+Jharkhand,+India" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-50 hover:bg-primary-50 text-primary-600 font-medium text-xs rounded-lg transition-colors border border-slate-100">
                      📍 Open in Google Maps
                    </a>
                  </motion.div>
                </div>
              </div>"""

content = content.replace('                  </p>\n                </div>\n              </motion.div>\n            </div>\n          </div>', '                  </p>\n                </div>\n              </motion.div>\n' + map_section + '\n            </div>\n          </div>')
content = content.replace('allowFullScreen={False}', 'allowFullScreen={false}')

with open('components/contact/ContactForm.tsx', 'w') as f:
    f.write(content)
