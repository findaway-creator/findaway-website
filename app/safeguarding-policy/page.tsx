import { Metadata } from 'next';
import InnerPageLayout, { Section, Subsection } from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description: 'Find A Way CIC is committed to promoting the welfare, dignity, and safety of all adults and children we engage with. Learn about our safeguarding approach.',
  openGraph: {
    title: 'Safeguarding Policy | Find A Way CIC',
    description: 'Our commitment to safeguarding children, young people, and vulnerable adults.',
  },
};

const tocSections = [
  'Introduction',
  'Safeguarding Leads',
  'Recognising Signs of Abuse',
  'Becoming Aware of a Safeguarding Issue',
  'Responding to Concerns',
  'Safe Recruitment',
  'Management and Supervision',
  'Allegations Against Staff',
  'Recording and Confidentiality',
  'Review and Dissemination',
];

export default function SafeguardingPolicyPage() {
  return (
    <InnerPageLayout
      title="Safeguarding Policy"
      subtitle="Learn more about our approach to safeguarding."
      toc={tocSections}
    >
      <Section title="Introduction">
        <p>
          Find A Way: Psychological Services CIC engages with vulnerable adults
          through our work with families, as well as through direct support
          including advocacy, emotional wellbeing services, mentoring, and
          inclusive community-based activities. Many of the adults we support may
          be vulnerable due to age, disability, mental health, or other
          circumstances. We are committed to promoting the welfare, dignity, and
          safety of all adults we engage with. Safeguarding is everyone&apos;s
          responsibility, and all staff and volunteers are expected to act
          immediately on any concerns regarding the safety or wellbeing of a
          vulnerable adult.
        </p>
      </Section>

      <Section title="Safeguarding Leads">
        <p><strong>Designated Safeguarding Officer (DSO):</strong></p>
        <p>Name: Dr Sophia Bentley</p>
        <p>Email: <a href="mailto:sophia@findaway.org">sophia@findaway.org</a></p>

        <p><strong>Deputy Safeguarding Officer:</strong></p>
        <p>Name: Laura Andrews</p>
        <p>Email: <a href="mailto:Laura@findaway.org">Laura@findaway.org</a></p>
      </Section>

      <Section title="Recognising Signs of Abuse">
        <p>Forms of abuse affecting vulnerable adults may include:</p>
        <ul>
          <li>Physical abuse</li>
          <li>Emotional or psychological abuse</li>
          <li>Financial or material abuse</li>
          <li>Neglect and acts of omission</li>
          <li>Sexual abuse</li>
          <li>Discriminatory abuse</li>
          <li>Domestic abuse</li>
          <li>Organisational abuse</li>
          <li>Modern slavery</li>
          <li>Self-neglect</li>
        </ul>
        <p>
          All staff must complete safeguarding training relevant to working with
          adults.
        </p>
      </Section>

      <Section title="Becoming Aware of a Safeguarding Issue">
        <p>Concerns may arise through:</p>
        <ul>
          <li>Changes in behaviour or presentation</li>
          <li>Disclosures</li>
          <li>Observations or conversations</li>
          <li>Third-party information</li>
        </ul>
      </Section>

      <Section title="Responding to Concerns">
        <Subsection title="Stage 1">
          <ul>
            <li>Listen and remain calm.</li>
            <li>Avoid leading questions.</li>
            <li>Reassure the individual they&apos;ve done the right thing.</li>
            <li>Inform them that information must be shared to keep them safe.</li>
            <li>Record details accurately using the safeguarding form.</li>
          </ul>
        </Subsection>

        <Subsection title="Stage 2">
          <p>The DSO will assess the concern and, if necessary, refer to:</p>
          <ul>
            <li>Adult Social Care</li>
            <li>Police (if there is immediate risk)</li>
          </ul>
          <p>
            Consent will be sought unless the individual lacks capacity or others
            may be at risk.
          </p>
        </Subsection>
      </Section>

      <Section title="Safe Recruitment">
        <ul>
          <li>
            All staff and volunteers working with adults undergo DBS checks.
          </li>
          <li>
            A clear recruitment process including interviews, reference checks,
            and safeguarding commitment.
          </li>
          <li>
            Overseas applicants must provide equivalent checks and additional
            references.
          </li>
        </ul>
      </Section>

      <Section title="Management and Supervision">
        <ul>
          <li>
            Regular supervision includes time for discussing safeguarding and
            wellbeing.
          </li>
          <li>
            All safeguarding concerns raised by staff or volunteers must be
            reported and recorded.
          </li>
        </ul>
      </Section>

      <Section title="Allegations Against Staff">
        <p>
          Allegations will be referred to the Local Authority Safeguarding Adults
          Board (SAB) and the appropriate statutory services.
        </p>
      </Section>

      <Section title="Recording and Confidentiality">
        <ul>
          <li>Use the safeguarding form to record all concerns.</li>
          <li>All records are kept securely and confidentially.</li>
          <li>
            Adults have the right to confidentiality unless there is risk of
            significant harm.
          </li>
        </ul>
      </Section>

      <Section title="Review and Dissemination">
        <ul>
          <li>
            This policy is reviewed annually and approved by the Management
            Committee.
          </li>
          <li>A copy will be provided to all staff and volunteers.</li>
          <li>It will be displayed on our website.</li>
        </ul>
      </Section>
    </InnerPageLayout>
  );
}
