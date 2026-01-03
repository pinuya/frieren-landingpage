import ImageTrail, { ImageTrailItem } from "./fancy/image/image-trail";

const images = [
  "/assets/gallery/gallery01.jpg",
  "/assets/gallery/gallery02.jpg",
  "/assets/gallery/gallery03.jpg",
  "/assets/gallery/gallery04.jpg",
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
            <div className="relative h-full w-20 overflow-hidden sm:w-28">
              <img src={url} alt="image" className="object-cover" />
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>

      <h1 className="z-100 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl text-transparent sm:text-9xl">
        FRIEREN
      </h1>
    </div>
  );
};

export default ImageTrailDemo;
