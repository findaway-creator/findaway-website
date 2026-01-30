import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageLayout, { Section, Subsection } from '@/components/InnerPageLayout';
import { colors } from '@/lib/colors';

export const metadata: Metadata = {
  title: 'Video Interaction Guidance (VIG)',
  description: 'Video Interaction Guidance is a gentle, strengths-based approach that supports parents and carers to build more positive, connected relationships with their children.',
  openGraph: {
    title: 'Video Interaction Guidance (VIG) | Find A Way',
    description: 'A relational tool for strengthening parent-child connection through video feedback.',
  },
};

const tocSections = [
  'What is VIG?',
  'Who is VIG for?',
  'How does VIG work?',
  'What impact can VIG have?',
  'Interested in VIG?',
];

export default function VIGPage() {
  return (
    <InnerPageLayout
      title="Video Interaction Guidance (VIG)"
      subtitle="A relational tool for strengthening parent-child connection."
      backHref="/#services"
      backLabel="Back to Services"
      toc={tocSections}
    >
      <Section title="What is VIG?">
        <p>
          Video Interaction Guidance (VIG) is a gentle, strengths-based approach
          that supports parents and carers to build more positive, connected
          relationships with their children. It focuses on what is already going
          well in everyday interactions - those small but powerful moments of
          connection - and helps to highlight and build on them.
        </p>
        <p>
          A trained VIG practitioner films short clips of everyday parent-child
          interactions, such as playing, getting ready, or sharing a routine
          activity. The practitioner then selects a few clips that show moments of
          attunement, warmth, or responsiveness. These clips are reviewed with the
          parent in a relaxed, supportive session, offering the opportunity to
          reflect on what worked well, how the child responded, and how these
          moments can be built upon.
        </p>
        <p>
          VIG is used across many settings - including children&apos;s centres,
          family support services, health and early years provision - as a way to
          strengthen relationships, boost confidence, and support emotional
          wellbeing. It is a respectful and collaborative approach that helps
          build emotional safety and trust.
        </p>
      </Section>

      <Section title="Who is VIG for?">
        <p>
          At Find A Way, VIG is currently offered to parents and carers of young
          children, particularly in the early years. It is well suited to those
          who may benefit from support in building or strengthening their
          connection with their child. VIG can be particularly helpful when:
        </p>
        <ul>
          <li>The parent-child relationship feels strained, distant or &apos;stuck&apos;</li>
          <li>A parent is feeling unsure, overwhelmed, or emotionally disconnected</li>
          <li>Communication between parent and child is difficult or easily misunderstood</li>
          <li>A relationship is being rebuilt following separation, family stress or safeguarding concerns</li>
          <li>A child is showing early signs of emotional or behavioural challenges</li>
          <li>A parent is experiencing difficulty bonding or connecting with their child</li>
          <li>The family is navigating developmental concerns or awaiting assessment</li>
          <li>There has been involvement from services (e.g. Early Help, social care), and relational support is needed</li>
        </ul>
        <p>
          VIG can be used preventatively or as part of a wider package of support.
          It complements trauma-informed and attachment-focused work and aligns
          well with early intervention approaches.
        </p>
      </Section>

      <Section title="How does VIG work?">
        <p>
          VIG typically takes place over three to four cycles, each involving the
          following steps:
        </p>

        <Subsection title="1. Initial Meeting">
          <p>
            The practitioner meets with the parent or carer to discuss their hopes
            and goals. Together, they agree a helping question to guide the process,
            such as: &quot;What would you like to be happening between you and your child?&quot;
            This helps to keep the work focused on what matters most to the parent.
          </p>
        </Subsection>

        <Subsection title="2. Video Recording">
          <p>
            A short video (around 10-15 minutes) is taken of the parent and child
            during a familiar activity - such as playtime, mealtime, or getting
            ready. The filming takes place in a comfortable, natural setting
            (usually the home or a community space).
          </p>
        </Subsection>

        <Subsection title="3. Shared Review">
          <p>
            The practitioner selects a few short clips that show moments of positive
            connection and emotional responsiveness. In a follow-up session, these
            clips are watched and discussed with the parent using gentle, reflective
            questions such as:
          </p>
          <ul>
            <li>What did you notice going well?</li>
            <li>How did your child respond to you here?</li>
            <li>What helped that moment work?</li>
          </ul>
          <p>
            These reflections help parents recognise their own strengths and
            discover small, achievable steps for deepening connection.
          </p>
        </Subsection>
      </Section>

      <Section title="What impact can VIG have?">
        <p>Parents who take part in VIG often report that they:</p>
        <ul>
          <li>Feel more confident and connected in their relationship with their child</li>
          <li>Gain insight into their child&apos;s communication and emotional needs</li>
          <li>Notice and celebrate more positive moments day to day</li>
          <li>Experience fewer struggles around communication, routines, or behaviour</li>
          <li>Enjoy their time with their child more and feel less overwhelmed</li>
        </ul>

        <p>In the longer term, VIG can support:</p>
        <ul>
          <li>Stronger attachment and emotional security between parent and child</li>
          <li>Improved emotional regulation and relational repair after stress or trauma</li>
          <li>Enhanced language and communication development in the early years</li>
          <li>A stronger foundation for school readiness - including confidence, attention, and curiosity</li>
          <li>Increased parental resilience during periods of change or challenge</li>
          <li>Reduced need for more intensive services through early relational support</li>
        </ul>

        <p>
          Professionals consistently report that VIG creates meaningful shifts in
          family relationships and can be a turning point in wider support plans.
          It is especially effective when used alongside other wraparound
          interventions.
        </p>
      </Section>

      <Section title="Interested in VIG?">
        <p>
          Referrals to VIG at Find A Way can be made by professionals working with
          families, including family support workers, health visitors, social
          workers, school staff, and other voluntary or community organisations.
          Families can also self-refer.
        </p>
        <p>
          Informal consultations are available to help determine whether VIG is
          the right fit for a particular family.
        </p>
        <p>
          Please contact us to request a referral form, discuss a specific family,
          or find out more about how VIG can complement your work.
        </p>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg mt-4"
          style={{ backgroundColor: colors.coral, color: 'white', textDecoration: 'none' }}
        >
          Get in Touch
        </Link>
      </Section>
    </InnerPageLayout>
  );
}
