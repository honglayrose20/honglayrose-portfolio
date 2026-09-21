import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Cross-Team Project Coordination',
    company: 'DRTIM LTD',
    period: '2025 – Present',
    description: 'Coordinated developers, designers, content teams, and stakeholders to define priorities, requirements, timelines, and deliverables for mobile and web product features.',
    tags: ['Jira', 'Confluence', 'Agile', 'Scrum', 'Roadmapping'],
    color: 'from-orange-100 to-amber-50',
    accent: 'bg-orange-500',
    metric: '3 teams',
    metricLabel: 'coordinated',
  },
  {
    title: 'Healthcare Product Delivery',
    company: 'Corewood Care LLC',
    period: '2023 – 2025',
    description: 'Managed cross-functional team of 8 developers and designers delivering a patient portal and care management dashboard. Implemented agile methodologies that reduced delivery time by 25%.',
    tags: ['Agile', 'Scrum', 'Jira', 'React Native', 'TypeScript'],
    color: 'from-amber-100 to-yellow-50',
    accent: 'bg-amber-500',
    metric: '25%',
    metricLabel: 'faster delivery',
  },
  {
    title: 'Workflow Automation & Business Analysis',
    company: 'Creative Intelligence UK',
    period: '2021 – 2024',
    description: 'Analysed business processes for 15+ clients, identifying efficiency improvements. Designed and delivered 20+ custom software solutions, increasing average client operational efficiency by 35%.',
    tags: ['Azure DevOps', 'Power BI', 'SQL', 'Business Analysis', 'Stakeholder Management'],
    color: 'from-yellow-100 to-orange-50',
    accent: 'bg-yellow-600',
    metric: '35%',
    metricLabel: 'efficiency gain',
  },
  {
    title: 'Automotive Software Project Management',
    company: 'Matrickz GmbH',
    period: '2020 – 2022',
    description: 'Managed automotive software projects worth €2M+ budget. Coordinated international teams across 4 time zones and reduced delivery times by 30% through process optimisation.',
    tags: ['JIRA', 'Confluence', 'Automotive SPICE', 'Jenkins', 'Git'],
    color: 'from-orange-50 to-yellow-100',
    accent: 'bg-orange-600',
    metric: '€2M+',
    metricLabel: 'budget managed',
  },
  {
    title: 'Employee Benefits Platform Operations',
    company: 'Mednefits Pte Ltd',
    period: '2017 – 2020',
    description: 'Scaled the platform to serve 50,000+ employees across 200+ companies. Led an operations team of 12 members and improved customer satisfaction from 3.2 to 4.8/5.0.',
    tags: ['Salesforce', 'Zendesk', 'Tableau', 'Operations', 'B2B'],
    color: 'from-amber-50 to-orange-100',
    accent: 'bg-amber-600',
    metric: '50K+',
    metricLabel: 'employees served',
  },
  {
    title: 'App Project Portfolio Management',
    company: 'Dailypress Pty Ltd',
    period: '2019 – 2020',
    description: 'Forecasted and tracked progress for 16 simultaneous app projects through weekly management reports and stakeholder updates, ensuring on-time delivery across the portfolio.',
    tags: ['Scrum', 'Kanban', 'Reporting', 'Mobile Apps', 'Stakeholders'],
    color: 'from-yellow-50 to-amber-100',
    accent: 'bg-yellow-500',
    metric: '16',
    metricLabel: 'projects managed',
  },
];

export function ProjectManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="text-sm text-gray-900 font-medium">Honglay Rose Lim — Project Management</div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            Project Management
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Project Management Works</h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed">
            9+ years of managing cross-functional teams, global product delivery, and complex stakeholder environments across healthcare, fintech, automotive, and enterprise software.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { value: '9+', label: 'Years Experience' },
              { value: '40+', label: 'Products Shipped' },
              { value: '€2M+', label: 'Budget Managed' },
              { value: '50K+', label: 'Users Impacted' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-orange-500">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-gradient-to-br ${project.color} p-6 flex flex-col gap-4 border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full shrink-0 ${project.accent}`}>
                  {project.company}
                </span>
                <span className="text-xs text-gray-400 shrink-0">{project.period}</span>
              </div>

              {/* Metric */}
              <div>
                <p className="text-3xl font-bold text-gray-900">{project.metric}</p>
                <p className="text-xs text-gray-500">{project.metricLabel}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-orange-100">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs text-gray-700 bg-white/70 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-orange-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-3">Let's work together</h2>
          <p className="text-orange-100 mb-8 text-lg">Book a session and I'll walk you through my project management approach.</p>
          <Button
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 rounded-xl"
            onClick={() => window.open('https://calendly.com/limhonglayrose/initial-interview', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Book an Interview Session
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Honglay Rose Lim. All rights reserved.
      </div>
    </div>
  );
}
