"use client";

import { motion } from 'motion/react';

const processSteps = [
  { num: "01", title: "Requirement Analysis", desc: "We understand your goals, target audience, and technical requirements." },
  { num: "02", title: "UI/UX Design", desc: "Crafting wireframes and high-fidelity prototypes for your approval." },
  { num: "03", title: "Development", desc: "Writing clean, scalable code using modern technologies." },
  { num: "04", title: "Testing", desc: "Rigorous QA testing across devices to ensure flawless performance." },
  { num: "05", title: "Deployment", desc: "Launching your product on scalable cloud infrastructure." },
  { num: "06", title: "Maintenance", desc: "Ongoing support, monitoring, and updates post-launch." }
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Proven Process</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">From concept to launch, we follow a transparent and efficient methodology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800"
            >
              <div className="text-6xl font-extrabold text-slate-800/50 mb-4 absolute top-6 right-6 select-none">{step.num}</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 mt-8">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
