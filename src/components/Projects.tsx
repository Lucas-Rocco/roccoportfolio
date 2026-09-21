import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MonitorIA",
    description:
      "TCC: monitor ajustável controlado por IA de reconhecimento de imagem, integrando visão computacional e hardware.",
    tags: ["Python", "C++", "Visão Computacional", "IA"],
    image: "linear-gradient(135deg, hsl(265 89% 40%) 0%, hsl(217 91% 40%) 100%)",
    github: "https://github.com/Lucas-Rocco/MonitorIA",
  },
  {
    id: 2,
    title: "Rocco Portfolio",
    description:
      "Meu portfólio pessoal com tema espacial: órbitas de habilidades, glassmorphism e previews interativos.",
    tags: ["TypeScript", "React", "Tailwind", "Vite"],
    image: "linear-gradient(135deg, hsl(217 91% 40%) 0%, hsl(180 70% 35%) 100%)",
    github: "https://github.com/Lucas-Rocco/roccoportfolio",
    live: "https://roccoportfolio.lovable.app",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description:
      "Primeira versão do meu site pessoal, construída do zero com HTML, CSS e JavaScript puro.",
    tags: ["CSS", "HTML", "JavaScript"],
    image: "linear-gradient(135deg, hsl(240 60% 35%) 0%, hsl(265 89% 50%) 100%)",
    github: "https://github.com/Lucas-Rocco/Portfolio-Site",
    live: "https://lucasrocco.github.io",
  },
  {
    id: 4,
    title: "Interfatec 2025",
    description:
      "Projeto desenvolvido em Python para a feira Interfatec 2025, com foco em automação e apresentação de dados.",
    tags: ["Python", "Automação"],
    image: "linear-gradient(135deg, hsl(265 89% 50%) 0%, hsl(300 70% 40%) 100%)",
    github: "https://github.com/Lucas-Rocco/Interfatec-2025",
  },
  {
    id: 5,
    title: "Organizador",
    description:
      "Organizador de arquivos em Python que classifica e move documentos automaticamente por tipo e data.",
    tags: ["Python", "Scripts", "Produtividade"],
    image: "linear-gradient(135deg, hsl(200 80% 40%) 0%, hsl(217 91% 50%) 100%)",
    github: "https://github.com/Lucas-Rocco/organizador",
  },
  {
    id: 6,
    title: "To-Do List",
    description:
      "Aplicação de lista de tarefas em Python criada para praticar estruturas de dados e persistência.",
    tags: ["Python", "CLI", "Estudos"],
    image: "linear-gradient(135deg, hsl(220 60% 30%) 0%, hsl(265 60% 45%) 100%)",
    github: "https://github.com/Lucas-Rocco/To-Do-list",
  },
  {
    id: 7,
    title: "Chatbot",
    description:
      "Protótipo de chatbot em Python explorando fluxos de conversa e integração com APIs de linguagem.",
    tags: ["Python", "Chatbot", "APIs"],
    image: "linear-gradient(135deg, hsl(280 70% 35%) 0%, hsl(217 91% 45%) 100%)",
    github: "https://github.com/Lucas-Rocco/CHATBOT",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const preview = projects.find((p) => p.id === hoveredProject);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projetos no <span className="text-gradient">GitHub</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos reais do meu GitHub. Passe o mouse nos que têm site online para ver o preview.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => project.live && setHoveredProject(project.id)}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/90 hover:bg-background transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/90 hover:bg-background transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
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

        <div className="text-center mt-12">
          <a
            href="https://github.com/Lucas-Rocco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-sm font-medium hover:bg-primary/20 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Ver todos os repositórios
          </a>
        </div>
      </div>

      {/* Floating Preview Window - Outside of cards */}
      {preview?.live && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            style={{ animation: "fade-in 0.3s ease-out" }}
          />

          {/* Preview Window */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ animation: "fade-in 0.3s ease-out" }}
          >
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ width: "1200px", height: "700px" }}
            >
              {/* Mac-style Header */}
              <div className="flex items-center px-3 py-2 bg-[#E8E8E8]">
                <div className="flex gap-2">
                  <button
                    onClick={() => setHoveredProject(null)}
                    className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all cursor-pointer"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
              </div>

              {/* Iframe */}
              <iframe
                src={preview.live}
                className="w-full bg-white"
                style={{ height: "calc(100% - 28px)" }}
                title={`Preview de ${preview.title}`}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
