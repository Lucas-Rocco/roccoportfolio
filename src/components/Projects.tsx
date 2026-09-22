import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MonitorIADashboard from "@/components/MonitorIADashboard";
import monitorIADesktop from "@/assets/projects/monitor-ia-desktop.png";
import portfolioSiteDesktop from "@/assets/projects/portfolio-site-desktop.png";
import roccoPortfolioDesktop from "@/assets/projects/rocco-portfolio-desktop.png";
import gorillazBurguerDesktop from "@/assets/projects/gorillaz-burguer-desktop.png";
import levelUpYourLifeDesktop from "@/assets/projects/level-up-your-life-desktop.png";

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
    id: 8,
    title: "Gorillaz Burguer",
    shortDescription: "Landing page completa para hamburgueria artesanal.",
    description:
      "Site institucional para hamburgueria com cardápio digital interativo, montagem de pedidos, unidades, contato e área de login.",
    categories: ["Desenvolvimento Web"],
    technologies: ["React", "TypeScript", "Tailwind"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(25 90% 35%) 0%, hsl(265 89% 40%) 100%)",
    previewImage: gorillazBurguerDesktop,
    github: "https://github.com/Lucas-Rocco",
    live: "https://gorillaz-burguers.lovable.app",
    featured: true,
  },
  {
    id: 9,
    title: "Level Up Your Life",
    shortDescription: "Organização pessoal gamificada estilo Solo Leveling.",
    description:
      "Aplicativo de produtividade gamificado com visual dark futurista, sistema de níveis e missões para evolução pessoal contínua.",
    categories: ["Desenvolvimento Web"],
    technologies: ["React", "TypeScript", "Tailwind"],
    area: "Produtividade",
    image: "linear-gradient(135deg, hsl(0 80% 40%) 0%, hsl(25 90% 45%) 100%)",
    previewImage: levelUpYourLifeDesktop,
    github: "https://github.com/Lucas-Rocco",
    live: "https://roccoevoup.lovable.app",
    featured: true,
  },
  {
    id: 10,
    title: "Urban Flow Live",
    shortDescription: "Mapa vivo da mobilidade urbana em tempo real.",
    description:
      "Plataforma inteligente de transporte público com mapa ao vivo, linhas e informações de mobilidade urbana em tempo real.",
    categories: ["Desenvolvimento Web"],
    technologies: ["React", "TypeScript", "Mapas"],
    area: "Sistemas",
    image: "linear-gradient(135deg, hsl(217 91% 45%) 0%, hsl(265 89% 55%) 100%)",
    github: "https://github.com/Lucas-Rocco",
    live: "https://urban-flow.lovable.app",
    featured: true,
  },
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

const VISIBLE_COUNT = 3;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [rouletteHoveredId, setRouletteHoveredId] = useState<number | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "Todos"
        ? projects
        : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  const visibleProjects = useMemo(
    () => (showAll ? filteredProjects : filteredProjects.slice(0, VISIBLE_COUNT)),
    [filteredProjects, showAll],
  );

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filteredIds = useMemo(() => new Set(filteredProjects.map((project) => project.id)), [filteredProjects]);

  const rouletteAngles = useMemo(() => {
    const angles = new Map<number, number>();
    projects.forEach((project, index) => angles.set(project.id, (index / projects.length) * 360));
    filteredProjects.forEach((project, index) =>
      angles.set(project.id, (index / filteredProjects.length) * 360),
    );
    return angles;
  }, [filteredProjects]);

  const clearRouletteTimer = () => {
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleRouletteEnter = (project: Project) => {
    setRouletteHoveredId(project.id);
    clearRouletteTimer();
    if ((project.live || project.desktopApp) && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      hoverTimerRef.current = window.setTimeout(() => setPreviewProject(project), 700);
    }
  };

  const handleRouletteLeave = () => {
    clearRouletteTimer();
    setRouletteHoveredId(null);
  };

  useEffect(() => () => clearRouletteTimer(), []);

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
          className="flex flex-wrap justify-center gap-2 mb-12 md:hidden"
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
              onClick={() => handleFilterChange(filter)}
              className={cn(
                "rounded-full px-4 transition-all duration-300",
                activeFilter !== filter && "bg-card/40 text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fade-in_300ms_ease-out]"
          aria-live="polite"
        >
          {visibleProjects.map((project) => (
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

        {filteredProjects.length > VISIBLE_COUNT && (
          <div className="mt-12 text-center">
            <Button
              type="button"
              variant="outline"
              className="rounded-full bg-card/40 border-primary/30"
              aria-expanded={showAll}
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? (
                <>
                  <ArrowUpRight className="h-4 w-4" /> Ver menos
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4" /> Ver mais projetos ({filteredProjects.length - VISIBLE_COUNT})
                </>
              )}
            </Button>
          </div>
        )}
        </div>

        {/* Roleta de projetos (desktop / tablet) */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[780px] md:block">
          <div className="pointer-events-none absolute inset-[12%] rounded-full border border-border/20" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-[24%] rounded-full border border-dashed border-border/10" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_60%)]" aria-hidden="true" />

          <div
            className={cn("roulette-spin absolute inset-0", rouletteHoveredId !== null && "[animation-play-state:paused]")}
          >
            {projects.map((project) => {
              const visible = filteredIds.has(project.id);
              const angle = rouletteAngles.get(project.id) ?? 0;
              const hovered = rouletteHoveredId === project.id;

              return (
                <div
                  key={project.id}
                  className={cn(
                    "pointer-events-none absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    hovered ? "z-30" : "z-10",
                  )}
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ transform: `rotate(${-angle}deg)` }}
                    >
                      <div
                        className={cn(
                          "roulette-counter-spin",
                          rouletteHoveredId !== null && "[animation-play-state:paused]",
                        )}
                      >
                        <button
                          type="button"
                          tabIndex={visible ? 0 : -1}
                          aria-hidden={!visible}
                          aria-label={`Abrir detalhes do projeto ${project.title}`}
                          onMouseEnter={() => handleRouletteEnter(project)}
                          onMouseLeave={handleRouletteLeave}
                          onFocus={() => setRouletteHoveredId(project.id)}
                          onBlur={handleRouletteLeave}
                          onClick={() => {
                            clearRouletteTimer();
                            setSelectedProject(project);
                          }}
                          className={cn(
                            "group relative block w-36 overflow-hidden rounded-xl border bg-card/70 text-left backdrop-blur-md",
                            "transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                            visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 scale-50",
                            visible && (hovered ? "scale-110" : "scale-100"),
                            project.featured ? "border-primary/30" : "border-border/60",
                            hovered && "border-primary/60 shadow-[var(--shadow-glow)]",
                          )}
                        >
                          <div className="relative h-20 overflow-hidden" style={{ background: project.image }}>
                            {project.previewImage ? (
                              <img
                                src={project.previewImage}
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <span className="absolute inset-0 flex items-center justify-center px-2 text-center font-display text-xs font-bold uppercase tracking-widest text-primary-foreground/30">
                                {project.title}
                              </span>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                            {project.featured && (
                              <span className="absolute left-1.5 top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-background/70 text-primary backdrop-blur-md">
                                <Star className="h-2.5 w-2.5" aria-hidden="true" />
                              </span>
                            )}
                          </div>
                          <div className="p-2.5">
                            <p className="truncate font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                              {project.title}
                            </p>
                            <p className="mt-0.5 truncate text-[10px] font-medium text-primary/80">
                              {project.categories.join(" · ")}
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centro: título + filtros */}
          <div className="absolute inset-[31%] z-20 flex flex-col items-center justify-center rounded-full border border-primary/20 bg-card/60 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Portfolio</span>
            <p className="mt-1 font-display text-2xl font-bold text-gradient">Projetos</p>
            <div
              className="mt-4 flex w-full max-w-[190px] flex-col gap-1.5"
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
                  onClick={() => handleFilterChange(filter)}
                  className={cn(
                    "h-8 rounded-full text-xs transition-all duration-300",
                    activeFilter !== filter && "bg-card/40 text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground" aria-live="polite">
              {filteredProjects.length} {filteredProjects.length === 1 ? "projeto" : "projetos"}
            </p>
          </div>
        </div>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground md:block">
          Passe o mouse sobre um projeto para pausar a roleta e abrir a prévia.
        </p>

        <div className="text-center mt-6">
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
