import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import heroFlowers from "@/assets/hero-flowers.jpg";
import vizagBeach from "@/assets/vizag-beach.jpg";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingHearts from "@/components/FloatingHearts";
import surprisePhoto from "@/assets/surprise-chinni.png";
import memory1 from "@/assets/memory-1.png";
import memory2 from "@/assets/memory-2.png";
import memory3 from "@/assets/memory-3.png";
import memory4 from "@/assets/memory-4.png";
import memory5 from "@/assets/memory-5.png";
import memory6 from "@/assets/memory-6.png";

const FadeSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const letterParagraphs = [
  "Na life lo oka part nuvvu avuthav ani ninnu kalisinapudu anukoledhu.\nninnu first time kalisina moment lo, \"enti ee vidu?\" ani nuvvu na meeda padda chiraku kuda ippudu cute ga anipistundi.",
  "Natho matladina calls, ninnu first time VC lo chusina kshanam,\nsiggu tho unna ni kallalo aa happiness chusina aanandham — adhi marchipoleni moment.",
  "Nuvvu na meeda aligina first time,\nnenu Ganesh Nimarjananiki vellanu ani cheppina appudu,\nna life lo anni sorry lu cheppina first moment adhe.",
  "Enni godavalu ayina, nannu vadili vellina, malli vachi natho undi nannu choose chesinanduku 🫂\nKonni sarlu nenu ni meeda chiraku padi, thittina kuda — nannu vadalakunda,\n\"na bujji dhana\" nannu preminchav.",
  "Nenu em chesina forgive chesi, ni life lo naku oka place ichav — adhi chala goppa vishayam 🫂\nChaala ups and downs tarvatha, ivala ila nitho happy ga unnanduku God ki thanks.",
  "Nuvvu first time black saree lo pics pampinappudu,\nlipstick konchem ekkuva ayindhi anukunna, kani\n\"Ee natural beauty ki make-up set avasaram ledu\" ani anipinchindi.",
  "Appudu nuvvu konchem siggu, konchem happiness, konchem anxiety tho\n\"Bagundha bava?\" ani adiginappudu — na heart lo butterflies vachayi.",
  "Nuvvu na kosam rasina first love letter 💖\naa feeling ni words lo cheppalem — beyond happiness.",
  "Enduku niku Chinni ane name petalanipinchindo thelidhu,\nkani \"I love you\" kanna \"Chinni\" ani pilavadame naku ishtam ayipoyindi.",
  "Starting lo, na birthday appudu nuvvu 12 ki cheppina wishes\nna life lo oka kottha feeling ni techayi.",
  "Nenu niku dooram avthunna ani cheppinappudu,\nni feelings nannu nitho kalisi undela chesayi.\nEmotions ante enti ani clear ga chupinchina person nuvvu.",
  "Nuvvu naku ichina memories — lifetime treasure.\nNuvvu ichina surprise ni nundi vachindhi ani telisinappudu,\nkopam kadhu — happy tears vachayi.",
  "God naku unexpected ga ichina greatest gift — nuvvu.",
  "Blue saree lo kundanapu bomma la untav chinni.\nYellow, gold, red, pink hoddie — colors niku baga suit avuthayi.",
  "Na amma daggara chusina premanu,\nammayi nundi first time chusindhi — ninnu daggara nundi.",
  "Epudu strong ga undali.\nNi life lo independent ga, ni kalala kosam nilabadali.\nEvaru ni decisions ni question cheyyakudadhu.",
  "Andharila nuvvu kaadhu chinni.\nNa POV lo — andharikante oka mettu paina untav.",
  "Nitho unde time lo Doraemon gadget tho time speed penchinatlu anipistundi.\nNimishalu teliyavu, gantalu karigipothayi.",
  "Nuvvu vachaka natho nenu matladukovadam start ayyindi.\nCalls, kaburlu, godavalu, \npics, gifts, thittukovatalu, muddhadukovatalu — anni nithone.",
  "Oka shooting star la vachi,\nNa life lo land ayipoyav chinni — idhi lifetime memorable.",
  "Na kosam nuvvu chesina sacrifices ki 🫂\nThank you chinni — everything ki.",
  "Nuvvu na happiness kosam alochinchi,\nnannu na kanna ekkuva preminchav anipistundi.Na kante nuve ekuva express chesthavu ani anipistadhi.",
  "First time nuvu naku surprise ichinappudu naku chala happy ga unde.\nNila nenu ivvalekapoyanu ani konchem badha,\nkani future lo tappakunda ista oka manchi suprise.",
  "Nenu ninnu chaala sarlu hurt chesanu,\nkonni sarlu edpinchanu.\nSorry chinni — na tappulaki.",
  "Thank you chinni.\nKonni sarlu nitho unna nimishala valla nuvvu disturb ayina kuda,\nna santhosham kosam nannu nannu ga accept chesinandhuku.",
  "Mi amma ki cheppu —\nVishwa lanti vadu nijam gane unadu amma ani.",
  "Idhi niku E roju pampidham anukuna kani mudhe pampesa.But some thing different ga undali ani ila chesi niku send chesa.",
  "Finally chinni 💖\nI love you so much ra chinni.",
  "Love you ye potti dhana 🥰",
];

const memories = [
  { img: memory1, caption: "My Beautiful Chinni 💕" },
  { img: memory2, caption: "Your Handsome Bava 😎" },
  { img: memory3, caption: "Together Forever 🫂" },
  { img: memory4, caption: "Heart to Heart 💖" },
  { img: memory5, caption: "The Proposal Moment 🌹" },
  { img: memory6, caption: "Cutest Moment Ever 🥰" },
];

const MemoryCard = ({ img, caption, index }: { img: string; caption: string; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="cursor-pointer perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full aspect-[3/4] preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Tap to Open */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border-2 border-primary/20 shadow-lg flex flex-col items-center justify-center gap-4 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.span
            className="text-5xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💝
          </motion.span>
          <p className="font-display text-lg text-primary font-semibold">Tap to Open</p>
          <p className="font-body text-sm text-muted-foreground italic">A memory awaits...</p>
        </div>

        {/* Back - Photo */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img src={img} alt={caption} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="font-display text-sm md:text-base text-white text-center">{caption}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MemoriesSection = () => (
  <section className="py-20 px-4">
    <FadeSection className="text-center mb-12">
      <span className="text-3xl mb-4 block">📸</span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
        Our Memories
      </h2>
      <p className="font-body text-muted-foreground mt-2 italic">Tap each card to reveal a memory 💕</p>
      <div className="mt-4 mx-auto w-24 h-px bg-primary/40" />
    </FadeSection>
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {memories.map((m, i) => (
        <MemoryCard key={i} img={m.img} caption={m.caption} index={i} />
      ))}
    </div>
  </section>
);

const SecretSurprise = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4">
      <FadeSection className="max-w-2xl mx-auto text-center">
        <span className="text-3xl mb-4 block">🎁</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          A Secret Surprise
        </h2>
        <p className="font-body text-muted-foreground mb-8 italic">
          Something special is waiting for you...
        </p>

        {!isOpen ? (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="mx-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.4)", "0 0 0 16px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Open Your Surprise ✨
          </motion.button>
        ) : null}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
                <img
                  src={surprisePhoto}
                  alt="Happy Valentine's Day Chinni"
                  className="w-full h-auto"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 font-display text-xl md:text-2xl text-primary italic"
              >
                Happy Valentine's Day Chinniluuu 💖
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeSection>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-love-gradient">
      <FloatingHearts />
      <MusicPlayer />
      {/* Hero / Welcome */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFlowers} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-love-gradient opacity-70" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <motion.span
            className="text-6xl md:text-8xl inline-block mb-6"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ❤️
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-love-gradient mb-4">
            For My Chinni
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground italic">
            A letter written from the heart...
          </p>
          <motion.div
            className="mt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-muted-foreground text-sm tracking-widest uppercase">Scroll down</span>
            <div className="mt-2 mx-auto w-px h-8 bg-primary/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Love Letter */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeSection className="text-center mb-16">
            <span className="text-3xl mb-4 block">💌</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              My Love Letter
            </h2>
            <div className="mt-4 mx-auto w-24 h-px bg-primary/40" />
          </FadeSection>

          <FadeSection delay={0.2}>
            <p className="font-display text-2xl md:text-3xl italic text-primary mb-10 text-center">
              Chinni,
            </p>
          </FadeSection>

          <div className="space-y-8">
            {letterParagraphs.map((para, i) => (
              <FadeSection key={i} delay={0.1}>
                <p className="font-body text-base md:text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                  {para}
                </p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vizag Beach Dream */}
      <section className="relative py-0">
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src={vizagBeach}
            alt="Vizag beach sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <FadeSection className="relative z-10 text-center px-6 max-w-2xl">
            <span className="text-4xl mb-4 block">🌊</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              A Dream I Hold Close
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed italic">
              Nitho Vizag beach lo walk chesthu, waves chusthu, ni cheyyi pattukoni,
              aa air ni aswadinchadam — adhi na lifetime dream.
              Nenu beach ki vellinappudu kuda ninnu miss ayyanu,
              ippudu kuda miss avthunna — ni pakkana lekapothunna ani.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Our Memories */}
      <MemoriesSection />

      {/* Secret Surprise */}
      <SecretSurprise />

      {/* Final I Love You */}
      <section className="py-28 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-love-gradient leading-tight">
            I Love You So Much
            <br />
            Chinni 💖
          </h2>
          <motion.p
            className="mt-8 text-muted-foreground font-body text-lg italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            — Forever & Always —
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          Made with ❤️ for my Chinni
        </p>
      </footer>
    </div>
  );
};

export default Index;
