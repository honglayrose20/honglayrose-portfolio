import { ArrowLeft, ExternalLink, Figma, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import patientPortalDashboard from '../../imports/patient-portal-dashboard.png';
import patientPortalLanding from '../../imports/patient-portal-landing.jpg';
import mobileWebPremium from '../../imports/mobile-web-premium.png';
import profinityMobile from '../../imports/profinity-mobile.png';
import workflowJiraBoard from '../../imports/workflow-jira-board.png';
import appProjectLanding from '../../imports/app-project-landing.png';
import appProjectWellness from '../../imports/app-project-wellness.png';
import appProjectPetprinted from '../../imports/app-project-petprinted.png';
import appProjectClubTweed from '../../imports/app-project-club-tweed.png';
import websiteCollection from '../../imports/design-collection-website.webp';
import mobileCollection from '../../imports/design-collection-mobile.webp';
import landingCollection from '../../imports/design-collection-landing.webp';
import logoCollection from '../../imports/design-collection-logos.webp';
import graphicCollection from '../../imports/design-collection-graphics.webp';

const designCollections = [
  { title: 'Other Design', description: 'A selection of website interfaces and dashboards designed around clear navigation, useful information, and each brand’s goals.', src: websiteCollection, enlarge: false, trimTop: 27 },
  { title: 'Mobile Designs', description: 'Mobile experiences with intuitive navigation, thoughtful interactions, and a consistent visual identity.', src: mobileCollection, enlarge: false, trimTop: 24 },
  { title: 'Landing Page Designs', description: 'Landing pages for lead generation, product introductions, and clear calls to action.', src: landingCollection, enlarge: false, trimTop: 24 },
  { title: 'Logofolio', description: 'Logo concepts and brand identity work for Upcode Academy and Mednefits, from wordmarks to app icons.', src: logoCollection, enlarge: false, trimTop: 16 },
  { title: 'Graphic Designs', description: 'Banners, social media artwork, promotional designs, and restaurant menus.', src: graphicCollection, enlarge: false, trimTop: 14 },
];

const projects = [
  {
    title: 'Patient Portal Redesign',
    images: [
      { src: patientPortalDashboard, alt: 'RecruitWrite AI dashboard design' },
      { src: patientPortalLanding, alt: 'RecruitWrite AI landing page design' },
    ],
    category: 'UI/UX Design',
    company: 'Corewood Care LLC',
    description: 'Complete redesign of a patient portal focused on accessibility and ease of use for home care clients and coordinators.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Healthcare'],
    color: 'from-burgundy-100 to-burgundy-50',
    accent: 'bg-burgundy-500',
  },
  {
    title: 'Mobile & Web Feature Design',
    availability: [
      { store: 'Apple App Store', name: 'Profinity: Aesthetics Training' },
      { store: 'Google Play Store', name: 'Profinity' },
    ],
    images: [
      { src: mobileWebPremium, alt: 'PROfinity premium community web design' },
      { src: profinityMobile, alt: 'Profinity mobile app community feed design' },
    ],
    category: 'UI/UX Design',
    company: 'DRTIM LTD',
    description: 'End-to-end UI/UX design for mobile and web features — from wireframes to interactive, developer-ready prototypes.',
    tags: ['Figma', 'Mobile', 'Web', 'Prototyping'],
    color: 'from-burgundy-50 to-burgundy-100',
    accent: 'bg-burgundy-600',
  },
  {
    title: 'Workflow Automation Platform',
    images: [
      { src: workflowJiraBoard, alt: 'Jira board showing task tracking across To Do, In Progress, Code Review, and Done' },
    ],
    category: 'Project Management & Design',
    company: 'Creative Intelligence UK',
    description: 'Enterprise solution for automating business processes across multiple departments, reducing manual workload by 35%. Managed project tracking using Jira boards and the Scrum Agile method, with Kanban boards for project and task delegation.',
    tags: ['UI/UX', 'Business Analysis', 'Jira', 'Scrum', 'Agile', 'Kanban', 'Project Management', 'Enterprise'],
    color: 'from-burgundy-50 to-burgundy-100',
    accent: 'bg-burgundy-600',
  },
  {
    title: 'App Project Management',
    images: [
      { src: appProjectLanding, alt: 'Intellect Institute landing page design' },
      { src: appProjectWellness, alt: 'Wellness mobile app home screen design' },
      { src: appProjectPetprinted, alt: 'Petprinted AI mobile portrait style selection design' },
      { src: appProjectClubTweed, alt: 'Club Tweed mobile app home screen design' },
    ],
    category: 'Project Management',
    company: 'Dailypress Pty Ltd',
    description: 'Forecasted and tracked progress for 16 simultaneous app projects through weekly management reports and stakeholder updates.',
    tags: ['Scrum', 'Kanban', 'Reporting', 'Mobile Apps'],
    color: 'from-burgundy-100 to-burgundy-50',
    accent: 'bg-burgundy-500',
  },
  {
    title: 'Benefits Management Platform',
    category: 'UI/UX & Operations',
    company: 'Mednefits Pte Ltd',
    description: 'Employee-facing platform for managing medical benefits and claims, scaled to serve 50,000+ employees across 200+ companies.',
    tags: ['Product Design', 'B2B', 'Operations', 'Scaling'],
    color: 'from-burgundy-100 to-burgundy-50',
    accent: 'bg-burgundy-500',
  },
];

export function DesignWorks() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Dialog.Root open={!!selectedImage} onOpenChange={(open) => { if (!open) setSelectedImage(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80" />
          <Dialog.Content aria-describedby={undefined} className="fixed inset-4 z-[101] flex flex-col rounded-2xl bg-white shadow-xl outline-none">
            <div className="flex items-center justify-between gap-3 border-b p-4">
              <Dialog.Title className="text-sm font-semibold">{selectedImage?.alt}</Dialog.Title>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setZoomed((value) => !value)} className="flex items-center gap-2 text-sm text-burgundy-600" aria-label={zoomed ? 'Zoom out' : 'Zoom in'}>
                  {zoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                  {zoomed ? 'Fit width' : 'Zoom in'}
                </button>
                <Dialog.Close aria-label="Close image" className="rounded-lg p-2 hover:bg-gray-100"><X className="w-5 h-5" /></Dialog.Close>
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-auto p-3 bg-gray-100">
              {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} className={zoomed ? 'w-[180%] max-w-none h-auto' : 'w-full h-auto'} />}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="border-burgundy-200 text-burgundy-600 hover:bg-burgundy-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="text-sm text-gray-900 font-medium">Honglay Rose Lim — Design Works</div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-burgundy-50 via-burgundy-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
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
              className={`rounded-2xl bg-gradient-to-br ${project.color} p-6 flex flex-col gap-4 border border-burgundy-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${project.accent}`}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              {project.images && (
                <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                  {project.images.map((image) => (
                    <button type="button" key={image.src} onClick={() => { setSelectedImage(image); setZoomed(false); }} className="overflow-hidden rounded-lg border border-burgundy-200 bg-white cursor-zoom-in" aria-label={`Enlarge ${image.alt}`}>
                      <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-36 object-cover object-top" />
                      <span className="block py-2 text-xs font-medium text-burgundy-600">Click to enlarge</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs text-gray-900 mb-1">{project.company}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-900 leading-relaxed">{project.description}</p>
                {project.availability && (
                  <div className="mt-4 rounded-xl bg-white/80 p-3">
                    <p className="text-sm font-semibold text-burgundy-600 mb-2">Download Profinity</p>
                    {project.availability.map((app) => (
                      <p key={app.store} className="text-xs text-gray-800 leading-relaxed mt-1">
                        <span className="font-semibold">{app.store}:</span> {app.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-burgundy-100">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs text-gray-900 bg-white/70 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 space-y-16">
          {designCollections.map((collection) => (
            <section key={collection.title} className={collection.enlarge === false ? 'rounded-3xl border border-burgundy-100 bg-gradient-to-br from-burgundy-50 via-white to-burgundy-50 p-6 sm:p-10' : 'border-t border-burgundy-100 pt-10'}>
              {collection.enlarge === false && <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-burgundy-600">Design Portfolio</p>}
              <h2 className={`text-3xl font-bold ${collection.enlarge === false ? 'text-burgundy-600' : 'text-gray-900'}`}>{collection.title}</h2>
              <p className="mt-3 mb-6 max-w-3xl text-gray-700 leading-relaxed">{collection.description}</p>
              {collection.enlarge === false ? (
                <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-burgundy-100 bg-white shadow-sm">
                  {collection.src === logoCollection ? (
                    <div className="space-y-6">
                      <div className="overflow-hidden" style={{ aspectRatio: '1600 / 744' }}>
                        <img src={collection.src} alt="Upcode Academy logo concepts" loading="lazy" className="w-full h-auto" style={{ marginTop: '-16%' }} />
                      </div>
                      <div className="overflow-hidden">
                        <img src={collection.src} alt="Mednefits logo and app icon concepts" loading="lazy" className="w-full h-auto" style={{ marginTop: '-112.5%' }} />
                      </div>
                    </div>
                  ) : (
                  <img src={collection.src} alt={`${collection.title} portfolio examples`} loading="lazy" className="w-full h-auto" style={collection.trimTop ? { marginTop: `-${collection.trimTop}%` } : undefined} />
                  )}
                </div>
              ) : (
              <button
                type="button"
                onClick={() => { setSelectedImage({ src: collection.src, alt: collection.title }); setZoomed(false); }}
                className="block w-full overflow-hidden rounded-2xl border border-burgundy-100 bg-gray-50 cursor-zoom-in"
                aria-label={`Enlarge ${collection.title}`}
              >
                <div className="max-h-[600px] overflow-hidden">
                  <img src={collection.src} alt={`${collection.title} portfolio examples`} loading="lazy" className="w-full h-auto" style={collection.trimTop ? { marginTop: `-${collection.trimTop}%` } : undefined} />
                </div>
                <span className="block bg-white py-3 text-sm font-medium text-burgundy-600">Click to enlarge and view the full collection</span>
              </button>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-burgundy-600 to-burgundy-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-3">Want to see more?</h2>
          <p className="text-burgundy-100 mb-8 text-lg">Book an interview session and I'll walk you through my full design process.</p>
          <Button
            className="bg-white text-burgundy-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl"
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
