import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Countdown } from "@/components/Countdown";
import { WHATSAPP_URL } from "@/lib/constants";
import heroImg from "@/assets/hero-arraia.jpg";
import comidasImg from "@/assets/comidas.jpg";
import musicaImg from "@/assets/musica.jpg";
import rifaImg from "@/assets/rifa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full">
        <img
          src={heroImg}
          alt="Festa junina elegante ao entardecer com lanternas e mesas decoradas"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-6 py-10 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="font-display text-lg text-background/90 tracking-wide">
              Arraiá <span className="opacity-70">·</span> da Ilha
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-background/85 underline-offset-4 hover:text-background hover:underline md:block"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <div className="flex flex-1 items-center">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background/90 backdrop-blur"
              >
                Edição 2025 · Beneficente
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-4xl leading-[1.05] text-background sm:text-5xl md:text-6xl lg:text-7xl"
              >
                O maior arraiá beneficente da{" "}
                <em className="not-italic text-accent">Ilha do Governador</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-6 max-w-xl text-lg text-background/85 md:text-xl"
              >
                Tradição, alegria e solidariedade em uma experiência única.{" "}
                <span className="text-background">06 de junho de 2026.</span>
              </motion.p>
              <div className="mt-8">
                <Countdown />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <Button asChild size="lg" className="h-12 rounded-full px-8 text-base shadow-elegant">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Reservar mesa
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-background/40 bg-background/10 px-8 text-base text-background backdrop-blur hover:bg-background/20 hover:text-background"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            {...fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-primary"
          >
            Sobre o evento
          </motion.span>
          <motion.h2 {...fadeUp} className="mt-5 text-3xl md:text-5xl">
            Mais que uma festa.{" "}
            <span className="text-muted-foreground">Um movimento.</span>
          </motion.h2>
          <motion.div {...fadeUp} className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              O <span className="text-foreground font-medium">Grande Arraiá da Ilha</span> é o maior evento beneficente da Ilha do Governador, unindo tradição, alegria e solidariedade em uma experiência única.
            </p>
            <p>
              Mais do que uma festa, é uma oportunidade de fazer o bem: arrecadamos alimentos, apoiamos famílias e fortalecemos diversas ações sociais.
            </p>
            <p className="text-foreground">
              Toda a renda arrecadada é integralmente destinada à manutenção dos projetos sociais da{" "}
              <span className="font-medium">União Espírita Ramatis</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="bg-secondary/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <motion.span {...fadeUp} className="text-xs uppercase tracking-[0.25em] text-primary">
              A experiência
            </motion.span>
            <motion.h2 {...fadeUp} className="mt-5 text-3xl md:text-5xl">
              Uma noite que reúne o melhor do Brasil.
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Comidas típicas", desc: "Sabores artesanais que aquecem a memória.", img: comidasImg, icon: "🌽" },
              { title: "Música ao vivo", desc: "Forró, sanfona e a alma do São João.", img: musicaImg, icon: "🎶" },
              { title: "Espaço família", desc: "Um ambiente acolhedor para todas as idades.", img: heroImg, icon: "👨‍👩‍👧" },
              { title: "Brincadeiras", desc: "Atrações tradicionais que encantam.", img: rifaImg, icon: "🎯" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-2xl">{item.icon}</div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-warm p-10 text-center text-primary-foreground shadow-elegant md:p-20"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <span className="inline-block rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              Mesas limitadas
            </span>
            <h2 className="mt-6 text-3xl text-primary-foreground md:text-5xl">
              Garanta a sua mesa antes que acabem.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">
              A procura é alta e as mesas são poucas. Reserve a sua agora pelo WhatsApp e participe de uma noite inesquecível por uma causa que importa.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-14 rounded-full px-10 text-base font-medium shadow-elegant"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Reservar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RIFA */}
      <section className="bg-secondary/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={rifaImg}
              alt="Rifa beneficente"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </motion.div>
          <div>
            <motion.span {...fadeUp} className="text-xs uppercase tracking-[0.25em] text-primary">
              Rifa beneficente
            </motion.span>
            <motion.h2 {...fadeUp} className="mt-5 text-3xl md:text-5xl">
              Um bilhete. Muitas vidas transformadas.
            </motion.h2>
            <motion.p {...fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Participe da nossa rifa solidária e concorra a prêmios especiais. Cada bilhete contribui diretamente com os projetos sociais da União Espírita Ramatis — simples, transparente e do coração.
            </motion.p>
            <motion.div {...fadeUp} className="mt-8">
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero participar
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 {...fadeUp} className="text-3xl leading-tight md:text-5xl">
            Venha celebrar.{" "}
            <span className="text-primary">Venha fazer o bem.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="mt-6 text-lg text-muted-foreground">
            Cada mesa reservada, cada rifa, cada presença — tudo se transforma em apoio real para quem mais precisa. Sua noite pode mudar muitas histórias.
          </motion.p>
          <motion.div {...fadeUp} className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full px-10 text-base shadow-elegant"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Reservar minha mesa agora
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground md:px-10">
        <p className="font-display text-base text-foreground">Grande Arraiá da Ilha</p>
        <p className="mt-2">
          Realização: União Espírita Ramatis · Ilha do Governador, Rio de Janeiro
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
