import { ArrowLeft, ExternalLink, Figma } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Patient Portal Redesign',
    category: 'UI/UX Design',
    company: 'Corewood Care LLC',
    description: 'Complete redesign of a patient portal focused on accessibility and ease of use for home care clients and coordinators.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Healthcare'],
    color: 'from-orange-100 to-yellow-50',
    accent: 'bg-orange-500',
  },
  {
    title: 'Care Management Dashboard',
    category: 'UI/UX Design',
    company: 'Corewood Care LLC',
    description: 'An administrative dashboard for care coordinators to manage patient cases, schedules, and team assignments.',
    tags: ['Figma', 'Dashboard', 'Data Visualization', 'Agile'],
    color: 'from-yellow-100 to-orange-50',
    accent: 'bg-yellow-500',
  },
  {
    title: 'Mobile & Web Feature Design',
    category: 'UI/UX Design',
    company: 'DRTIM LTD',
    description: 'End-to-end UI/UX design for mobile and web features — from wireframes to interactive, developer-ready prototypes.',
    tags: ['Figma', 'Mobile', 'Web', 'Prototyping'],
    color: 'from-orange-50 to-yellow-100',
    accent: 'bg-orange-600',
  },
  {
    title: 'Workflow Automation Platform',
    category: 'Project Management & Design',
    company: 'Creative Intelligence UK',
    description: 'Enterprise solution for automating business processes across multiple departments, reducing manual workload by 35%.',
    tags: ['UI/UX', 'Business Analysis', 'Agile', 'Enterprise'],
    color: 'from-yellow-50 to-orange-100',
    accent: 'bg-yellow-600',
  },
  {
    title: 'App Project Management',
    category: 'Project Management',
    company: 'Dailypress Pty Ltd',
    description: 'Forecasted and tracked progress for 16 simultaneous app projects through weekly management reports and stakeholder updates.',
    tags: ['Scrum', 'Kanban', 'Reporting', 'Mobile Apps'],
    color: 'from-orange-100 to-yellow-50',
    accent: 'bg-orange-500',
  },
  {
    title: 'Benefits Management Platform',
    category: 'UI/UX & Operations',
    company: 'Mednefits Pte Ltd',
    description: 'Employee-facing platform for managing medical benefits and claims, scaled to serve 50,000+ employees across 200+ companies.',
    tags: ['Product Design', 'B2B', 'Operations', 'Scaling'],
    color: 'from-yellow-100 to-orange-50',
    accent: 'bg-yellow-500',
  },
];

export function DesignWorks() {
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
          <div className="text-sm text-gray-900 font-medium">Honglay Rose Lim — Design Works</div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Figma className="w-4 h-4" />
            Design Portfolio
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">My Design Works</h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed">
            A collection of UI/UX projects, product designs, and project management work across healthcare, fintech, and enterprise software.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-gradient-to-br ${project.color} p-6 flex flex-col gap-4 border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${project.accent}`}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs text-gray-900 mb-1">{project.company}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-900 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-orange-100">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs text-gray-900 bg-white/70 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-3">Want to see more?</h2>
          <p className="text-orange-100 mb-8 text-lg">Book an interview session and I'll walk you through my full design process.</p>
          <Button
            className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl"
            onClick={() => window.open('https://calendly.com/limhonglayrose/initial-interview', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Book an Interview Session
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-8 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} Honglay Rose Lim. All rights reserved.
      </div>
    </div>
  );
}
