import { motion } from "framer-motion";
import subprefeitura from "@/assets/sponsors/subprefeitura-ilhas.png";
import portuguesa from "@/assets/sponsors/portuguesa.png";
import mocidade from "@/assets/sponsors/mocidade.jpeg";
import projetar from "@/assets/sponsors/projetar.jpg";
import ilhaNoticias from "@/assets/sponsors/ilha-noticias.png";
import jaya from "@/assets/sponsors/jaya-yoga.jpeg";
import ilhaCarioca from "@/assets/sponsors/ilha-carioca.jpg";
import brazuca from "@/assets/sponsors/brazuca.jpg";
import crepeCevada from "@/assets/sponsors/crepe-cevada.jpg";
import gaiolaDaIlha from "@/assets/sponsors/gaiola-da-ilha.png";
import djBruno from "@/assets/sponsors/dj-bruno.jpeg";

const apoio = [
  { name: "SubPrefeitura das Ilhas", img: subprefeitura },
  { name: "Associação Atlética Portuguesa", img: portuguesa },
  { name: "Mocidade Independente de Padre Miguel", img: mocidade },
  { name: "Projetar DR", img: projetar },
];

const parceiros = [
  { name: "Ilha Notícias", img: ilhaNoticias },
  { name: "Escola Jaya de Yoga", img: jaya },
  { name: "Ilha Carioca", img: ilhaCarioca },
  { name: "Brazuca Gastrobar", img: brazuca },
  { name: "Crepe & Cevada Restaurante", img: crepeCevada },
  { name: "Gaiola da Ilha Bar e Restaurante", img: gaiolaDaIlha },
  { name: "DJ Bruno", img: djBruno },
];

function LogoGrid({ items }: { items: { name: string; img: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group flex aspect-square items-center justify-center rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <img
            src={item.img}
            alt={`Logo ${item.name}`}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Sponsors() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-primary"
          >
            Apoio & Parceiros
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-3xl md:text-5xl"
          >
            Quem caminha{" "}
            <span className="text-muted-foreground">com a gente.</span>
          </motion.h2>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="mb-8 text-center text-base uppercase tracking-[0.3em] text-primary md:text-lg">
              Apoio
            </h3>
            <LogoGrid items={apoio} />
          </div>

          <div>
            <h3 className="mb-8 text-center text-base uppercase tracking-[0.3em] text-primary md:text-lg">
              Parceiros
            </h3>
            <LogoGrid items={parceiros} />
          </div>
        </div>
      </div>
    </section>
  );
}
