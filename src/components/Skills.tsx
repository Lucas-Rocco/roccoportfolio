import { Code, Database, Cloud, Palette, Terminal, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "Kubernetes"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
  },
  {
    icon: Terminal,
    title: "Ferramentas",
    skills: ["Git", "VS Code", "Postman", "Linux"],
  },
  {
    icon: Layers,
    title: "Metodologias",
    skills: ["Agile", "Scrum", "CI/CD", "TDD"],
  },
];

const stats = [
  { value: "50+", label: "Projetos" },
  { value: "30+", label: "Clientes" },
  { value: "5+", label: "Anos" },
  { value: "99%", label: "Satisfação" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Stack & <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções de alto impacto.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold mb-4">
                {category.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
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
