import { useEffect, useRef } from "react";

/**
 * Céu do Norte: estrelas cintilando, partículas de mana flutuando e
 * pétalas azuladas caindo devagar — como o campo de flores que Frieren
 * faz brotar para Himmel. Fica fixo atrás de todo o conteúdo.
 */

interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  rot: number;
  vrot: number;
  sway: number;
  hue: number;
}

interface Mote {
  x: number;
  y: number;
  r: number;
  vy: number;
  life: number;
}

export function NightSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let petals: Petal[] = [];
    let motes: Mote[] = [];
    let raf = 0;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const newPetal = (initial = false): Petal => ({
      x: rand(-50, width + 50),
      y: initial ? rand(-height, height) : rand(-80, -20),
      size: rand(4, 9),
      vy: rand(0.25, 0.7),
      vx: rand(-0.15, 0.25),
      rot: rand(0, Math.PI * 2),
      vrot: rand(-0.01, 0.01),
      sway: rand(0, Math.PI * 2),
      hue: rand(200, 225),
    });

    const newMote = (): Mote => ({
      x: rand(0, width),
      y: rand(height * 0.3, height + 20),
      r: rand(0.6, 1.8),
      vy: rand(0.1, 0.35),
      life: rand(0, 1),
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 0.5 : 1;
      stars = Array.from({ length: Math.round(160 * density) }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(0.3, 1.3),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.005, 0.02),
      }));
      petals = Array.from({ length: Math.round(22 * density) }, () =>
        newPetal(true),
      );
      motes = Array.from({ length: Math.round(40 * density) }, newMote);
    };

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      const g = ctx.createLinearGradient(0, -p.size, 0, p.size);
      g.addColorStop(0, `hsla(${p.hue}, 70%, 88%, 0.85)`);
      g.addColorStop(1, `hsla(${p.hue}, 60%, 65%, 0.35)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.quadraticCurveTo(p.size * 0.9, 0, 0, p.size);
      ctx.quadraticCurveTo(-p.size * 0.9, 0, 0, -p.size);
      ctx.fill();
      ctx.restore();
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const a = 0.35 + 0.65 * Math.abs(Math.sin(s.phase + t * s.speed * 0.06));
        ctx.fillStyle = `rgba(219, 228, 243, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const m of motes) {
        m.y -= m.vy;
        m.life += 0.003;
        if (m.y < -10 || m.life > 1) Object.assign(m, newMote(), { life: 0 });
        const a = Math.sin(m.life * Math.PI) * 0.7;
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 6);
        g.addColorStop(0, `rgba(170, 205, 240, ${a})`);
        g.addColorStop(1, "rgba(170, 205, 240, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of petals) {
        p.sway += 0.012;
        p.x += p.vx + Math.sin(p.sway) * 0.35;
        p.y += p.vy;
        p.rot += p.vrot;
        if (p.y > height + 30) Object.assign(p, newPetal());
        drawPetal(p);
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      frame(0);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Céu em degradê + brilho da lua */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1b2a52_0%,#0a0f1f_55%,#060914_100%)]" />
      <div className="absolute -top-40 right-[10%] h-[28rem] w-[28rem] rounded-full bg-aura/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-night-deep to-transparent" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
