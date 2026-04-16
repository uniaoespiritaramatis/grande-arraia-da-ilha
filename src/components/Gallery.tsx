import { motion } from "framer-motion";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";

// Mosaic layout — each tile uses col-span / row-span for an asymmetric grid
const tiles = [
  { src: g5, alt: "Público lotando o salão do Arraiá da Ilha 2025", className: "col-span-2 row-span-2" },
  { src: g1, alt: "Equipe dançando junto com convidados", className: "col-span-1 row-span-1" },
  { src: g2, alt: "Banda tocando ao vivo no palco do evento", className: "col-span-1 row-span-1" },
  { src: g9, alt: "Apresentação de quadrilha junina com figurinos elaborados", className: "col-span-2 row-span-1" },
  { src: g4, alt: "Barracas decoradas com bandeirinhas e pessoas circulando", className: "col-span-1 row-span-2" },
  { src: g6, alt: "Mesas cheias e atmosfera vibrante do evento", className: "col-span-2 row-span-1" },
  { src: g3, alt: "Cantor com cavaquinho durante apresentação", className: "col-span-1 row-span-1" },
  { src: g7, alt: "Apresentação tradicional com público em volta", className: "col-span-1 row-span-1" },
  { src: g8, alt: "Dançarino animando o público durante a festa", className: "col-span-1 row-span-1" },
];

export function Gallery() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-primary"
          >
            Edição 2025 · Em retrospectiva
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-3xl md:text-5xl"
          >
            700 pessoas. Uma noite.{" "}
            <span className="text-muted-foreground">Memórias para a vida.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            Em 2025, mais de 450 kg de alimentos foram arrecadados e 200 famílias beneficiadas. Veja como foi.
          </motion.p>
        </div>

        <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:gap-4 md:auto-rows-[180px] md:grid-cols-4">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-muted shadow-soft ring-1 ring-border/60 ${tile.className}`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
