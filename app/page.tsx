'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users, Video, MessageCircle, Mail, ArrowRight, Sparkles, Shield, BookOpen } from 'lucide-react';
import { colors } from '@/lib/colors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FindAWayIcon from '@/components/FindAWayIcon';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  image: string;
  link?: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  image: string;
  imagePosition: string;
}

interface Fee {
  task: string;
  cost: string;
}

export default function FindAWayWebsite() {
  const services: Service[] = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Interactive Guidance (VIG)',
      description: 'An evidence-based intervention using video feedback to improve communication and relationships between parents or carers and children. Families reflect on their strengths through positive interaction clips.',
      color: colors.coral,
      image: '/vig.png',
      link: '/services/video-interactive-guidance',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Parent Support Groups',
      description: 'A safe, welcoming space for parents to connect, share experiences, and receive guidance. These groups foster community while offering practical advice from experienced facilitators.',
      color: colors.sage,
      image: '/support-group.png',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Strength-Based Interventions',
      description: 'We focus on identifying and building upon unique family strengths. This empowers families to harness their abilities and resources to overcome challenges and promote well-being.',
      color: colors.gold,
      image: '/strength.png',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'One-to-One Consultations',
      description: 'Personalised sessions for parents, carers, and families to discuss specific concerns about development, emotional well-being, and behaviour with problem-solving strategies tailored to you.',
      color: colors.coral,
      image: '/consultations.png',
    },
  ];

  const team: TeamMember[] = [
    {
      name: 'Dr Sophia Bentley',
      role: 'Founding Director & Educational Psychologist',
      bio: [
        "I'm Dr Sophia Bentley, Founder and Managing Director of Find A Way CIC.",
        "As an Educational and Child Psychologist with over 15 years' experience working with local authorities, schools, and communities, I've spent my career helping families navigate the early years. I understand how confusing and overwhelming it can be for parents trying to find the right support. That's why I founded Find A Way CIC: to create a space where families can access practical help, feel heard, and build the confidence to move forward in a way that works for them.",
        "As both a professional and a parent, I know that every family's journey is different. My passion is in helping families discover their own path, creating opportunities for children to thrive, and building stronger, more connected communities where no one feels like they're doing it alone.",
      ],
      image: '/images/team/sophia.png',
      imagePosition: 'center 25%',
    },
    {
      name: 'Laura Andrews',
      role: 'Director',
      bio: [
        "I'm Laura Andrews, with 15 years experience working in children's safeguarding, I have dedicated my career to working with children and their families where there is a risk of harm and a need for support to ensure children live in a safe environment.",
        "As a Social Work Team Manager, I have a strong belief in empowering parents and caregivers by equipping them with the tools and guidance necessary to support children to reach their full potential. I am committed to creating a collaborative and restorative environment when working with families to achieve the best possible outcome.",
        "Not only do I bring a professional understanding of the challenges parents face, but as a mother of two young children myself, I have a personal appreciation for the complexities of parenting. This blend of professional expertise and my personal experience allows me to approach my work with empathy, compassion, and a deep commitment to helping families succeed.",
      ],
      image: '/images/team/laura.jpeg',
      imagePosition: 'center 25%',
    },
    {
      name: 'Hannah Flaherty',
      role: 'Director',
      bio: [
        "I'm Hannah Flaherty Moftakhar, a Civil Servant working on Major Rail Projects where I lead on engagement and strategy. I have over 15 years experience managing relationships and am responsible for building and maintaining connections with key stakeholders, understanding their needs and concerns, and actively engaging with them through a project.",
        "I passionately believe in the power of community, which can help parents to be more resilient when faced with challenges, especially in the early years of parenting. I hope that by being part of Find A Way I can use my project delivery skills to help parents to develop strong, long-lasting relationships with their children.",
        "Outside of work I am a busy mum of twin toddlers, a keen foodie (cooking and eating) and a novice runner.",
      ],
      image: '/images/team/hannah.jpeg',
      imagePosition: 'center 25%',
    },
    {
      name: 'Louise Carter',
      role: 'Director',
      bio: [
        "Louise Carter is a passionate and dedicated Delivery Manager for a leading Financial Services firm, where she works across the Development and Data teams to manage products through their lifecycle and ensures successful delivery to the business. With a solid background in project management, Louise has a wealth of experience delivering key business projects.",
        "Outside of her professional career, Louise is a committed advocate for postnatal care and believes in equal access to services and education, regardless of location or financial status. As Chair of the Parent Teacher Association (PTA) at her children's primary school, she works closely with both the school and parents to raise funds that enhance the children's school experience.",
        "A proud mother of two beautiful boys, Louise is keen to get involved in supporting others during the early years. Having joined NCT during her first pregnancy, the network and support she received during the postnatal period were invaluable, and she is passionate about ensuring all families have access to social and professional support.",
      ],
      image: '/images/team/louise.jpeg',
      imagePosition: 'center center',
    },
  ];

  const fees: Fee[] = [
    { task: 'School half day', cost: '£325' },
    { task: 'School full day', cost: '£600' },
    { task: 'Full EP report', cost: '£1000' },
    { task: 'EP report for EHCP needs assessment', cost: '£1250' },
    { task: 'Bespoke packages', cost: 'Price on request' },
  ];

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: colors.cream }}>
      <Header transparent />

      {/* Hero Section - h-screen keeps news banner visible */}
      <section className="h-screen flex flex-col">
        {/* Main hero content - flex-1 fills space, flex-col justify-center vertically centers, pt offsets for nav */}
        <div className="flex-1 flex flex-col justify-center pt-20 md:pt-8">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
                >
                  <FindAWayIcon className="w-4 h-4" />
                  <span className="font-body text-sm font-medium">Community Interest Company</span>
                </div>

                <h1
                  className="font-body text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                  style={{ color: colors.navy, lineHeight: 1.05 }}
                >
                  Helping you navigate the{' '}
                  <span style={{ color: colors.coral }}>early years</span>
                </h1>

                <p
                  className="font-body text-lg md:text-xl mb-8 max-w-md"
                  style={{ color: `${colors.navy}90`, lineHeight: 1.7 }}
                >
                  Empowering families across Yorkshire with accessible psychological support,
                  tailored interventions, and community-based care—helping every family thrive.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-body font-medium text-white transition-all hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: colors.coral }}
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1 font-body font-medium transition-colors hover:opacity-70"
                    style={{ color: colors.navy }}
                  >
                    Our Services <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hero illustration with seamless fade - shifted left for better text connection */}
              <div className="relative fade-up flex items-center justify-center md:-ml-[6%]" style={{ animationDelay: '0.2s' }}>
                <div className="hero-image-container relative w-96 h-96 md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] xl:w-[660px] xl:h-[660px]">
                  <Image
                    src="/images/hero-stepping-stones.png"
                    alt="Stepping stones leading toward the horizon"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 480px, 540px"
                    className="object-contain object-center"
                  />
                  {/* Gradient fade overlay for seamless blend */}
                  <div className="hero-image-fade" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signal Strip - visually separated from hero */}
        <div
          style={{
            backgroundColor: `${colors.sage}08`,
            borderTop: `1px solid ${colors.sage}15`
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-5">
            <a
              href="#funding"
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 group cursor-pointer"
            >
              <span
                className="font-body text-xs font-medium uppercase tracking-wider px-2 py-1 rounded"
                style={{ backgroundColor: `${colors.sage}25`, color: colors.sage }}
              >
                News
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/national-lottery-logo.png"
                  alt="National Lottery Community Fund"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span
                  className="font-body text-sm sm:text-base group-hover:underline"
                  style={{ color: colors.navy }}
                >
                  Find A Way is proudly funded by the National Lottery Community Fund
                </span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" style={{ color: colors.navy }} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
              >
                <BookOpen className="w-4 h-4" />
                <span className="font-body text-sm font-medium">About Us</span>
              </div>

              <h2
                className="font-body text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.navy }}
              >
                Supporting families when they need it most
              </h2>

              <div className="space-y-4 font-body" style={{ color: `${colors.navy}90` }}>
                <p className="text-lg leading-relaxed">
                  At Find A Way, we believe every family should have the support they need,
                  when they need it, and be part of a community that's there for them.
                </p>
                <p className="leading-relaxed">
                  We provide a wide range of interventions including pre-natal support,
                  parent support groups, individual consultations, and assessments. Our
                  flexible approach ensures we respond to specific family needs in real-time.
                </p>
                <p className="leading-relaxed">
                  We understand the importance of early intervention. All our services are
                  evidence-based and rooted in strength-based practice, empowering families
                  by focusing on their inherent strengths and resources.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: colors.coral, color: 'white' }}
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Evidence-Based',
                  desc: 'All interventions grounded in proven research',
                  color: colors.sage
                },
                {
                  icon: <FindAWayIcon className="w-6 h-6" />,
                  title: 'Strength-Focused',
                  desc: 'Building on your family\'s unique abilities',
                  color: colors.coral
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Experienced Team',
                  desc: 'Specialists in trauma and attachment',
                  color: colors.gold
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: 'Flexible Support',
                  desc: 'Tailored to your family\'s journey',
                  color: colors.sage
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="hover-lift rounded-2xl p-6"
                  style={{ backgroundColor: colors.warmWhite, border: `1px solid ${colors.navy}08` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-body font-semibold text-lg mb-2" style={{ color: colors.navy }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: `${colors.navy}70` }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24" style={{ backgroundColor: colors.warmWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Our Services</span>
            </div>

            <h2
              className="font-body text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.navy }}
            >
              What we offer
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: `${colors.navy}80` }}
            >
              Comprehensive support tailored to meet the unique needs of each family,
              empowering you to overcome challenges and thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const cardContent = (
                <>
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Service icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: service.color }}
                  >
                    <div className="text-white w-8 h-8">
                      {service.icon}
                    </div>
                  </div>

                  <h3
                    className="font-body text-2xl font-semibold mb-4 relative z-10"
                    style={{ color: colors.navy }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="font-body leading-relaxed relative z-10"
                    style={{ color: `${colors.navy}80` }}
                  >
                    {service.description}
                    {service.link && (
                      <>
                        {' '}
                        <span
                          className="inline-flex items-center gap-1 font-medium group-hover:underline"
                          style={{ color: colors.coral }}
                        >
                          Read more <ArrowRight className="w-3 h-3" />
                        </span>
                      </>
                    )}
                  </p>
                </>
              );

              const cardClassName = "hover-lift rounded-3xl p-8 relative overflow-hidden group block";
              const cardStyle = { backgroundColor: colors.warmWhite };

              return service.link ? (
                <Link
                  key={i}
                  href={service.link}
                  className={cardClassName}
                  style={cardStyle}
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={i}
                  className={cardClassName}
                  style={cardStyle}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
            >
              <Users className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Our Team</span>
            </div>

            <h2
              className="font-body text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.navy }}
            >
              Meet the people behind Find A Way
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: `${colors.navy}80` }}
            >
              A dedicated team combining professional expertise with personal understanding
              of the challenges families face.
            </p>
          </div>

          <div className="space-y-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.warmWhite }}
              >
                <div
                  className={`flex flex-col items-center ${i % 2 === 0 ? 'md:flex-row md:items-start' : 'md:flex-row-reverse md:items-start'} gap-8`}
                >
                  {/* Photo with colored ring */}
                  <div className="flex-shrink-0">
                    <div
                      className="p-1 rounded-full"
                      style={{ backgroundColor: `${colors.sage}30` }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={208}
                        height={208}
                        className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover shadow-md"
                        style={{ objectPosition: member.imagePosition }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3
                      className="font-body text-2xl font-semibold mb-1"
                      style={{ color: colors.navy }}
                    >
                      {member.name}
                    </h3>

                    <p
                      className="font-body font-medium mb-4"
                      style={{ color: colors.coral }}
                    >
                      {member.role}
                    </p>

                    <div className="space-y-3">
                      {member.bio.map((paragraph, j) => (
                        <p
                          key={j}
                          className="font-body leading-relaxed"
                          style={{ color: `${colors.navy}85` }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Practice Section */}
      <section id="private-practice" className="py-24" style={{ backgroundColor: colors.warmWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
              >
                <BookOpen className="w-4 h-4" />
                <span className="font-body text-sm font-medium">Private Practice</span>
              </div>

              <h2
                className="font-body text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.navy }}
              >
                Educational psychology services
              </h2>

              <div className="space-y-4 font-body" style={{ color: `${colors.navy}90` }}>
                <p className="text-lg leading-relaxed">
                  To help fund our free services, we offer private practice support from
                  a chartered Educational & Child Psychologist.
                </p>
                <p className="leading-relaxed">
                  We provide psychological assessments, advice, support, and interventions
                  for individuals, groups, and organisations across early years, primary,
                  secondary, and special educational needs settings.
                </p>
                <p className="leading-relaxed">
                  A portion of all fees is reinvested into our pro bono work, allowing us
                  to offer free support to families facing financial hardship.
                </p>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden"
              style={{ backgroundColor: colors.cream }}
            >
              <div className="p-6 border-b" style={{ borderColor: `${colors.navy}10` }}>
                <h3
                  className="font-body text-xl font-semibold"
                  style={{ color: colors.navy }}
                >
                  Service Fees
                </h3>
              </div>

              <div className="divide-y" style={{ borderColor: `${colors.navy}10` }}>
                {fees.map((fee, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-5 hover:bg-white/50 transition-colors"
                  >
                    <span className="font-body" style={{ color: colors.navy }}>
                      {fee.task}
                    </span>
                    <span
                      className="font-body font-semibold"
                      style={{ color: colors.coral }}
                    >
                      {fee.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: `${colors.sage}15`, color: colors.sage }}
          >
            <FindAWayIcon className="w-4 h-4" />
            <span className="font-body text-sm font-medium">Funding</span>
          </div>

          <h2
            className="font-body text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.navy }}
          >
            We are a Community Interest Company
          </h2>

          <p
            className="font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: `${colors.navy}80` }}
          >
            Find A Way operates under a not-for-profit model as a CIC (company no.{' '}
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/15992869"
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              15992869
            </a>
            ). We are funded partially by grants and partially by our private practice.
          </p>

          {/* National Lottery logo from original site */}
          <div
            className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl mb-8"
            style={{ backgroundColor: `${colors.sage}12` }}
          >
            <div className="text-left">
              <p className="font-body text-sm" style={{ color: `${colors.navy}60` }}>
                Proudly funded by
              </p>
            </div>
            <Image
              src="/logos/national-lottery-logo.png"
              alt="National Lottery Community Fund"
              width={160}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </div>

          <p
            className="font-body mb-8"
            style={{ color: `${colors.navy}80` }}
          >
            If you would like to help with funding, volunteer your time, or get involved
            with our cause, please contact us.
          </p>

          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-body font-medium text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: colors.coral }}
          >
            Get Involved <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm font-medium">Contact Us</span>
              </div>

              <h2 className="font-body text-4xl md:text-5xl font-bold mb-6 text-white">
                Let's keep in touch
              </h2>

              <p
                className="font-body text-lg leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                If you have questions or would like to learn more about how we can support
                you and your family, please don't hesitate to reach out. We're here to
                listen and provide guidance.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@findaway.org"
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.coral}30` }}
                  >
                    <Mail className="w-5 h-5" style={{ color: colors.peach }} />
                  </div>
                  <div>
                    <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      Email us at
                    </p>
                    <p className="font-body font-medium text-white">
                      hello@findaway.org
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://www.facebook.com/share/1HEMMP6LRs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/findaway_psychology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/findaway_psych"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <form
                action="https://usebasin.com/f/e6fae10f0547"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block font-body text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-5 py-4 rounded-xl font-body outline-none transition-all focus:ring-2 focus:ring-white/30"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: 'none'
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Email <span style={{ color: colors.coral }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    className="w-full px-5 py-4 rounded-xl font-body outline-none transition-all focus:ring-2 focus:ring-white/30"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: 'none'
                    }}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-4 rounded-xl font-body outline-none transition-all focus:ring-2 focus:ring-white/30"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: 'none'
                    }}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl font-body outline-none transition-all focus:ring-2 focus:ring-white/30 resize-none"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: 'none'
                    }}
                    placeholder="Tell us more..."
                  />
                </div>

                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  We'll never share your details. Read our{' '}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:no-underline"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    Privacy Policy
                  </Link>.
                </p>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl font-body font-medium text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ backgroundColor: colors.coral }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
