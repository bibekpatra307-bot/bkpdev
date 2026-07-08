import { constructMetadata } from '@/lib/seo';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = constructMetadata({
  title: 'Contact Us | BKP Developers',
  description: 'Get in touch with BKP Developers for your next software project. We are ready to bring your ideas to life.',
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
