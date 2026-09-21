export function Software() {
  const softwareCategories = [
    {
      title: "Design & Prototyping",
      icon: "🎨",
      tools: [
        { name: "Figma", description: "UI/UX Design & Prototyping" },
        { name: "Adobe XD", description: "User Experience Design" },
        { name: "Photoshop", description: "Image Editing & Design" },
        { name: "Illustrator", description: "Vector Graphics & Illustrations" }
      ]
    },
    {
      title: "Project Management",
      icon: "📊",
      tools: [
        { name: "ClickUp", description: "Task & Project Management" },
        { name: "Trello", description: "Kanban Board Organization" },
        { name: "HubSpot", description: "CRM & Customer Management" },
        { name: "MindMeister", description: "Mind Mapping & Planning" }
      ]
    },
    {
      title: "AI-Powered Tools",
      icon: "🤖",
      tools: [
        { name: "ChatGPT", description: "AI Assistant & Content Creation" },
        { name: "Claude", description: "AI Research & Analysis" },
        { name: "Midjourney", description: "AI Image Generation" },
        { name: "GitHub Copilot", description: "AI Code Assistant" }
      ]
    },
    {
      title: "Content & Media",
      icon: "🎥",
      tools: [
        { name: "Premiere Pro", description: "Video Editing & Production" },
        { name: "Dropbox", description: "Cloud Storage & Collaboration" },
        { name: "OmniGraffle", description: "Diagramming & Wireframing" },
        { name: "Stable Diffusion", description: "AI Image Creation" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm mb-6">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
            Tools & Software
          </div>
          <h2 className="text-3xl text-foreground mb-4">Professional Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential tools and platforms for design, project management, and AI-enhanced workflows
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {softwareCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card border border-border rounded-lg hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              {/* Category Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <h3 className="text-lg text-card-foreground">{category.title}</h3>
                </div>
              </div>
              
              {/* Tools List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="flex items-start gap-4 p-3 rounded-md hover:bg-accent transition-colors duration-150"
                    >
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary-foreground text-xs">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-card-foreground mb-1">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎨</span>
            </div>
            <h4 className="text-card-foreground mb-2">Design Excellence</h4>
            <p className="text-sm text-muted-foreground">Comprehensive visual design and prototyping capabilities</p>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="text-card-foreground mb-2">Efficient Workflow</h4>
            <p className="text-sm text-muted-foreground">Streamlined project management and collaboration</p>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🚀</span>
            </div>
            <h4 className="text-card-foreground mb-2">AI Integration</h4>
            <p className="text-sm text-muted-foreground">Cutting-edge AI tools for enhanced productivity</p>
          </div>
        </div>
      </div>
    </section>
  );
}