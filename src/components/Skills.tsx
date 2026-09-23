import { useEffect, useMemo, useRef, useState } from "react";
import { Code, Database, Cloud, Palette, Terminal, Layers, Cpu, Globe, Smartphone, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { icon: Code, name: "React", category: "Frontend", level: 95, description: "Componentes, Hooks, Context API, Redux", x: 16, y: 34 },
  { icon: Globe, name: "Next.js", category: "Frontend", level: 90, description: "SSR, SSG, API Routes, App Router", x: 29, y: 16 },
  { icon: Code, name: "TypeScript", category: "Frontend", level: 92, description: "Types, Generics, Interfaces", x: 38, y: 42 },
  { icon: Database, name: "Node.js", category: "Backend", level: 88, description: "Express, Fastify, APIs RESTful", x: 54, y: 24 },
  { icon: Database, name: "PostgreSQL", category: "Backend", level: 85, description: "Queries complexas, Otimização", x: 69, y: 40 },
  { icon: Cloud, name: "AWS", category: "Cloud", level: 82, description: "EC2, S3, Lambda, CloudFront", x: 80, y: 70 },
  { icon: Terminal, name: "Docker", category: "DevOps", level: 80, description: "Containers, Compose, Kubernetes", x: 89, y: 46 },
  { icon: Palette, name: "Figma", category: "Design", level: 88, description: "UI/UX, Protótipos, Design Systems", x: 12, y: 70 },
  { icon: Smartphone, name: "React Native", category: "Mobile", level: 78, description: "Apps iOS e Android, Expo", x: 30, y: 82 },
  { icon: Layers, name: "GraphQL", category: "Backend", level: 75, description: "Apollo, Queries, Mutations", x: 52, y: 58 },
  { icon: Lock, name: "Auth", category: "Security", level: 85, description: "JWT, OAuth, SSO, 2FA", x: 58, y: 84 },
  { icon: Cpu, name: "Python", category: "Backend", level: 80, description: "Django, FastAPI, Data Science", x: 82, y: 16 },
];

// Ligações da constelação (índices em `skills`)
const links: [number, number][] = [
  [0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [3, 11], [4, 11], [4, 6], [6, 5],
  [4, 9], [2, 9], [9, 10], [10, 5], [0, 7], [7, 8], [8, 10], [2, 8],
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const connected = useMemo(() => {
    if (activeSkill === null) return null;
    const set = new Set<number>([activeSkill]);
    links.forEach(([a, b]) => {
      if (a === activeSkill) set.add(b);
      if (b === activeSkill) set.add(a);
    });
    return set;
  }, [activeSkill]);

  const active = activeSkill !== null ? skills[activeSkill] : null;

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary/70 text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma constelação das tecnologias que uso — passe o mouse sobre uma estrela
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-5xl aspect-square md:aspect-[16/10]"
          onMouseLeave={() => setActiveSkill(null)}
        >
          {/* Linhas da constelação */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {links.map(([a, b], i) => {
              const lit = activeSkill !== null && (a === activeSkill || b === activeSkill);
              const dim = activeSkill !== null && !lit;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={skills[a].x}
                  y1={skills[a].y}
                  x2={skills[b].x}
                  y2={skills[b].y}
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                  className={cn(
                    "transition-[stroke,stroke-width,opacity] duration-300",
                    lit ? "stroke-primary" : "stroke-muted-foreground",
                  )}
                  strokeWidth={lit ? 1.5 : 1}
                  strokeDasharray={1}
                  strokeDashoffset={revealed ? 0 : 1}
                  style={{
                    opacity: dim ? 0.08 : lit ? 0.9 : 0.25,
                    transition: `stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, opacity 300ms, stroke 300ms`,
                  }}
                />
              );
            })}
          </svg>

          {/* Estrelas / habilidades */}
          {skills.map((skill, index) => {
            const isActive = activeSkill === index;
            const isDim = connected !== null && !connected.has(index);
            return (
              <button
                key={skill.name}
                type="button"
                aria-label={`${skill.name}: ${skill.category}, ${skill.level}%`}
                onMouseEnter={() => setActiveSkill(index)}
                onFocus={() => setActiveSkill(index)}
                onBlur={() => setActiveSkill(null)}
                onClick={() => setActiveSkill(isActive ? null : index)}
                className={cn(
                  "group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rounded-full",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "transition-[opacity,transform] duration-500 ease-out",
                  revealed ? "opacity-100 scale-100" : "opacity-0 scale-50",
                  isDim && "opacity-30",
                  isActive ? "z-30" : "z-10",
                )}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transitionDelay: revealed && activeSkill === null ? `${index * 60}ms` : "0ms",
                }}
              >
                <span className="relative flex items-center justify-center">
                  {/* halo pulsante */}
                  <span
                    className={cn(
                      "absolute h-14 w-14 md:h-16 md:w-16 rounded-full border transition-all duration-300",
                      isActive ? "border-primary/50 bg-primary/10 scale-110" : "border-border/20 bg-transparent scale-90",
                    )}
                    style={{ animation: `pulse-glow ${3 + (index % 4)}s ease-in-out infinite`, animationDelay: `${index * 0.3}s` }}
                  />
                  <span
                    className={cn(
                      "relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300",
                      isActive
                        ? "border-primary/60 bg-card shadow-[var(--shadow-glow)]"
                        : "border-border/40 bg-card/70 group-hover:border-border/70",
                    )}
                  >
                    <skill.icon
                      className={cn(
                        "h-4 w-4 md:h-5 md:w-5 transition-colors duration-300",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                  </span>
                </span>
                <span
                  className={cn(
                    "hidden md:block whitespace-nowrap text-[11px] font-medium tracking-wide transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground/70",
                  )}
                >
                  {skill.name}
                </span>
              </button>
            );
          })}

          {/* Info sempre acima (12h) */}
          {active && (
            <div
              key={active.name}
              className="absolute z-[100] w-48 p-3 rounded-lg bg-card/95 backdrop-blur-md border border-border/50 shadow-xl pointer-events-none animate-[fade-in_200ms_ease-out]"
              style={{
                left: `${active.x}%`,
                top: `${active.y}%`,
                transform: "translate(-50%, calc(-100% - 2.25rem))",
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-card/95 border-r border-b border-border/50" />
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-foreground text-sm">{active.name}</h4>
                  <span className="text-xs text-muted-foreground">{active.level}%</span>
                </div>
                <span className="text-xs text-primary/70 mb-2 block">{active.category}</span>
                <p className="text-xs text-muted-foreground mb-2">{active.description}</p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${active.level}%` }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "5+", label: "Anos" },
            { value: "99%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
