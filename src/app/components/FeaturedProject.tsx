const exampleImage = '';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedProject() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm mb-6">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
            Featured Project
          </div>
          <h2 className="text-3xl text-foreground mb-4">RecruitWrite.ai</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An AI-powered platform that helps HR professionals craft perfect job descriptions in seconds, 
            streamlining the recruitment process and improving hiring efficiency.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="aspect-[16/10] w-full">
            <img 
              src={exampleImage}
              alt="RecruitWrite.ai - Craft perfect Job Descriptions in Seconds"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-card-foreground mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  RecruitWrite.ai revolutionizes the hiring process by leveraging artificial intelligence 
                  to generate compelling, comprehensive job descriptions. The platform reduces administrative 
                  overhead and ensures consistent, professional job postings across all positions.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Key Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        AI-powered job description generation
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        Customizable templates and frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        Integration with major job boards
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        Performance analytics and optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-card-foreground mb-4">Technical Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">My Role</h4>
                    <p className="text-sm text-muted-foreground">
                      Led the UI/UX design and product strategy, focusing on creating an intuitive 
                      interface that simplifies complex AI interactions for HR professionals.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        React
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        AI/ML Integration
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        Figma
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced job description creation time by 80% and improved posting 
                      quality consistency across enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-card-foreground">Status:</span> Live Product
              </div>
              <Button variant="outline" size="sm" className="group">
                View Case Study
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}