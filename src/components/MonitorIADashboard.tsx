import { useState } from "react";
import { Camera, ChevronDown, ChevronUp, Menu, Power, RotateCcw, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonitorIADashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [status, setStatus] = useState("Parado");

  return (
    <div className="relative flex h-full min-h-[420px] w-full overflow-hidden bg-background text-foreground">
      <aside
        className={`relative z-10 shrink-0 overflow-hidden border-r border-border bg-card transition-[width] duration-300 ${menuOpen ? "w-64" : "w-0 border-r-0"}`}
      >
        <div className="flex h-full w-64 flex-col p-5 pt-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Controle manual</p>
          <div className="grid gap-3">
            <Button type="button" variant="secondary" className="justify-start" onClick={() => setStatus("Subindo")}>
              <ChevronUp className="h-4 w-4" /> Subir
            </Button>
            <Button type="button" variant="secondary" className="justify-start" onClick={() => setStatus("Descendo")}>
              <ChevronDown className="h-4 w-4" /> Descer
            </Button>
            <Button type="button" variant="secondary" className="justify-start" onClick={() => setStatus("Parado")}>
              <Square className="h-4 w-4" /> Parar
            </Button>
            <Button type="button" variant="outline" className="mt-3 justify-start" onClick={() => setStatus("Reiniciado")}>
              <RotateCcw className="h-4 w-4" /> Reiniciar
            </Button>
          </div>
          <Button type="button" variant="destructive" className="mt-auto justify-start" onClick={() => setStatus("Desligado")}>
            <Power className="h-4 w-4" /> Sair
          </Button>
        </div>
      </aside>

      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="absolute left-4 top-4 z-20"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <main className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-3xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">Visão computacional</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">TCC Monitor IA-justável</h2>
            </div>
            <span className="hidden rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground sm:inline-flex">
              Câmera 01
            </span>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Camera className="h-12 w-12 text-primary" />
              <p className="mt-4 font-medium">Visualização da câmera</p>
              <p className="mt-1 text-sm text-muted-foreground">Reconhecimento facial e de gestos em tempo real</p>
            </div>
            <div className="absolute left-1/2 top-1/2 h-36 w-28 -translate-x-1/2 -translate-y-1/2 border-2 border-primary/70">
              <span className="absolute -top-7 left-0 bg-primary px-2 py-1 text-xs text-primary-foreground">Rosto detectado</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${status === "Desligado" ? "bg-destructive" : "bg-primary"}`} />
              <span className="text-sm text-muted-foreground">Status do monitor</span>
            </div>
            <strong className="text-sm font-medium text-foreground">{status}</strong>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonitorIADashboard;