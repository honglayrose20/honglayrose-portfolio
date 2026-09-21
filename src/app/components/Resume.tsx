import { useNavigate } from 'react-router';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from './ui/button';

const workExperience = [
  {
    company: 'DRTIM LTD, United Kingdom',
    period: 'January 2025 - Present',
    role: 'Senior Product Designer | UI/UX | Project Management',
    bullets: [
      'Design intuitive UI/UX experiences and interactive prototypes for mobile and web features, translating business requirements and stakeholder feedback into developer-ready designs.',
      'Coordinate with developers, designers, content teams, and stakeholders to define priorities, requirements, timelines, and deliverables.',
    ],
  },
  {
    company: 'Corewood Care, United State of America',
    period: 'April 2024 - May 2025',
    role: 'Project Manager | Website Design',
    bullets: [
      'As a Project Manager utilizing Scrum and Kanban, and with a background in website design.',
    ],
  },
  {
    company: 'Creative Intelligence Limited, United Kingdom',
    period: 'March 2021 - April 2024',
    role: 'Project Manager',
    bullets: [
      'CIUK swiftly identifies workflow challenges, offering tailored technical solutions to streamline and scale businesses.',
    ],
  },
  {
    company: 'Dailypress Pty Ltd, Australia',
    period: 'April 2021 - June 2022',
    role: 'Mobile App Project Manager',
    bullets: [
      'Forecasted and tracked progress for 16 app projects in weekly project management reports.',
    ],
  },
  {
    company: 'Matrickz GmbH, Germany',
    period: 'February 2020 - March 2022',
    role: 'Assistant Operation & Project Manager',
    bullets: [
      'Collaborated with the Vice-President to align operational processes while serving as an Operations Assistant.',
    ],
  },
  {
    company: 'Mednefits Pte Ltd, Singapore',
    period: 'June 2017 - May 2020',
    role: 'Tech Operation and Project Manager',
    bullets: [
      'Managed the entire Philippine development team, overseeing project scope and size determination, as well as project management.',
      'Headed a team of project managers across various departments.',
    ],
  },
];

const skills = [
  'Project Planning & Coordination',
  'UI/UX Design',
  'App Store & Google Play Release Management',
  'Agile & Scrum Methodologies',
  'Requirements Gathering & Analysis',
  'Cross-functional Team Collaboration',
  'Quality Assurance (QA) & User Acceptance Testing (UAT)',
  'Product & Feature Testing',
  'Process & Workflow Improvement',
  'Figma & Interactive Prototyping',
  'Flutter Project Coordination',
  'Claude Design',
  'Claude Code',
  'Codex',
  'Git & GitHub',
  'Technical Documentation',
  'Problem Solving & Troubleshooting',
];

const references = [
  {
    title: 'Full Stack Developer',
    name: 'Robert Tribiana',
    email: 'roberttribiana@drtimpearce.com',
    phone: '',
  },
  {
    title: 'Senior Full Stack Developer',
    name: 'Jhon Rey Ranario',
    email: 'jrran90.work@gmail.com',
    phone: '',
  },
  {
    title: 'College Instructor',
    name: 'Joel O. Abratiguin',
    email: 'joel.abratiguin@ustp.edu.ph',
    phone: '(63) 9358238678',
  },
];

export function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm print:hidden">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between max-w-4xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <h2 className="text-base font-semibold text-gray-900">Resume</h2>

          <Button
            asChild
            size="sm"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            <a href="/Lim_Resume.pdf" download="Lim Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      {/* Resume paper */}
      <div className="py-10 px-4 print:py-0 print:px-0">
        <div
          id="resume-content"
          className="bg-white max-w-3xl mx-auto shadow-lg rounded-xl print:shadow-none print:rounded-none px-10 py-10 print:px-6 print:py-4 space-y-6"
        >

          {/* Name & Title */}
          <div className="text-center border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold tracking-widest text-gray-900 uppercase mb-1">Honglay Rose Lim Aton</h1>
            <h2 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-5">Senior Product Designer | UI/UX | Project Management</h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-900">
              <span>+639-65718-6590</span>
              <span>limhonglayrose@gmail.com</span>
              <span>Philippines</span>
              <span>www.linkedin.com/in/honglayroselim</span>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-2 border-b border-gray-200 pb-1">Profile</h3>
            <p className="text-sm text-gray-900 leading-relaxed">
              Experienced Senior Product Designer includes UI UX and IT Project Manager with 9+ years of experience managing
              digital projects, coordinating cross-functional teams, and delivering web and mobile applications. Skilled in
              project planning, UI/UX design, product development, quality assurance, and stakeholder management, with
              hands-on experience working closely with developers from concept through release.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-3 gap-8">

            {/* Left — Work Experience */}
            <div className="col-span-2 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1">Work Experience</h3>

              {workExperience.map((exp, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-500">{exp.company} | {exp.period}</p>
                  <p className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-1">{exp.role}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-gray-900 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right — Skills, Education, Language */}
            <div className="col-span-1 space-y-6">

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1 mb-3">Skills</h3>
                <ul className="space-y-1 text-sm text-gray-900">
                  {skills.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1 mb-3">Education</h3>
                <p className="text-xs text-gray-500 mb-1">University of Science and Technology of Southern Philippines</p>
                <p className="text-sm font-semibold text-orange-500">Bachelor of Science in Electro-Mechanical Technology</p>
                <p className="text-xs text-gray-500 mt-1">2012–2017</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1 mb-3">Language</h3>
                <ul className="space-y-1 text-sm text-gray-900">
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />English</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />Filipino</li>
                </ul>
              </div>

            </div>
          </div>

          {/* References */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1 mb-4">References</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {references.map((ref, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-500 mb-0.5">{ref.title}</p>
                  <p className="text-sm font-bold text-gray-900 uppercase mb-1">{ref.name}</p>
                  <ul className="space-y-0.5 text-xs text-gray-600">
                    <li>{ref.email}</li>
                    {ref.phone && <li>{ref.phone}</li>}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
