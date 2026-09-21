import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb, Users, Palette, TestTube, Rocket, BarChart3 } from 'lucide-react';

export function Process() {
  const designProcess = [
    {
      icon: Users,
      title: 'User Research',
      description: 'Understanding user needs through interviews, surveys, and behavioral analysis'
    },
    {
      icon: Lightbulb,
      title: 'Ideation',
      description: 'Brainstorming solutions and creating user journey maps and personas'
    },
    {
      icon: Palette,
      title: 'Design & Prototype',
      description: 'Creating wireframes, mockups, and interactive prototypes'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'User testing, gathering feedback, and iterating on designs'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Coordinating with development teams for successful product launch'
    },
    {
      icon: BarChart3,
      title: 'Measure & Optimize',
      description: 'Analyzing metrics and continuously improving the user experience'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Process</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            My systematic approach to creating user-centered designs that solve real problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProcess.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-orange-100">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}