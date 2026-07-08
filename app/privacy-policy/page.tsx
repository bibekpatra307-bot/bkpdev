import { constructMetadata } from '@/lib/seo';
import PageHeader from '@/components/shared/PageHeader';

export const metadata = constructMetadata({
  title: 'Privacy Policy | BKP Developers',
  description: 'Privacy Policy for BKP Developers.',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" badge="LEGAL" />
      <section className="py-24 bg-white relative -mt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 leading-relaxed space-y-6">
          <p className="text-sm font-medium">Last updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
          <p>Welcome to BKP Developers. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. The Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:privacy@bkpdevelopers.com" className="text-primary-600 hover:underline">privacy@bkpdevelopers.com</a>.</p>
        </div>
      </section>
    </>
  );
}
