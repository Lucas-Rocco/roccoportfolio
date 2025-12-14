import { useState } from "react";
import { Code, Database, Cloud, Palette, Terminal, Layers, Cpu, Globe, Smartphone, Lock } from "lucide-react";

const skills = [
  { icon: Code, name: "React", category: "Frontend", level: 95, description: "Componentes, Hooks, Context API, Redux" },
  { icon: Globe, name: "Next.js", category: "Frontend", level: 90, description: "SSR, SSG, API Routes, App Router" },
  { icon: Code, name: "TypeScript", category: "Frontend", level: 92, description: "Types, Generics, Interfaces" },
  { icon: Database, name: "Node.js", category: "Backend", level: 88, description: "Express, Fastify, APIs RESTful" },
  { icon: Database, name: "PostgreSQL", category: "Backend", level: 85, description: "Queries complexas, Otimização" },
  { icon: Cloud, name: "AWS", category: "Cloud", level: 82, description: "EC2, S3, Lambda, CloudFront" },
  { icon: Terminal, name: "Docker", category: "DevOps", level: 80, description: "Containers, Compose, Kubernetes" },
  { icon: Palette, name: "Figma", category: "Design", level: 88, description: "UI/UX, Protótipos, Design Systems" },
  { icon: Smartphone, name: "React Native", category: "Mobile", level: 78, description: "Apps iOS e Android, Expo" },
  { icon: Layers, name: "GraphQL", category: "Backend", level: 75, description: "Apollo, Queries, Mutations" },
  { icon: Lock, name: "Auth", category: "Security", level: 85, description: "JWT, OAuth, SSO, 2FA" },
  { icon: Cpu, name: "Python", category: "Backend", level: 80, description: "Django, FastAPI, Data Science" },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary/70 text-sm font-medium uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Habilidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passe o mouse sobre as bolhas para descobrir mais
          </p>
        </div>

        {/* Spiral Galaxy Container */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto">
          {/* Central Core - minimal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24">
            <div className="absolute inset-0 rounded-full border border-border/30 bg-card/50 backdrop-blur-sm flex items-center justify-center">
              <span className="font-display text-sm md:text-base font-medium text-muted-foreground">Skills</span>
            </div>
          </div>

          {/* Orbital Rings - very subtle */}
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/10"
              style={{
                width: `${ring * 30 + 20}%`,
                height: `${ring * 30 + 20}%`,
              }}
            />
          ))}

          {/* Skill Bubbles */}
          {skills.map((skill, index) => {
            const orbitIndex = Math.floor(index / 4);
            const positionInOrbit = index % 4;
            const orbitRadius = 120 + orbitIndex * 100;
            const baseAngle = (positionInOrbit * 90) + (orbitIndex * 22.5);
            const animationDelay = index * 0.5;
            const animationDuration = 20 + orbitIndex * 5;
            
            return (
              <div
                key={skill.name}
                className="absolute top-1/2 left-1/2 skill-orbit"
                style={{
                  animation: `orbit ${animationDuration}s linear infinite`,
                  animationDelay: `-${animationDelay}s`,
                  transformOrigin: '0 0',
                }}
              >
                <div
                  className={`
                    relative -translate-x-1/2 -translate-y-1/2 cursor-pointer
                    transition-all duration-300 ease-out
                    ${activeSkill === index ? 'scale-125 z-50' : 'hover:scale-110 z-10'}
                  `}
                  style={{
                    transform: `rotate(${baseAngle}deg) translateX(${orbitRadius}px) rotate(-${baseAngle}deg)`,
                  }}
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {/* Bubble - clean monochrome */}
                  <div
                    className={`
                      relative w-12 h-12 md:w-14 md:h-14 rounded-full
                      border transition-all duration-300
                      flex items-center justify-center backdrop-blur-sm
                      ${activeSkill === index 
                        ? 'bg-primary/10 border-primary/50 shadow-lg' 
                        : 'bg-card/60 border-border/30 hover:border-border/50'}
                    `}
                    style={{
                      animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <skill.icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                      activeSkill === index ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Tooltip - Always above */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 bottom-full mb-4
                      w-44 p-3 rounded-lg
                      bg-card/95 backdrop-blur-md border border-border/50
                      shadow-xl transition-all duration-300 pointer-events-none
                      ${activeSkill === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 translate-y-2 invisible'}
                    `}
                  >
                    {/* Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-card/95 border-r border-b border-border/50" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground text-sm">
                          {skill.name}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <span className="text-xs text-primary/70 mb-2 block">
                        {skill.category}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Minimal floating particles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-muted-foreground/20"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Stats below - cleaner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "5+", label: "Anos" },
            { value: "99%", label: "Satisfação" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;