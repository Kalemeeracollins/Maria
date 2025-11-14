import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content creation tool powered by advanced AI models with customizable templates and workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["TypeScript", "OpenAI", "Next.js", "Tailwind"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management platform with real-time updates, file sharing, and team analytics.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Firebase", "Material UI", "WebSockets"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for creative professionals with drag-and-drop interface and SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Vue.js", "Express", "MongoDB", "AWS"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      tags: ["React Native", "GraphQL", "PostgreSQL", "Docker"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with custom charts, reports, and predictive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "Python", "Redis"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              A showcase of my recent work, from concept to deployment. Each project represents
              a unique challenge and a creative solution.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover-lift hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="glass">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Like What You See?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                These are just a few examples. Let's discuss how I can help bring your ideas to life.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover-lift">
                Start a Conversation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
