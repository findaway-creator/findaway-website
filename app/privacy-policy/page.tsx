import { Metadata } from 'next';
import InnerPageLayout, { Section } from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Find A Way collects, uses, and protects your personal data under the Data Protection Act 2018 and UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | Find A Way',
    description: 'Understand how we use your data and your rights under UK data protection law.',
  },
};

const tocSections = [
  'Introduction',
  'Who We Are',
  'Purpose of this Notice',
  'What Information We Collect',
  'How We Use Your Information',
  'Lawful Basis for Processing',
  'Who We May Share Your Data With',
  'Data Security and Storage',
  'Your Rights',
];

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout
      title="Privacy Policy"
      subtitle="Understand how we use your data."
      toc={tocSections}
    >
      <Section title="Introduction">
        <p>
          This Privacy Notice explains how Find A Way: Psychological Services CIC
          collects, uses, and protects your personal data when you engage with our
          services. It also outlines your rights under the Data Protection Act
          2018 and the UK General Data Protection Regulation (UK GDPR).
        </p>
        <p>
          For the purposes of these laws, Find A Way: Psychological Services CIC
          is the Data Controller. This means we are responsible for deciding how
          your personal data is used and why it is collected.
        </p>
        <p>
          We are committed to respecting your privacy and handling your data
          fairly, lawfully, and transparently.
        </p>
      </Section>

      <Section title="Who We Are">
        <p>
          Find A Way: Psychological Services CIC is a community-based organisation
          that supports families — including children, young people, and
          vulnerable adults — through advocacy, mentoring, inclusive activities,
          and emotional wellbeing services.
        </p>
        <p>Registered Office: 82 James Carter Road, IP28 7DE</p>
        <p>
          Email: <a href="mailto:sophia@findaway.org">sophia@findaway.org</a>
        </p>
        <p>Company Number: 15992869</p>
      </Section>

      <Section title="Purpose of this Notice">
        <p>The purpose of this Privacy Notice is to tell you:</p>
        <ul>
          <li>What personal data we collect about you</li>
          <li>Why we collect it and how we use it</li>
          <li>Who we may share it with</li>
          <li>How we keep it safe</li>
          <li>What your rights are under data protection law</li>
        </ul>
      </Section>

      <Section title="What Information We Collect">
        <p>
          We may collect the following information depending on your relationship
          with us:
        </p>
        <ul>
          <li>Basic contact details — name, phone number, email, address</li>
          <li>Demographic information — date of birth, gender</li>
          <li>Emergency contact details</li>
          <li>
            Relevant personal information — health needs, education/employment
            status, family or support circumstances
          </li>
          <li>
            Safeguarding or risk-related information — where necessary to ensure
            safety
          </li>
          <li>Communication records — notes from sessions, emails, referrals</li>
        </ul>
        <p>
          We only collect what is necessary to provide our services safely,
          appropriately, and effectively.
        </p>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use your data to:</p>
        <ul>
          <li>Deliver our services and support to you</li>
          <li>Respond to enquiries and referrals</li>
          <li>Maintain accurate records of our work</li>
          <li>Safeguard children, young people, and adults at risk</li>
          <li>Comply with legal, contractual, and funder requirements</li>
          <li>
            Improve our services and monitor impact (using anonymised data for
            reporting)
          </li>
        </ul>
      </Section>

      <Section title="Lawful Basis for Processing">
        <p>
          We rely on different lawful bases depending on the situation. These
          include:
        </p>
        <ul>
          <li>Consent — where you have given clear permission</li>
          <li>
            Legal obligation — where we must comply with the law (e.g.
            safeguarding, data retention)
          </li>
          <li>Vital interests — to protect someone&apos;s life or wellbeing</li>
          <li>Public task — where we deliver services in the public interest</li>
          <li>
            Legitimate interests — to run our services effectively (unless these
            are overridden by your rights)
          </li>
        </ul>
      </Section>

      <Section title="Who We May Share Your Data With">
        <p>We never sell your information. We may share your data with:</p>
        <ul>
          <li>
            Professionals involved in your care or support (e.g. schools, social
            workers, GPs)
          </li>
          <li>
            Statutory agencies (e.g. local authority, police) where there is a
            safeguarding concern
          </li>
          <li>
            Funders or commissioners (only anonymised or with consent, unless
            required otherwise)
          </li>
          <li>Volunteers or staff members — on a need-to-know basis only</li>
        </ul>
        <p>
          We will always aim to involve you in decisions about sharing your
          information unless there is a legal or safeguarding reason not to.
        </p>
      </Section>

      <Section title="Data Security and Storage">
        <p>We take steps to protect your personal data:</p>
        <ul>
          <li>
            Electronic records are stored on secure, password-protected systems
          </li>
          <li>Paper records (if used) are kept in locked storage</li>
          <li>Access is restricted to those who need it</li>
          <li>
            We train our staff and volunteers in data protection and safeguarding
          </li>
          <li>
            We keep your information only as long as necessary, in line with legal
            requirements and good practice. When no longer needed, your data is
            securely deleted or anonymised.
          </li>
        </ul>
      </Section>

      <Section title="Your Rights">
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request erasure of your data in certain circumstances</li>
          <li>
            Object to processing, or ask us to restrict how we use your data
          </li>
          <li>
            Withdraw consent at any time (if we are using consent as the basis)
          </li>
          <li>
            Complain to the Information Commissioner&apos;s Office (ICO) if you
            are unhappy with how your data is handled:
            <br />
            Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">https://ico.org.uk</a> | Tel: 0303 123 1113
          </li>
        </ul>
        <p>
          To exercise your rights or ask questions, please contact:
        </p>
        <p>
          Data Protection Lead — Dr Sophia Bentley — Find A Way: Psychological
          Services CIC
        </p>
        <p>
          Email: <a href="mailto:sophia@findaway.org">sophia@findaway.org</a>
        </p>
      </Section>
    </InnerPageLayout>
  );
}
