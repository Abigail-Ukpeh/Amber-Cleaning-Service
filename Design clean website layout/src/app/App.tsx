import image_WhatsApp_Image_2026_06_18_at_11_43_41_4 from '@/imports/WhatsApp_Image_2026-06-18_at_11.43.41-4.jpeg'
import image_WhatsApp_Image_2026_06_18_at_11_43_41_3 from '@/imports/WhatsApp_Image_2026-06-18_at_11.43.41-3.jpeg'
import image_WhatsApp_Image_2026_06_18_at_11_43_41_1 from '@/imports/WhatsApp_Image_2026-06-18_at_11.43.41-1.jpeg'
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Star,
  Clock,
  Shield,
  Calendar,
  Home,
  Building2,
  Sparkles,
  RefreshCw,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  BadgeCheck,
  MapPin,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Facebook,
  Instagram,
  Quote,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import amberLogo from "@/imports/WhatsApp_Image_2026-06-18_at_10.21.28.jpeg";

const PINK = "#E8438C";
const TEAL = "#7FD9D4";
const DARK = "#1a1a2e";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = ["Services", "Reviews", "About", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        style={{ background: "#fff", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex-shrink-0 focus:outline-none">
            <div className="rounded-xl overflow-hidden" style={{ height: 48, background: "#000" }}>
              <ImageWithFallback src={image_WhatsApp_Image_2026_06_18_at_11_43_41_4} alt="Amber's Cleaning Service" className="h-full w-auto object-contain" />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium text-gray-600 hover:text-[#E8438C] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:9103789105"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
            style={{ background: PINK }}
          >
            <Phone size={14} />
            (910) 378-9105
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? 320 : 0 }}
        >
          <div className="px-6 pb-5 pt-2 flex flex-col gap-1 border-t border-gray-100">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
              >
                {link}
              </button>
            ))}
            <a
              href="tel:9103789105"
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: PINK }}
            >
              <Phone size={14} /> Call (910) 378-9105
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile floating call button */}
      <a
        href="tel:9103789105"
        className="md:hidden fixed bottom-6 right-5 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full text-white text-sm font-semibold shadow-2xl"
        style={{ background: PINK }}
      >
        <Phone size={16} /> Call Now
      </a>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-[70px] min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border" style={{ borderColor: TEAL, color: TEAL, background: "#f0fafa" }}>
            <Star size={12} fill={TEAL} /> 5.0 Rated · Trusted by Families Across the Area
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: DARK, fontFamily: "'Poppins', sans-serif" }}>
            Spend Less Time{" "}
            <span style={{ color: PINK }}>Cleaning.</span>
            <br />
            More Time{" "}
            <span style={{ color: TEAL }}>Living.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            Affordable, reliable house cleaning for homes and businesses — trusted by clients who keep coming back.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-5 mb-10">
            {[
              { icon: <Star size={14} fill="#f59e0b" stroke="#f59e0b" />, label: "5.0 Google Reviews" },
              { icon: <Clock size={14} style={{ color: TEAL }} />, label: "Open 24 Hours" },
              { icon: <BadgeCheck size={14} style={{ color: PINK }} />, label: "2+ Years Experience" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                {icon} {label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ background: PINK }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:9103789105"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: DARK, color: DARK }}
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>

        {/* Right — photo + badge */}
        <div className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBob3VzZSUyMGNsZWFuaW5nJTIwc3BhcmtsaW5nJTIwaG9tZXxlbnwxfHx8fDE3ODE3NzkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional cleaner mopping a bright modern living room"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#f0fafa" }}>
              <CheckCircle size={18} style={{ color: TEAL }} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: DARK }}>Booked in Under 2 Minutes</p>
              <p className="text-xs text-gray-400">Fast, easy scheduling</p>
            </div>
          </div>
          {/* Decorative dot */}
          <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full opacity-20" style={{ background: PINK }} />
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { icon: <BadgeCheck size={22} style={{ color: PINK }} />, value: "2+ Years", label: "Experience" },
    { icon: <Star size={22} style={{ color: "#f59e0b" }} fill="#f59e0b" />, value: "5.0★", label: "Average Rating" },
    { icon: <Building2 size={22} style={{ color: TEAL }} />, value: "Residential", label: "& Commercial" },
    { icon: <Clock size={22} style={{ color: PINK }} />, value: "24 / 7", label: "Availability" },
  ];

  return (
    <section className="py-10 border-y border-gray-100" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center py-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                {icon}
              </div>
              <p className="text-xl font-bold" style={{ color: DARK }}>{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative mx-auto w-fit">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white" style={{ outline: `4px solid ${TEAL}20` }}>
              <img
                src="https://images.unsplash.com/photo-1647381518264-97ff1835026f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGNsZWFuaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzgxNzc4NzI0fDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Amber, owner and lead cleaner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg whitespace-nowrap" style={{ background: PINK }}>
              Owner &amp; Lead Cleaner
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Meet the Owner</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: DARK }}>
            Hi, I&apos;m Amber — and I take cleaning seriously.
          </h2>
          <div className="flex gap-3 mb-5">
            <Quote size={28} style={{ color: PINK, flexShrink: 0, marginTop: 2 }} />
            <p className="text-gray-500 leading-relaxed text-base">
              Amber has spent over two years building a reputation for thorough, reliable cleaning — residential and commercial. She believes great service shouldn&apos;t come with a high price tag, which is why every client gets the same standard of care at a fair rate. When you book with Amber, you&apos;re not hiring a stranger — you&apos;re working with someone who treats your space like her own.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Fully Insured", "Background Checked", "Pet Friendly"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ borderColor: TEAL, color: TEAL }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Home size={24} />,
      title: "House Cleaning",
      desc: "Thorough room-by-room cleaning for everyday upkeep.",
      price: "Starting at $80",
      color: PINK,
    },
    {
      icon: <Building2 size={24} />,
      title: "Commercial Cleaning",
      desc: "Reliable, consistent cleaning for offices and small businesses.",
      price: "Starting at $120",
      color: TEAL,
    },
    {
      icon: <Sparkles size={24} />,
      title: "Deep Cleaning",
      desc: "Top-to-bottom cleaning for move-ins, move-outs, or special occasions.",
      price: "Starting at $150",
      color: PINK,
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Recurring Plans",
      desc: "Weekly, biweekly, or monthly cleaning on a schedule that fits your life.",
      price: "Starting at $70/visit",
      color: TEAL,
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#f8fffe" }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: TEAL }}>What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: DARK }}>Our Services</h2>
            <div className="mx-auto w-16 h-1 rounded-full" style={{ background: PINK }} />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, title, desc, price, color }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${color}15`, color }}>
                  {icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1" style={{ color: DARK }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <div>
                  <p className="text-xs font-bold mb-3" style={{ color }}>
                    {price}
                  </p>
                  <button className="flex items-center gap-1 text-xs font-semibold transition-colors group-hover:gap-2" style={{ color: PINK }}>
                    Learn More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Nichole Florez",
      initials: "N",
      bg: PINK,
      count: "7 reviews",
      time: "3 years ago",
      text: "Always reliable and does an exceptional job! Positive: Responsiveness, Punctuality, Quality, Professionalism and Value.",
    },
    {
      name: "Amna Fatima",
      initials: "A",
      bg: TEAL,
      count: "4 reviews",
      time: "3 months ago",
      text: "Good, would recommend! The house was spotless when she was done. Will definitely be booking again.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-4">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: TEAL }}>Client Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: DARK }}>What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>
              <span className="font-bold text-lg" style={{ color: DARK }}>5.0</span>
              <span className="text-gray-400 text-sm">— Based on Google Reviews</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {reviews.map(({ name, initials, bg, count, time, text }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: bg }}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: DARK }}>{name}</p>
                    <p className="text-xs text-gray-400">{count}</p>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" stroke="#f59e0b" />)}
                    </div>
                    <p className="text-xs text-gray-400">{time}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Join dozens of happy clients across the area</p>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border-2 transition-colors hover:bg-pink-50"
              style={{ borderColor: PINK, color: PINK }}
            >
              See All Reviews on Google <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    {
      icon: <Shield size={26} />,
      title: "100% Satisfaction Guarantee",
      desc: "Not happy? We come back and make it right — no questions asked.",
    },
    {
      icon: <BadgeCheck size={26} />,
      title: "Background-Checked & Trustworthy",
      desc: "Every cleaner is vetted so you feel comfortable letting us into your space.",
    },
    {
      icon: <Calendar size={26} />,
      title: "Flexible Scheduling, No Contracts",
      desc: "Book once or set a recurring schedule. Cancel anytime, no strings attached.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#f0fafa" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: DARK }}>Why Choose Amber&apos;s?</h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map(({ icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <div className="text-center flex flex-col items-center gap-4 px-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: TEAL }}>
                  {icon}
                </div>
                <h3 className="font-bold text-base" style={{ color: DARK }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 transition-shadow placeholder:text-gray-400";

  return (
    <section id="contact" className="py-24 text-white" style={{ background: `linear-gradient(135deg, ${PINK} 0%, #c2337a 60%, #7a2050 100%)` }}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left CTA */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-pink-200">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Ready for a Spotless Space?
          </h2>
          <p className="text-pink-100 leading-relaxed mb-8 text-lg">
            Call now or send a message — most requests get a response within the hour.
          </p>
          <a
            href="tel:9103789105"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform"
            style={{ background: "#fff", color: PINK }}
          >
            <Phone size={20} /> Call (910) 378-9105
          </a>
          <div className="mt-8 flex flex-col gap-3">
            {[
              { icon: <Clock size={16} />, text: "Open 24 hours, 7 days a week" },
              { icon: <MapPin size={16} />, text: "Proudly serving the greater area" },
              { icon: <CheckCircle size={16} />, text: "No obligation, no pressure" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-pink-100 text-sm">
                <span className="text-pink-200">{icon}</span> {text}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right Form */}
        <FadeIn delay={150}>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#f0fafa" }}>
                  <CheckCircle size={32} style={{ color: TEAL }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: DARK }}>Message Received!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-lg mb-1" style={{ color: DARK }}>Request My Free Quote</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                      style={{ paddingLeft: 34, focusRingColor: PINK } as React.CSSProperties}
                    />
                  </div>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                      style={{ paddingLeft: 34 }}
                    />
                  </div>
                </div>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                    style={{ paddingLeft: 34 }}
                  />
                </div>
                <div className="relative">
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputCls + " appearance-none cursor-pointer"}
                    style={{ color: form.service ? "#1a1a2e" : "#9ca3af" }}
                  >
                    <option value="" disabled>Service Needed</option>
                    <option>House Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Recurring Plan</option>
                  </select>
                </div>
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3 top-3.5 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Any additional details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputCls + " resize-none"}
                    style={{ paddingLeft: 34 }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-bold shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
                  style={{ background: PINK }}
                >
                  Request My Free Quote
                </button>
                <p className="text-center text-xs text-gray-400">No obligation, no pressure — just a fast response.</p>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: DARK }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden w-fit" style={{ background: "#000" }}>
              <ImageWithFallback src={amberLogo} alt="Amber's Cleaning Service" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              Professional cleaning services for homes and businesses — done right, every time.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Contact</h4>
            <a href="tel:9103789105" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <Phone size={14} style={{ color: PINK }} /> (910) 378-9105
            </a>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={14} style={{ color: TEAL }} /> Open 24 Hours, 7 Days
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} style={{ color: PINK }} /> Proudly serving the greater area
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Quick Links</h4>
            {["Services", "Reviews", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="text-left text-sm hover:text-white transition-colors w-fit"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Amber&apos;s Cleaning Service. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <Services />
      <Reviews />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
