import { constructMetadata } from '@/lib/seo';
import PageHeader from '@/components/shared/PageHeader';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'FAQ | BKP Developers',
  description: 'Frequently Asked Questions about our software development services, pricing, and processes.',
});

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including Website Development, Mobile App Development (iOS & Android), UI/UX Design, E-commerce Solutions, AI & Software Solutions, and SEO & Digital Marketing."
  },
  {
    question: "How long does it take to build a website or app?",
    answer: "The timeline depends on the complexity and scope of the project. A standard corporate website might take 2-4 weeks, while a complex custom web or mobile application could take 3-6 months. We provide detailed timelines during the proposal phase."
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your software remains up-to-date, secure, and performs optimally. We also help with adding new features as your business grows."
  },
  {
    question: "What is your development process like?",
    answer: "Our process typically follows these phases: Discovery & Planning, UI/UX Design, Development, Testing & QA, Deployment, and Post-Launch Support. We follow Agile methodologies, keeping you involved and updated at every stage."
  },
  {
    question: "How much does a custom project cost?",
    answer: "Costs vary significantly based on project requirements, features, platform, and timeline. We offer a free initial consultation to understand your needs and provide a custom proposal with transparent pricing. We also have standard pricing packages for predefined scopes."
  }
];

export default function FAQPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        badge="FAQS" 
        description="Find answers to common questions about our services, processes, and more."
      />
      <section className="py-24 bg-white relative -mt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
