const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL / MongoDB", level: 85 },
  { name: "AWS / Vercel", level: 82 },
  { name: "Docker / Kubernetes", level: 75 },
  { name: "UI/UX Design", level: 85 },
];

const tools = [
  "Git", "Figma", "VS Code", "Postman", "Notion", 
  "Jira", "Slack", "Linear", "GitHub Actions", "Terraform"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Habilidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tecnologias & <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico que utilizo para criar soluções robustas e escaláveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills bars */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold mb-8">
              Principais Competências
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: 'var(--gradient-primary)',
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-8">
              Ferramentas do Dia a Dia
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="glass px-4 py-3 rounded-xl text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="glass p-6 rounded-2xl text-center">
                <p className="font-display text-3xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projetos</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <p className="font-display text-3xl font-bold text-gradient">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <p className="font-display text-3xl font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
