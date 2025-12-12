import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nova Platform",
    description: "Plataforma SaaS completa para gestão de projetos com IA integrada para automação de tarefas.",
    tags: ["React", "Node.js", "PostgreSQL", "OpenAI"],
    image: "linear-gradient(135deg, hsl(265 89% 40%) 0%, hsl(217 91% 40%) 100%)",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Cosmos E-commerce",
    description: "Loja virtual premium com experiência de compra imersiva e checkout otimizado.",
    tags: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    image: "linear-gradient(135deg, hsl(217 91% 40%) 0%, hsl(180 70% 35%) 100%)",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Stellar Dashboard",
    description: "Dashboard analítico em tempo real com visualizações de dados interativas.",
    tags: ["TypeScript", "D3.js", "WebSocket", "Redis"],
    image: "linear-gradient(135deg, hsl(240 60% 35%) 0%, hsl(265 89% 50%) 100%)",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Nebula App",
    description: "Aplicativo mobile-first para meditação e bem-estar com trilhas sonoras personalizadas.",
    tags: ["React Native", "Firebase", "Expo", "Audio API"],
    image: "linear-gradient(135deg, hsl(265 89% 50%) 0%, hsl(300 70% 40%) 100%)",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Orbit CRM",
    description: "Sistema CRM inteligente com pipeline visual e automações de vendas.",
    tags: ["Vue.js", "GraphQL", "MongoDB", "Docker"],
    image: "linear-gradient(135deg, hsl(200 80% 40%) 0%, hsl(217 91% 50%) 100%)",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Galaxy Blog",
    description: "Plataforma de blog minimalista com editor markdown e SEO otimizado.",
    tags: ["Astro", "MDX", "Cloudflare", "Vercel"],
    image: "linear-gradient(135deg, hsl(220 60% 30%) 0%, hsl(265 60% 45%) 100%)",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projetos <span className="text-gradient">Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando 
            versatilidade e atenção aos detalhes.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-background/90 hover:bg-background transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 rounded-full bg-background/90 hover:bg-background transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
