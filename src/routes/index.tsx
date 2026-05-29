import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Menu,
  X,
  Trophy,
  Scissors,
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  Quote,
  ArrowUp,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroSofa from "@/assets/hero-sofa.jpg";
import catLshape from "@/assets/cat-lshape.jpg";
import catRecliner from "@/assets/cat-recliner.jpg";
import catSofaset from "@/assets/cat-sofaset.jpg";
import catSofabed from "@/assets/cat-sofabed.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catPremium from "@/assets/cat-premium.jpg";
import catCompact from "@/assets/cat-compact.jpg";
import craftArtisan from "@/assets/craft-artisan.jpg";
import craftMaterials from "@/assets/craft-materials.jpg";
import craftQuality from "@/assets/craft-quality.jpg";
import studio from "@/assets/studio.jpg";

const WA_NUMBER = "917386898855";
const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReCreate Living — Crafted for Comfort | The Palagani Legacy" },
      {
        name: "description",
        content:
          "Premium handcrafted sofas, recliners, sofa cum beds and custom seating from ReCreate Living, Vijayawada. 35+ years of the Palagani legacy.",
      },
      { property: "og:title", content: "ReCreate Living — Crafted for Comfort" },
      {
        property: "og:description",
        content:
          "You dream it, we recreate it. Custom sofas handcrafted by skilled artisans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const collections = [
  { name: "L-Shape Sofas", img: catLshape },
  { name: "Recliners", img: catRecliner },
  { name: "Sofa Sets", img: catSofaset },
  { name: "Sofa Cum Beds", img: catSofabed },
  { name: "Custom Sofas", img: catCustom },
  { name: "Premium Sofas", img: catPremium },
  { name: "Compact Sofas", img: catCompact },
];

const process = [
  {
    n: "1",
    title: "Send Your Design",
    desc: "Share your idea or inspiration with us on WhatsApp.",
    Icon: MessageCircle,
  },
  {
    n: "2",
    title: "Get a Quote",
    desc: "We provide the best price for your dream sofa.",
    Icon: Scissors,
  },
  {
    n: "3",
    title: "We Build & Deliver",
    desc: "Handcrafted with care and delivered to your home.",
    Icon: Truck,
  },
];

const craft = [
  { img: craftArtisan, title: "Expertly Crafted", sub: "by Skilled Artisans" },
  { img: craftMaterials, title: "Premium Materials", sub: "for Lasting Comfort" },
  { img: craftQuality, title: "Quality Checked", sub: "Before Every Delivery" },
];

const reviews = [
  {
    name: "Rajesh",
    city: "Vijayawada",
    text: "Excellent quality and finishing. Exactly how we wanted!",
  },
  {
    name: "Anitha",
    city: "Guntur",
    text: "They recreated our design perfectly. Very happy with the service.",
  },
  {
    name: "Karthik",
    city: "Hyderabad",
    text: "Best comfort and premium look. Totally worth it!",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Collections", href: "#collections" },
  { label: "About Us", href: "#craft" },
  { label: "Why Choose Us", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="ReCreate Living" className="h-12 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = l.href.replace("#", "");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", l.href);
                }}
                className="text-sm tracking-wide text-foreground/85 hover:text-gold transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Hi ReCreate Living, I'd like to enquire about a sofa.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    const id = l.href.replace("#", "");
                    setTimeout(() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      history.replaceState(null, "", l.href);
                    }, 50);
                  }}
                  className="py-2 text-foreground/85 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}

      </header>

      <main id="home">

        {/* HERO */}
        <section className="relative">
          <div className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
            <img
              src={heroSofa}
              alt="Luxury navy velvet sofa in elegant living room"
              width={1920}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-overlay)" }}
            />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex items-end lg:items-center">
              <div className="pb-16 lg:pb-0 max-w-2xl">
                <span className="divider-gold text-gold text-xs tracking-[0.3em] uppercase">
                  The Palagani Legacy
                </span>
                <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream">
                  You Dream It.
                  <br />
                  We <span className="text-gradient-gold">ReCreate</span> It.
                </h1>
                <p className="mt-5 text-base sm:text-lg text-cream/80 max-w-lg">
                  Handcrafted sofas, recliners and custom seating — designed for
                  comfort, built to last generations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={waLink("Hi! I'd like to discuss a custom sofa.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold hover:translate-y-[-1px] transition"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                  <a
                    href="#collections"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-medium text-cream hover:bg-gold/10 transition"
                  >
                    Explore Collections <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="border-y border-border/60 bg-navy">
            <div className="mx-auto max-w-7xl grid grid-cols-3 gap-4 px-6 lg:px-10 py-8">
              {[
                { Icon: Trophy, top: "35+", label: "Years of Experience" },
                { Icon: Scissors, top: "Custom", label: "Made For You" },
                { Icon: Truck, top: "Delivered", label: "To Your Home" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center text-center gap-2">
                  <t.Icon className="h-7 w-7 text-gold" />
                  <div className="font-display text-lg text-cream">{t.top}</div>
                  <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-cream/60">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" className="bg-cream text-navy-deep py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">
                Explore Our
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-navy-deep">
                Collections
              </h2>
              <div className="mt-4 flex justify-center">
                <span className="divider-gold text-gold text-xs">✦</span>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((c) => (
                <a
                  key={c.name}
                  href={waLink(`Hi! I'm interested in your ${c.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-gold transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-display text-xl text-navy-deep">{c.name}</h3>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Custom CTA */}
            <div className="mt-16 rounded-3xl bg-navy-deep text-cream p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left max-w-xl">
                <h3 className="font-display text-3xl sm:text-4xl">
                  Send us any sofa design.
                  <br />
                  We'll <span className="text-gradient-gold">recreate</span> it for you.
                </h3>
                <p className="mt-3 text-cream/70">
                  Share a photo, sketch or screenshot on WhatsApp — we'll handle the rest.
                </p>
              </div>
              <a
                href={waLink("Hi! Here's a design I'd like to recreate:")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-gold whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" /> Send Design on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-cream text-navy-deep pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl sm:text-5xl text-navy-deep">
                Our Process
              </h2>
              <div className="mt-4 flex justify-center">
                <span className="divider-gold text-gold text-xs">✦</span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {process.map((p) => (
                <div
                  key={p.n}
                  className="relative rounded-2xl bg-white p-8 shadow-card border border-gold/15"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-navy-deep font-semibold">
                      {p.n}
                    </span>
                    <p.Icon className="h-7 w-7 text-navy-deep/70" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-navy-deep">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-navy-deep/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRAFTSMANSHIP */}
        <section id="craft" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">
                Craftsmanship
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-cream">
                You Can Trust
              </h2>
              <div className="mt-4 flex justify-center">
                <span className="divider-gold text-gold text-xs">✦</span>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {craft.map((c) => (
                <figure
                  key={c.title}
                  className="overflow-hidden rounded-2xl bg-navy border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      width={1000}
                      height={700}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-6 text-center">
                    <h3 className="font-display text-xl text-cream">{c.title}</h3>
                    <p className="text-cream/70 text-sm mt-1">{c.sub}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-gold/30 bg-navy p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
                <div className="text-center leading-tight">
                  <div className="font-display text-xl font-semibold">35+</div>
                  <div className="text-[9px] tracking-widest">YEARS</div>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-2xl text-cream">
                  35+ Years of Palagani Legacy
                </h3>
                <p className="text-cream/70 mt-1">
                  Timeless quality. Trusted by generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-background pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">
                Loved by
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-cream">
                Happy Customers
              </h2>
              <div className="mt-4 flex justify-center">
                <span className="divider-gold text-gold text-xs">✦</span>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <article
                  key={r.name}
                  className="relative rounded-2xl bg-cream text-navy-deep p-7 shadow-card"
                >
                  <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/40" />
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-navy-deep/85 leading-relaxed">"{r.text}"</p>
                  <div className="mt-5 pt-5 border-t border-navy-deep/10">
                    <div className="font-medium">– {r.name}</div>
                    <div className="text-sm text-navy-deep/60">{r.city}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT STUDIO */}
        <section id="visit" className="bg-background pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">
                Visit Our
              </span>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-cream">
                Experience Studio
              </h2>
              <div className="mt-4 flex justify-center">
                <span className="divider-gold text-gold text-xs">✦</span>
              </div>
            </div>

            <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={studio}
                  alt="ReCreate Living showroom"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-gold">
                  <MapPin className="h-5 w-5" />
                  <span className="font-display text-2xl">Vijayawada | Tadepalli</span>
                </div>
                <p className="mt-4 text-cream/80 text-lg max-w-md mx-auto lg:mx-0">
                  Experience our collections in person. Touch the fabrics, feel the
                  comfort, and discover your perfect sofa.
                </p>
                <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href="https://maps.google.com/?q=Tadepalli+Vijayawada"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold"
                  >
                    <MapPin className="h-4 w-4" /> Get Directions
                  </a>
                  <a
                    href="tel:+917386898855"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-medium text-cream hover:bg-gold/10"
                  >
                    <Phone className="h-4 w-4" /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="ReCreate Living" className="h-16 w-auto" />
            <p className="mt-4 text-cream/70 text-sm">
              Crafted for Comfort.
              <br />
              <span className="text-gold">The Palagani Legacy.</span>
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 hover:text-gold flex items-center gap-2"
                  >
                    <ChevronRight className="h-3 w-3 text-gold" /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+917386898855" className="hover:text-gold">
                  +91 7386 89 8855
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+919949819132" className="hover:text-gold">
                  +91 9949 81 9132
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:recreatelivingstudio@gmail.com" className="hover:text-gold break-all">
                  recreatelivingstudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Vijayawada | Tadepalli
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between text-xs text-cream/60">
            <p>© {new Date().getFullYear()} ReCreate Living. All Rights Reserved.</p>
            <a href="#top" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi ReCreate Living!")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-gold hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
