import { motion } from "framer-motion";
import { Smartphone, Tv, Speaker, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const main = [
  { place: "1º", prize: "iPhone", Icon: Smartphone },
  { place: "2º", prize: 'SmartTV 50"', Icon: Tv },
  { place: "3º", prize: "Caixa de Som Amplificada", Icon: Speaker },
];

const extras = [
  "Airfryer",
  "Liquidificador",
  "Cafeteira",
  "Secador de cabelo",
  "Ferro a vapor",
  "Jogo de panelas",
  "Kit Boticário",
];

export function Prizes() {
  return (
    <section className="bg-secondary/40 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-primary"
          >
            Rifa solidária 2026
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-3xl md:text-5xl"
          >
            Concorra a prêmios incríveis{" "}
            <span className="text-muted-foreground">e ajude quem precisa.</span>
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {main.map((item, i) => (
            <motion.div
              key={item.place}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl transition-opacity group-hover:opacity-150" />
              <div className="relative">
                <span className="font-display text-5xl text-primary md:text-6xl">{item.place}</span>
                <div className="mt-6 flex items-center gap-3">
                  <item.Icon className="h-6 w-6 text-foreground/70" strokeWidth={1.5} />
                  <span className="text-xl">{item.prize}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-border/60 bg-card/50 p-8 md:p-10"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            Prêmios extras
          </div>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {extras.map((p) => (
              <li
                key={p}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-muted-foreground">
              Cada bilhete vai diretamente para os projetos sociais da União Espírita Ramatis.
            </p>
            <Button asChild size="lg" className="rounded-full shadow-elegant">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero meu bilhete
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
