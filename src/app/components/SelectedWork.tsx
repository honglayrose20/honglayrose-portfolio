import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'DRTIM LTD',
    period: 'January 2025 - Present',
    roles: ['UX Designer', 'Project Manager'],
    gradient: 'from-orange-300 to-amber-200',
    description: 'UK-based company where I design intuitive UI/UX experiences and manage projects bridging design and development teams.',
    achievements: [
      'Design intuitive UI/UX experiences and interactive prototypes for mobile and web features, translating business requirements and stakeholder feedback into developer-ready designs.',
      'Coordinate with developers, designers, content teams, and stakeholders to define priorities, requirements, timelines, and deliverables.',
    ],
    technologies: ['Figma', 'Prototyping', 'Jira', 'Confluence', 'Agile'],
    projects: [
      { name: 'Mobile & Web Feature Design', description: 'End-to-end UI/UX design for mobile and web features, from wireframes to developer-ready prototypes.' },
      { name: 'Cross-Team Project Coordination', description: 'Defining priorities, requirements, timelines, and deliverables across developers, designers, and content teams.' },
    ],
  },
  {
    company: 'Corewood Care LLC',
    period: 'March 2023 - May 2025',
    roles: ['UI/UX', 'Project Manager'],
    gradient: 'from-amber-200 to-yellow-100',
    description: 'Home care company focused on improving health management. I led design and project management for their digital products.',
    achievements: [
      'Led design system overhaul that improved user satisfaction by 40%.',
      'Managed cross-functional team of 8 developers and designers.',
      'Implemented agile methodologies reducing project delivery time by 25%.',
    ],
    technologies: ['Figma', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Jira'],
    projects: [
      { name: 'Patient Portal Redesign', description: 'Complete redesign of patient portal improving accessibility and user experience.' },
      { name: 'Care Management Dashboard', description: 'Administrative dashboard for care coordinators to manage patient cases.' },
    ],
  },
  {
    company: 'Creative Intelligence UK',
    period: 'March 2021 - Oct 2024',
    roles: ['UI/UX', 'Project Manager', 'Business Analyst'],
    gradient: 'from-yellow-200 to-orange-100',
    description: 'Swiftly identifies workflow challenges, offering tailored technical solutions to streamline and scale businesses.',
    achievements: [
      'Analyzed business processes for 15+ clients, identifying efficiency improvements.',
      'Designed and delivered 20+ custom software solutions.',
      'Increased client operational efficiency by an average of 35%.',
    ],
    technologies: ['Sketch', 'InVision', 'Azure DevOps', 'Power BI', 'SQL'],
    projects: [
      { name: 'Workflow Automation Platform', description: 'Enterprise solution for automating business processes across multiple departments.' },
      { name: 'Client Analytics Dashboard', description: 'Real-time analytics platform for tracking business KPIs and performance metrics.' },
    ],
  },
  {
    company: 'University of Science & Technology of Southern Ph.',
    period: 'July 2020 - January 2024',
    roles: ['Part-time Instructor'],
    gradient: 'from-orange-200 to-amber-100',
    description: 'State university in the Philippines. I taught UI/UX Design, Project Management, and Mobile Development as a part-time instructor.',
    achievements: [
      'Taught UI/UX Design, Project Management, and Mobile Development to 200+ students.',
      'Developed curriculum for modern design methodologies.',
      'Mentored students in capstone projects with a 95% success rate.',
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Miro', 'Google Classroom'],
    projects: [
      { name: 'Student Portfolio Platform', description: 'Online platform for students to showcase their design work and projects.' },
      { name: 'Learning Management System', description: 'Custom LMS for design courses with interactive assignments and feedback.' },
    ],
  },
  {
    company: 'Matrickz GmbH',
    period: 'February 2020 - March 2022',
    roles: ['Project Manager', 'CEO Assistant'],
    gradient: 'from-amber-300 to-yellow-200',
    description: 'Munich-based automotive software company specialised in embedded software development, testing, and integration.',
    achievements: [
      'Managed automotive software projects worth €2M+ budget.',
      'Coordinated international teams across 4 different time zones.',
      'Reduced project delivery times by 30% through process optimisation.',
    ],
    technologies: ['JIRA', 'Confluence', 'Git', 'Jenkins', 'Automotive SPICE'],
    projects: [
      { name: 'Embedded Testing Framework', description: 'Automated testing solution for automotive embedded systems.' },
      { name: 'Project Management Portal', description: 'Internal tool for tracking project progress and resource allocation.' },
    ],
  },
  {
    company: 'Mednefits Pte Ltd',
    period: 'June 2017 - May 2020',
    roles: ['Project Manager', 'Operation Manager'],
    gradient: 'from-orange-100 to-yellow-50',
    description: 'B2B employee medical benefits platform serving businesses across Asia with automated, affordable benefits management.',
    achievements: [
      'Scaled platform to serve 50,000+ employees across 200+ companies.',
      'Led operations team of 12 members across multiple departments.',
      'Improved customer satisfaction scores from 3.2 to 4.8/5.0.',
    ],
    technologies: ['Salesforce', 'Zendesk', 'Tableau', 'Slack', 'Google Analytics'],
    projects: [
      { name: 'Benefits Management Platform', description: 'Enterprise platform for managing employee medical benefits and claims.' },
      { name: 'Mobile Health App', description: 'Employee-facing mobile app for accessing medical benefits and services.' },
    ],
  },
  {
    company: 'Upcode Academy SG',
    period: 'August 2017 - May 2018',
    roles: ['Part-Time Graphic Designer'],
    gradient: 'from-yellow-100 to-amber-50',
    description: 'Designed banners, social media ads, event posters, company brochures, and logos for a coding bootcamp in Singapore.',
    achievements: [
      'Created 100+ marketing materials increasing engagement by 60%.',
      'Established brand guidelines and visual identity system.',
      'Designed materials for 15+ major events and campaigns.',
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
    projects: [
      { name: 'Brand Identity System', description: 'Complete brand redesign including logo, colours, and typography guidelines.' },
      { name: 'Marketing Campaign Materials', description: 'Comprehensive marketing materials for coding bootcamp enrollment campaigns.' },
    ],
  },
  {
    company: 'Edufarm Learning Centre',
    period: 'November 2016 - April 2017',
    roles: ['Part-Time Graphic Designer'],
    gradient: 'from-amber-100 to-orange-50',
    description: 'Designed banners, social media ads, event posters, company brochures, and logos for a learning centre.',
    achievements: [
      'Redesigned learning centre branding increasing enrollment by 25%.',
      'Created educational materials for 10+ courses.',
      'Developed social media strategy increasing followers by 150%.',
    ],
    technologies: ['Adobe Creative Suite', 'Sketch', 'Social Media Tools'],
    projects: [
      { name: 'Educational Material Design', description: 'Interactive learning materials and course handbooks for various subjects.' },
      { name: 'Digital Marketing Assets', description: 'Social media campaigns and digital advertisements for course promotion.' },
    ],
  },
];

export function SelectedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-none">
            Work Experience
          </h2>
          <span className="text-sm text-gray-400 hidden sm:block">2016 — 2025</span>
        </div>

        <div className="border-t border-gray-200 mb-0" />

        <ul>
          {experiences.map((exp, i) => (
            <li key={exp.company}>
              {/* Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 sm:gap-6 py-5 group text-left transition-colors duration-200 px-2 -mx-2 rounded-xl hover:bg-gray-50"
              >
                {/* Number */}
                <span className="text-sm text-gray-400 w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Job title */}
                <span className="flex-1 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                  {exp.roles.join(' · ')}
                </span>

                {/* Company + period */}
                <div className="hidden sm:flex flex-col items-end shrink-0 gap-1">
                  <span className="text-xs bg-orange-50 text-orange-600 border border-orange-100 rounded-full px-2 py-0.5">{exp.company}</span>
                  <span className="text-xs text-gray-400">{exp.period}</span>
                </div>

                {/* Expand toggle */}
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
                  {openIndex === i
                    ? <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                    : <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  }
                </div>
              </button>

              {/* Expanded panel */}
              {openIndex === i && (
                <div className="mb-4 mx-2 bg-[#fafaf9] border border-gray-100 rounded-2xl p-6 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects + Tools */}
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Notable Projects</h4>
                        <div className="space-y-3">
                          {exp.projects.map((p) => (
                            <div key={p.name} className="bg-white border border-gray-100 rounded-xl p-3">
                              <p className="text-sm font-semibold text-gray-900 mb-0.5">{p.name}</p>
                              <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((t) => (
                            <span key={t} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-700">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {i < experiences.length - 1 && <div className="border-t border-gray-100" />}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
