import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Código limpo e eficiente usando as tecnologias mais modernas do mercado.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces intuitivas e visualmente impactantes que encantam usuários.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas para a melhor experiência possível.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Sobre Mim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Quem é <span className="text-gradient">Lucas Rocco</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um apaixonado por tecnologia e inovação, sempre buscando transformar
            desafios complexos em soluções simples e elegantes.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
                    <span className="font-display text-4xl font-bold">LR</span>
                  </div>
                  <p className="text-lg font-medium">Full Stack Developer</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/40" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl animate-float">
              <p className="text-sm text-muted-foreground">Experiência</p>
              <p className="font-display text-2xl font-bold text-gradient">5+ Anos</p>
            </div>
          </div>

          {/* Right - Text content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá! Sou Lucas Rocco, desenvolvedor full stack com mais de 5 anos de 
              experiência criando produtos digitais incríveis. Minha jornada começou 
              com curiosidade e evoluiu para uma paixão profunda por resolver problemas 
              através da tecnologia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho com empresas de todos os tamanhos, desde startups inovadoras 
              até grandes corporações, sempre focando em entregar valor real e 
              experiências memoráveis para os usuários finais.
            </p>

            {/* Highlights */}
            <div className="grid gap-6 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl glass group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
