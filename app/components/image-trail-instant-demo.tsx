import { motion } from "framer-motion";
import ImageTrail, { ImageTrailItem } from "./fancy/image/image-trail";

const images = [
  "/assets/gallery/gallery01.jpg",
  "/assets/gallery/gallery02.jpg",
  "/assets/gallery/gallery03.jpg",
  "/assets/gallery/gallery04.jpg",
  "/assets/gallery/gallery05.jpg",
  "/assets/gallery/gallery06.jpg",
];

const ImageTrailDemo = () => {
  return (
    <div className="relative h-dvh w-dvw bg-white text-foreground dark:text-muted">
      <ImageTrail
        threshold={100}
        intensity={1}
        keyframes={{ scale: [1, 1] }}
        keyframesOptions={{
          scale: { duration: 1, times: [1, 1] },
        }}
        repeatChildren={1}
      >
        {images.map((url, index) => (
          <ImageTrailItem key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative h-full w-20 overflow-hidden sm:w-28"
            >
              <img src={url} alt="image" className="object-cover" />
            </motion.div>
          </ImageTrailItem>
        ))}
      </ImageTrail>

      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.5,
        }}
        className="z-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl text-transparent sm:text-9xl"
      >
        SOUSOU NO FRIEREN
      </motion.h1>
    </div>
  );
};

export default ImageTrailDemo;
