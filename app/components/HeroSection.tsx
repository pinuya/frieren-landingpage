import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import { Link } from "@remix-run/react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-black"
      />
      <div className="relative z-10 flex h-full flex-col px-4">
        <section
          id="hero"
          className="h-screen flex items-center justify-center py-4 overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold py-3 text-white">
                  Traga a mágia de{" "}
                  <span className="bg-gradient-to-r from-indigo-300  to-blue-400 inline-block text-transparent bg-clip-text">
                    Frieren
                  </span>{" "}
                  para o seu{" "}
                  <span className="bg-gradient-to-r from-indigo-300  to-blue-400 inline-block text-transparent bg-clip-text">
                    Servidor Discord
                  </span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-xl">
                  Aprimore sua experiência no Discord com feitiços, missões e a
                  sabedoria da Maga Élfica.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.button
                    className="text-white items-center bg-gradient-to-br from-cyan-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase flex gap-4 me-2 mb-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Adicionar ao Discord
                  </motion.button>
                  <Link to={"/#about"}>
                    <motion.button
                      className="border border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium px-5 py-2.5 text-center flex gap-4 me-2 mb-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Saber mais
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.img
                  src="/assets/frierenGifHero.gif"
                  alt="Imagem da Frieren"
                  className="max-w-full h-auto max-h-[500px] object-contain"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            </div>
          </div>

          <ScrollIndicator />
        </section>
      </div>
    </div>
  );
}
