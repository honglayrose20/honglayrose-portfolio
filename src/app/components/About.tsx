import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight, Mail } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import alwaysLearningPhoto from '../../imports/IMG_6002.jpeg';

export function About() {
  const skills = [
    'UI/UX Design', 'Project Management', 'Mobile Development', 'User Research', 'Prototyping',
    'Design Systems', 'Agile Methodology', 'Stakeholder Management', 'Data Analysis'
  ];

  const highlights = [
    'Led cross-functional teams in delivering 15+ successful product launches',
    'Improved user satisfaction by 40% through data-driven design decisions',
    'Managed projects with budgets exceeding $2M and timelines up to 18 months',
    'Expertise in both B2B and B2C product development'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-900">
            Passionate about creating meaningful digital experiences that solve real problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <ImageWithFallback
              src={alwaysLearningPhoto}
              alt="Honglay Rose Lim"
              className="w-full h-64 object-cover rounded-xl mb-6"
              style={{ objectPosition: '50% 30%' }}
            />

            <p className="text-gray-900 mb-6 leading-relaxed">
              With over 9 years of experience in project management, mobile development, and UI/UX design, I've had the privilege of working with diverse teams and organizations to bring innovative digital solutions to life. My approach combines user-centered design principles with strategic business thinking to create products that not only look great but also drive results.
            </p>

            <p className="text-gray-900 mb-8 leading-relaxed">
              I believe in the power of collaboration, continuous learning, and iterative improvement.
              Whether I'm conducting user research, designing prototypes, or managing project timelines,
              I always keep the end user at the center of every decision.
            </p>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-900 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => window.open('https://calendly.com/limhonglayrose/initial-interview', '_blank')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium cursor-pointer"
              >
                Contact Me
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}