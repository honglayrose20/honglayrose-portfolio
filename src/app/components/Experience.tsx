import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';


const experiences = [
  {
    company: 'DRTIM LTD',
    period: 'January 2025 - Present',
    description: 'DRTIM LTD is a United Kingdom-based company where I design intuitive UI/UX experiences and manage projects bridging design and development teams.',
    roles: ['UX Designer', 'Project Manager'],
    expandedContent: {
      achievements: [
        'Design intuitive UI/UX experiences and interactive prototypes for mobile and web features, translating business requirements and stakeholder feedback into developer-ready designs.',
        'Coordinate with developers, designers, content teams, and stakeholders to define priorities, requirements, timelines, and deliverables.'
      ],
      technologies: ['Figma', 'Prototyping', 'Jira', 'Confluence', 'Agile'],
      projects: [
        {
          name: 'Mobile & Web Feature Design',
          description: 'End-to-end UI/UX design for mobile and web features, from wireframes to developer-ready prototypes.'
        },
        {
          name: 'Cross-Team Project Coordination',
          description: 'Defining priorities, requirements, timelines, and deliverables across developers, designers, and content teams.'
        }
      ]
    }
  },
  {
    company: 'Corewood Care LLC',
    period: 'March 2023 - May 2025',
    description: 'At Corewood Care, our mission is to improve the way health is managed, allowing our clients to thrive and live gracefully. From household duties to skilled care, we provide home care and care management services.',
    roles: ['UI/UX', 'Project manager'],
    expandedContent: {
      achievements: [
        'Led design system overhaul that improved user satisfaction by 40%',
        'Managed cross-functional team of 8 developers and designers',
        'Implemented agile methodologies reducing project delivery time by 25%'
      ],
      technologies: ['Figma', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Jira'],
      projects: [
        {
          name: 'Patient Portal Redesign',
          description: 'Complete redesign of patient portal improving accessibility and user experience'
        },
        {
          name: 'Care Management Dashboard',
          description: 'Administrative dashboard for care coordinators to manage patient cases'
        }
      ]
    }
  },
  {
    company: 'Creative Intelligence UK',
    period: 'March 2021 - Oct 2024',
    description: 'CIUK swiftly identifies workflow challenges, offering tailored technical solutions to streamline and scale businesses.',
    roles: ['UI/UX', 'Project manager', 'Business Analyst'],
    expandedContent: {
      achievements: [
        'Analyzed business processes for 15+ clients, identifying efficiency improvements',
        'Designed and delivered 20+ custom software solutions',
        'Increased client operational efficiency by average of 35%'
      ],
      technologies: ['Sketch', 'InVision', 'Azure DevOps', 'Power BI', 'SQL'],
      projects: [
        {
          name: 'Workflow Automation Platform',
          description: 'Enterprise solution for automating business processes across multiple departments'
        },
        {
          name: 'Client Analytics Dashboard',
          description: 'Real-time analytics platform for tracking business KPIs and performance metrics'
        }
      ]
    }
  },
  {
    company: 'University of Science and Technology of Southern Ph.',
    period: 'July 2020 - January 2024',
    description: 'The University of Science and Technology of Southern Philippines (USTP) is a state university established in Cagayan de Oro City, Misamis Oriental and the Misamis Oriental',
    roles: ['Part-time', 'Instructor', 'Teacher'],
    expandedContent: {
      achievements: [
        'Taught UI/UX Design, Project Management, and Mobile Development to 200+ students',
        'Developed curriculum for modern design methodologies',
        'Mentored students in capstone projects with 95% success rate'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Miro', 'Google Classroom'],
      projects: [
        {
          name: 'Student Portfolio Platform',
          description: 'Online platform for students to showcase their design work and projects'
        },
        {
          name: 'Learning Management System',
          description: 'Custom LMS for design courses with interactive assignments and feedback'
        }
      ]
    }
  },
  {
    company: 'Matrickz GmbH',
    period: 'February 2020 - March 2022',
    description: 'Matrickz GmbH is a Munich based software company specialized in automotive embedded software development, testing, integration and consulting.',
    roles: ['Project manager', 'CEO Assistant'],
    expandedContent: {
      achievements: [
        'Managed automotive software projects worth €2M+ budget',
        'Coordinated international teams across 4 different time zones',
        'Reduced project delivery times by 30% through process optimization'
      ],
      technologies: ['JIRA', 'Confluence', 'Git', 'Jenkins', 'Automotive SPICE'],
      projects: [
        {
          name: 'Embedded Testing Framework',
          description: 'Automated testing solution for automotive embedded systems'
        },
        {
          name: 'Project Management Portal',
          description: 'Internal tool for tracking project progress and resource allocation'
        }
      ]
    }
  },
  {
    company: 'Mednefits Pte Ltd',
    period: 'June 2017 - May 2020',
    description: 'Mednefits is a B2B employee medical benefits platform that makes it easier for businesses to take care of their employees with automated, affordable, and accessible benefits.',
    roles: ['Project manager', 'Operation Manager'],
    expandedContent: {
      achievements: [
        'Scaled platform to serve 50,000+ employees across 200+ companies',
        'Led operations team of 12 members across multiple departments',
        'Improved customer satisfaction scores from 3.2 to 4.8/5.0'
      ],
      technologies: ['Salesforce', 'Zendesk', 'Tableau', 'Slack', 'Google Analytics'],
      projects: [
        {
          name: 'Benefits Management Platform',
          description: 'Enterprise platform for managing employee medical benefits and claims'
        },
        {
          name: 'Mobile Health App',
          description: 'Employee-facing mobile app for accessing medical benefits and services'
        }
      ]
    }
  },
  {
    company: 'Upcode Academy SG',
    period: 'August 2017 - May 2018',
    description: 'Designed banners, social media ads, event posters, company brochures, and logos as a Graphic Designer.',
    roles: ['Part-Time', 'Graphic Designer'],
    expandedContent: {
      achievements: [
        'Created 100+ marketing materials increasing engagement by 60%',
        'Established brand guidelines and visual identity system',
        'Designed materials for 15+ major events and campaigns'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
      projects: [
        {
          name: 'Brand Identity System',
          description: 'Complete brand redesign including logo, colors, and typography guidelines'
        },
        {
          name: 'Marketing Campaign Materials',
          description: 'Comprehensive marketing materials for coding bootcamp enrollment campaigns'
        }
      ]
    }
  },
  {
    company: 'Edufarm Learning Centre',
    period: 'November 2016 - April 2017',
    description: 'Designed banners, social media ads, event posters, company brochures, and logos as a Graphic Designer.',
    roles: ['Part-Time', 'Graphic Designer'],
    expandedContent: {
      achievements: [
        'Redesigned learning center branding increasing enrollment by 25%',
        'Created educational materials for 10+ courses',
        'Developed social media strategy increasing followers by 150%'
      ],
      technologies: ['Adobe Creative Suite', 'Sketch', 'Social Media Tools'],
      projects: [
        {
          name: 'Educational Material Design',
          description: 'Interactive learning materials and course handbooks for various subjects'
        },
        {
          name: 'Digital Marketing Assets',
          description: 'Social media campaigns and digital advertisements for course promotion'
        }
      ]
    }
  }
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
            <span className="text-orange-600 font-medium">Experiences</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Work Experience
          </h2>
          <p className="text-gray-900 leading-relaxed mb-6">
            With over 9 years in the software development industry, I've had the
            opportunity to work on a diverse range of projects in both design and
            management across global teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              {/* Main Experience Card */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Company and Date */}
                  <div className="lg:col-span-3">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{exp.company}</h3>
                    <p className="text-gray-900 text-sm flex items-center">
                      <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                      {exp.period}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <div className="lg:col-span-6">
                    <p className="text-gray-900 leading-relaxed">{exp.description}</p>
                  </div>
                  
                  {/* Roles and Arrow */}
                  <div className="lg:col-span-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exp.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                    
                    <div className="ml-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="border-t border-orange-200 p-6 bg-white animate-in slide-in-from-top-2 duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Details */}
                    <div className="space-y-6">
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.expandedContent.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-900 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.expandedContent.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Projects */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Notable Projects</h4>
                      <div className="space-y-4">
                        {exp.expandedContent.projects.map((project, projIndex) => (
                          <div key={projIndex} className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-1">{project.name}</h5>
                              <p className="text-gray-900 text-sm leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}