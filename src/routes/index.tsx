import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Countdown } from "@/components/Countdown";
import { Prizes } from "@/components/Prizes";
import { WHATSAPP_URL } from "@/lib/constants";
import heroImg from "@/assets/hero-arraia.jpg";
import eventoQuadrilha from "@/assets/evento-quadrilha.jpg";
import eventoBanda from "@/assets/evento-banda.jpg";
import eventoCantor from "@/assets/evento-cantor.jpg";
import eventoBarracas from "@/assets/evento-barracas.jpg";
import eventoMesas from "@/assets/evento-mesas.jpg";
import eventoSalao from "@/assets/evento-salao.jpg";
import eventoDanca1 from "@/assets/evento-danca1.jpg";
import eventoDanca2 from "@/assets/evento-danca2.jpg";
import eventoQuadrilhaFantasia from "@/assets/evento-quadrilha-fantasia.jpg";

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
              Grande Arraiá da Ilha
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-4xl leading-[1.05] text-background sm:text-5xl md:text-6xl lg:text-7xl"
              >
                O MAIOR ARRAIÁ BENEFICENTE DA{" "}
                <em className="not-italic text-accent">ILHA DO GOVERNADOR</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-6 max-w-xl text-lg text-background/85 md:text-xl"
              >
                Tradição, alegria e solidariedade em uma experiência única.
                <br /><br />
                <span className="text-background">6 de junho de 2026 na Associação Atlética Portuguesa.</span>
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
      <section className="relative bg-secondary/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Abertura editorial */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">
                A noite
              </span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
                Não dá pra<br />
                <em className="not-italic text-primary">explicar.</em>
                <br />
                Só vivendo.
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl lg:col-span-7 lg:pt-4"
            >
              <p>
                Tem um momento, lá pelas dez da noite, em que a sanfona puxa um
                xote e <span className="text-foreground">você percebe que está dançando com gente que acabou de conhecer</span> — e que, no fim das contas, parece amigo de infância.
              </p>
              <p>
                É isso que a gente não consegue colocar no cartaz. A festa é
                feita de pequenas coisas que acontecem ao mesmo tempo, e que só
                fazem sentido juntas.
              </p>
            </motion.div>
          </div>

          {/* Imagem imersiva com momentos sobrepostos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-20 overflow-hidden rounded-[2rem] shadow-elegant"
          >
            <img
              src={eventoQuadrilhaFantasia}
              alt="Quadrilha em fantasias coloridas dançando no Arraiá da Ilha 2025"
              loading="lazy"
              className="h-[70vh] min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-background md:p-14">
              <p className="max-w-2xl font-display text-2xl leading-[1.2] text-background md:text-4xl">
                "Acho que faz três horas que a gente tá aqui. Não parece."
              </p>
              <p className="mt-3 text-sm text-background/70 md:text-base">
                — frase mais ouvida no Arraiá de 2025
              </p>
            </div>
          </motion.div>

          {/* Momentos como linha do tempo — com fotos reais */}
          <div className="mt-24 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-16">
            {[
              {
                hora: "19h30",
                titulo: "O cheiro chega antes da gente.",
                texto:
                  "Milho assando, canela no quentão, alho dourando na barraca do pastel. Você ainda nem entrou direito e já está com fome.",
                img: eventoBarracas,
                alt: "Barracas decoradas com bandeirinhas no Arraiá da Ilha",
              },
              {
                hora: "21h00",
                titulo: "A mesa se enche, a conversa também.",
                texto:
                  "Famílias inteiras se sentam juntas, gente que não se vê o ano todo se reencontra, e o salão da Portuguesa vira sala de estar de todo mundo.",
                img: eventoMesas,
                alt: "Famílias reunidas nas mesas do salão durante o Arraiá",
              },
              {
                hora: "22h15",
                titulo: "Alguém grita: 'Anarriê!'",
                texto:
                  "E de repente todo mundo vira par de alguém. Quem disse que não sabia dançar, dança. Quem jurou que ia só assistir, está no meio da roda.",
                img: eventoQuadrilha,
                alt: "Pessoas dançando quadrilha vestidas com camisas da equipe",
              },
              {
                hora: "23h30",
                titulo: "A banda puxa o samba — e o salão treme.",
                texto:
                  "Cavaquinho, pandeiro, voz que enche o ginásio. A música ao vivo é coisa séria aqui, e ninguém fica parado por muito tempo.",
                img: eventoBanda,
                alt: "Banda tocando ao vivo no palco do Arraiá da Ilha",
              },
            ].map((m, i) => (
              <motion.div
                key={m.hora}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={m.img}
                    alt={m.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 border-l-2 border-primary/40 pl-5">
                  <div className="font-display text-xs tracking-[0.3em] text-primary">
                    {m.hora}
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-foreground md:text-3xl">
                    {m.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {m.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="mx-auto mt-24 max-w-3xl text-center font-display text-2xl leading-tight text-foreground md:text-3xl"
          >
            E o melhor: cada gole, cada prato, cada rifa{" "}
            <span className="text-primary">vira ajuda real</span> pra alguém que precisa.
          </motion.p>
        </div>
      </section>

      {/* GALERIA — Edição 2025 em fotos */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <motion.span {...fadeUp} className="text-xs uppercase tracking-[0.25em] text-primary">
                Edição 2025 · Em fotos
              </motion.span>
              <motion.h2 {...fadeUp} className="mt-5 text-3xl md:text-5xl">
                Não acredita?{" "}
                <span className="text-muted-foreground">Olha aí.</span>
              </motion.h2>
            </div>
            <motion.p {...fadeUp} className="max-w-sm text-base text-muted-foreground md:text-right">
              Fotos reais da última edição. Sem filtro, sem montagem — só gente feliz.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: eventoCantor, alt: "Músico cantando ao vivo no palco do Arraiá", span: "col-span-2 row-span-2 aspect-square" },
              { src: eventoDanca2, alt: "Dançarino animando o público no Arraiá", span: "aspect-square" },
              { src: eventoSalao, alt: "Vista ampla do salão da Portuguesa lotado", span: "aspect-square" },
              { src: eventoDanca1, alt: "Apresentação de dança junina no Arraiá", span: "aspect-square" },
              { src: eventoQuadrilha, alt: "Equipe organizadora dançando junto", span: "aspect-square" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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

      {/* IMPACTO 2025 */}
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
              Edição 2025 · Retrospectiva
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-3xl md:text-5xl"
            >
              Números que transformam{" "}
              <span className="text-muted-foreground">vidas.</span>
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { number: "700+", label: "Pessoas presentes", desc: "Uma noite de celebração e solidariedade", Icon: Users },
              { number: "450kg", label: "Alimentos arrecadados", desc: "Doações que fizeram a diferença", Icon: Package },
              { number: "200+", label: "Famílias beneficiadas", desc: "Apoio direto a quem mais precisa", Icon: Heart },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl transition-opacity group-hover:opacity-150" />
                <div className="relative">
                  <item.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <div className="mt-6 font-display text-5xl text-foreground md:text-6xl">
                    {item.number}
                  </div>
                  <h3 className="mt-2 text-lg font-medium">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÊMIOS DA RIFA 2026 */}
      <Prizes />

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
