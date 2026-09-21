import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MonitorIADashboard from "@/components/MonitorIADashboard";
import monitorIADesktop from "@/assets/projects/monitor-ia-desktop.png";
import portfolioSiteDesktop from "@/assets/projects/portfolio-site-desktop.png";
import roccoPortfolioDesktop from "@/assets/projects/rocco-portfolio-desktop.png";

type Category = "Automação" | "IA" | "Desenvolvimento Web";
type Filter = "Todos" | Category;

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  categories: Category[];
  technologies: string[];
  area: string;
  image: string;
  previewImage?: string;
  desktopApp?: boolean;
  github: string;
  live?: string;
  featured?: boolean;
};

const filters: Filter[] = ["Todos", "Automação", "IA", "Desenvolvimento Web"];

const projects: Project[] = [
  {
    id: 1,
    title: "MonitorIA",
    shortDescription: "Monitor inteligente guiado por visão computacional.",
    description:
      "TCC de um monitor ajustável controlado por reconhecimento de imagem, integrando visão computacional, inteligência artificial e hardware.",
    categories: ["IA", "Automação"],
    technologies: ["Python", "C++", "OpenCV"],
    area: "Visão Computacional",
    image: "linear-gradient(135deg, hsl(265 89% 40%) 0%, hsl(217 91% 40%) 100%)",
    previewImage: monitorIADesktop,
    github: "https://github.com/Lucas-Rocco/MonitorIA",
    desktopApp: true,
    featured: true,
  },
  {
    id: 2,
    title: "Rocco Portfolio",
    shortDescription: "Portfólio imersivo com identidade espacial.",
    description:
      "Meu portfólio pessoal com tema espacial, órbitas de habilidades, superfícies translúcidas e apresentações interativas dos projetos.",
    categories: ["Desenvolvimento Web"],
    technologies: ["TypeScript", "React", "Tailwind", "Vite"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(217 91% 40%) 0%, hsl(180 70% 35%) 100%)",
    previewImage: roccoPortfolioDesktop,
    github: "https://github.com/Lucas-Rocco/roccoportfolio",
    live: "https://roccoportfolio.lovable.app",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Site",
    shortDescription: "Site pessoal construído do zero.",
    description:
      "Primeira versão do meu site pessoal, criada do zero para apresentar experiências e projetos com uma interface direta e responsiva.",
    categories: ["Desenvolvimento Web"],
    technologies: ["HTML", "CSS", "JavaScript"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(240 60% 35%) 0%, hsl(265 89% 50%) 100%)",
    previewImage: portfolioSiteDesktop,
    github: "https://github.com/Lucas-Rocco/Portfolio-Site",
    live: "https://lucas-rocco.github.io/Portfolio-Site/",
    featured: true,
  },
  {
    id: 4,
    title: "Interfatec 2025",
    shortDescription: "Automação criada para a Interfatec.",
    description:
      "Projeto desenvolvido para a feira Interfatec 2025, com foco em automação e apresentação eficiente de dados.",
    categories: ["Automação"],
    technologies: ["Python", "Automação"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(265 89% 50%) 0%, hsl(300 70% 40%) 100%)",
    github: "https://github.com/Lucas-Rocco/Interfatec-2025",
  },
  {
    id: 5,
    title: "Organizador",
    shortDescription: "Arquivos organizados de forma automática.",
    description:
      "Organizador de arquivos que classifica e move documentos automaticamente por tipo e data, reduzindo tarefas manuais repetitivas.",
    categories: ["Automação"],
    technologies: ["Python", "Scripts"],
    area: "Produtividade",
    image: "linear-gradient(135deg, hsl(200 80% 40%) 0%, hsl(217 91% 50%) 100%)",
    github: "https://github.com/Lucas-Rocco/organizador",
  },
  {
    id: 6,
    title: "To-Do List",
    shortDescription: "Gestão simples e objetiva de tarefas.",
    description:
      "Aplicação de lista de tarefas criada para praticar estruturas de dados, organização de rotinas e persistência local.",
    categories: ["Automação"],
    technologies: ["Python", "CLI"],
    area: "Produtividade",
    image: "linear-gradient(135deg, hsl(220 60% 30%) 0%, hsl(265 60% 45%) 100%)",
    github: "https://github.com/Lucas-Rocco/To-Do-list",
  },
  {
    id: 7,
    title: "Chatbot",
    shortDescription: "Conversas inteligentes integradas a APIs.",
    description:
      "Protótipo de chatbot que explora fluxos de conversa e integração com APIs de linguagem para respostas contextualizadas.",
    categories: ["IA"],
    technologies: ["Python", "LLM", "APIs"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(280 70% 35%) 0%, hsl(217 91% 45%) 100%)",
    github: "https://github.com/Lucas-Rocco/CHATBOT",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "Todos"
        ? projects
        : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedProject && !previewProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewProject(null);
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, previewProject]);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projetos no <span className="text-gradient">GitHub</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos reais do meu GitHub, entre inteligência artificial, automação e desenvolvimento web.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={activeFilter === filter ? "default" : "outline"}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 transition-all duration-300",
                activeFilter !== filter && "bg-card/40 text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fade-in_300ms_ease-out]"
          aria-live="polite"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              tabIndex={0}
              onMouseEnter={() => {
                if ((project.live || project.desktopApp) && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                  setPreviewProject(project);
                }
              }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className={cn(
                "group relative min-h-[430px] cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm",
                "transition-[transform,border-color,box-shadow] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "md:hover:z-20 md:hover:scale-[1.03] md:hover:border-primary/40 md:hover:shadow-[var(--shadow-glow)]",
                project.featured && "border-primary/25",
              )}
              aria-label={`Abrir detalhes do projeto ${project.title}`}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-48 overflow-hidden transition-[filter] duration-300 group-hover:contrast-125",
                  project.featured && "md:h-52",
                )}
                style={{ background: project.image }}
              >
                {project.previewImage && (
                  <img
                    src={project.previewImage}
                    alt={`Tela desktop do projeto ${project.title}`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-background/20 transition-colors duration-300 group-hover:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
                {!project.previewImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary-foreground/20 uppercase tracking-widest">
                      {project.title}
                    </span>
                  </div>
                )}
                {project.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                    <Star className="h-3 w-3" aria-hidden="true" /> Destaque
                  </span>
                )}
              </div>

              <div className={cn("absolute inset-x-0 bottom-0 z-10 p-6", project.featured && "md:p-7")}>
                <div className="mb-3 flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-primary">
                  {project.categories.map((category, index) => (
                    <span key={category}>
                      {category}{index < project.categories.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.shortDescription}</p>

                <div className="mt-4 max-h-0 translate-y-3 overflow-hidden opacity-0 transition-all duration-300 ease-out md:group-hover:max-h-44 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:max-h-44 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground/80">{project.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-secondary/80 px-2.5 py-1 text-xs text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">
                      Área: <span className="text-foreground/80">{project.area}</span>
                    </span>
                    <Button type="button" size="sm" onClick={() => setSelectedProject(project)}>
                      Ver projeto <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between md:hidden">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span key={technology} className="text-xs text-muted-foreground">{technology}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full bg-card/40 border-primary/30">
            <a href="https://github.com/Lucas-Rocco" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>

      {previewProject && (previewProject.live || previewProject.desktopApp) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-md animate-[fade-in_300ms_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview interativo de ${previewProject.title}`}
        >
          <div className="h-[min(700px,88vh)] w-[min(1200px,94vw)] overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-float)] animate-[scale-in_300ms_ease-out]">
            <div className="flex h-9 items-center justify-between bg-muted px-3">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <span className="max-w-[60%] truncate text-xs text-muted-foreground">
                {previewProject.title}
              </span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-7 w-7 rounded-full"
                onClick={() => setPreviewProject(null)}
                aria-label="Fechar preview interativo"
                autoFocus
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="h-[calc(100%_-_2.25rem)] w-full bg-background">
              {previewProject.desktopApp ? (
                <MonitorIADashboard />
              ) : previewProject.live ? (
                <iframe
                  src={previewProject.live}
                  className="h-full w-full bg-background"
                  title={`Preview interativo de ${previewProject.title}`}
                />
              ) : null}
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-md animate-[fade-in_250ms_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-float)] md:grid-cols-[1.15fr_0.85fr]">
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute right-4 top-4 z-20 rounded-full"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar detalhes do projeto"
              autoFocus
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="relative min-h-64 overflow-hidden md:min-h-[520px]" style={{ background: selectedProject.image }}>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />
              <span className="absolute bottom-8 left-8 font-display text-3xl font-bold text-primary-foreground/30 uppercase tracking-widest">
                {selectedProject.title}
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedProject.categories.map((category) => (
                  <span key={category} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {category}
                  </span>
                ))}
              </div>
              <h3 id="project-dialog-title" className="font-display text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selectedProject.description}</p>

              <div className="mt-7">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Tecnologias</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Área</p>
                <p className="mt-2 text-sm text-foreground">{selectedProject.area}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                {selectedProject.live && (
                  <Button asChild variant="outline">
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;