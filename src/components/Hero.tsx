import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up opacity-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Disponível para novos projetos
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 delay-100">
          Lucas <span className="text-gradient">Rocco</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up opacity-0 delay-200">
          Desenvolvedor Full Stack & Designer
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0 delay-300">
          Transformo ideias em experiências digitais extraordinárias. 
          Especializado em criar soluções elegantes e funcionais que 
          conectam pessoas e tecnologia.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-slide-up opacity-0 delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a
            href="mailto:lucas@rocco.dev"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-slide-up opacity-0 delay-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-primary/20 animate-float" />
      <div 
        className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full border border-accent/20 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-primary/40 animate-float"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

export default Hero;
