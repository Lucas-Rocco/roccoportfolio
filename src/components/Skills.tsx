import { useState } from "react";
import { Code, Database, Cloud, Palette, Terminal, Layers, Cpu, Globe, Smartphone, Lock } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "React",
    category: "Frontend",
    level: 95,
    description: "Componentes, Hooks, Context API, Redux",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Globe,
    name: "Next.js",
    category: "Frontend",
    level: 90,
    description: "SSR, SSG, API Routes, App Router",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: Code,
    name: "TypeScript",
    category: "Frontend",
    level: 92,
    description: "Types, Generics, Interfaces, Utility Types",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Database,
    name: "Node.js",
    category: "Backend",
    level: 88,
    description: "Express, Fastify, APIs RESTful",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    category: "Backend",
    level: 85,
    description: "Queries complexas, Otimização, Indexação",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: Cloud,
    name: "AWS",
    category: "Cloud",
    level: 82,
    description: "EC2, S3, Lambda, CloudFront",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: Terminal,
    name: "Docker",
    category: "DevOps",
    level: 80,
    description: "Containers, Compose, Kubernetes básico",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Palette,
    name: "Figma",
    category: "Design",
    level: 88,
    description: "UI/UX, Protótipos, Design Systems",
    color: "from-pink-400 to-purple-500",
  },
  {
    icon: Smartphone,
    name: "React Native",
    category: "Mobile",
    level: 78,
    description: "Apps iOS e Android, Expo",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: Layers,
    name: "GraphQL",
    category: "Backend",
    level: 75,
    description: "Apollo, Queries, Mutations, Subscriptions",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Lock,
    name: "Auth",
    category: "Security",
    level: 85,
    description: "JWT, OAuth, SSO, 2FA",
    color: "from-red-400 to-rose-600",
  },
  {
    icon: Cpu,
    name: "Python",
    category: "Backend",
    level: 80,
    description: "Django, FastAPI, Data Science",
    color: "from-yellow-400 to-amber-500",
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Stack & <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passe o mouse sobre as bolhas para descobrir mais sobre cada tecnologia.
          </p>
        </div>

        {/* Spiral Galaxy Container */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto">
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-blue-500 animate-pulse opacity-50 blur-xl" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="font-display text-lg md:text-xl font-bold text-white">Skills</span>
            </div>
          </div>

          {/* Orbital Rings */}
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
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
                  {/* Bubble */}
                  <div
                    className={`
                      relative w-14 h-14 md:w-16 md:h-16 rounded-full
                      bg-gradient-to-br ${skill.color}
                      flex items-center justify-center
                      shadow-lg shadow-primary/20
                      transition-all duration-300
                      ${activeSkill === index ? 'ring-4 ring-white/30' : ''}
                    `}
                    style={{
                      animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-50 blur-md -z-10`} />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 bottom-full mb-3
                      w-48 p-4 rounded-xl
                      bg-card/95 backdrop-blur-lg border border-border/50
                      shadow-2xl shadow-primary/10
                      transition-all duration-300 pointer-events-none
                      ${activeSkill === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 translate-y-2 invisible'}
                    `}
                  >
                    {/* Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-card border-r border-b border-border/50" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                          {skill.category}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-foreground mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {skill.description}
                      </p>
                      
                      {/* Skill level bar */}
                      <div className="w-full h-1.5 rounded-full bg-muted/50 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                          style={{ width: activeSkill === index ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">
                        {skill.level}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Stats below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "5+", label: "Anos" },
            { value: "99%", label: "Satisfação" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
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
