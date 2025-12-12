import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir sobre sua ideia e 
            discutir como posso ajudar a torná-la realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">lucas@rocco.dev</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="font-medium">São Paulo, Brasil</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="relative h-48 glass rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-lg text-muted-foreground">
                  Disponível para projetos remotos
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 bg-transparent"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 bg-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl glass border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 bg-transparent resize-none"
                placeholder="Conte-me sobre seu projeto..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 glow hover:scale-[1.02]"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span>Enviar Mensagem</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
