/*
alphaXM - React + TypeScript + Tailwind single-file starter
File: alphaXM_site.tsx

How to use:
1) Create a new Vite React + TS project: `npm create vite@latest my-alpha -- --template react-ts`
2) Install dependencies:
   npm install framer-motion lucide-react
3) Install TailwindCSS (follow Tailwind + Vite guide):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   // then add the Tailwind config and directives as usual
4) Replace src/App.tsx with this file's default export component (or import it).
5) Start dev server: `npm run dev`

Notes:
- This is a single-file React component meant as a full landing + services + projects + contact UI.
- It uses Tailwind utility classes and Framer Motion for animations.
- Replace placeholder data (team, portfolio links, contact API URL) with your real content.
*/

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowRight, Phone } from "lucide-react";

type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  link?: string;
};

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "DEFI Lending dApp",
    desc: "End-to-end lending protocol with stable interest, oracle integrations, and frontend dashboard.",
    tags: ["Ethereum", "Solidity", "React"],
    link: "#",
  },
  {
    id: "p2",
    title: "AI-powered E-commerce",
    desc: "Personalized product recommendations, dynamic imagery, and automated A/B testing.",
    tags: ["AI", "Node.js", "Tailwind"],
    link: "#",
  },
  {
    id: "p3",
    title: "Onchain Game Marketplace",
    desc: "NFT-based game items, secure minting flow, and marketplace UX.",
    tags: ["Solana", "Rust", "Web3"],
    link: "#",
  },
];

export default function AlphaXMSite() {
  const [active, setActive] = useState<
    "home" | "services" | "projects" | "contact"
  >("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Smooth scroll when active changes
    // const id = "#" + active;
    const el = document.getElementById(active);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      // Demo: POST to your real API endpoint here.
      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send — replace with your contact API.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-black from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
      {/* Nav */}
      <header className="fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActive("home")}
          >
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 12h18"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3v18"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
            <div>
              <div className="text-sm font-bold tracking-tight">AlphaXM</div>
              <div className="text-xs opacity-70">Web3 • AI • Product</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActive("services")}
              className="text-sm hover:text-white transition"
            >
              Services
            </button>
            <button
              onClick={() => setActive("projects")}
              className="text-sm hover:text-white transition"
            >
              Projects
            </button>
            <button
              onClick={() => setActive("contact")}
              className="text-sm hover:text-white transition"
            >
              Contact
            </button>
            <a
              href="#"
              className="ml-3 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold"
            >
              Get a Proposal <ArrowRight size={16} />
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => {
                const m = document.getElementById("mobileMenu");
                if (m) m.classList.toggle("hidden");
              }}
              className="p-2 bg-slate-800 rounded-lg"
            >
              Menu
            </button>
          </div>
        </div>
        <div
          id="mobileMenu"
          className="md:hidden hidden bg-slate-900/80 border-t border-slate-700"
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setActive("services");
                document.getElementById("mobileMenu")?.classList.add("hidden");
              }}
              className="text-left"
            >
              Services
            </button>
            <button
              onClick={() => {
                setActive("projects");
                document.getElementById("mobileMenu")?.classList.add("hidden");
              }}
              className="text-left"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActive("contact");
                document.getElementById("mobileMenu")?.classList.add("hidden");
              }}
              className="text-left"
            >
              Contact
            </button>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Get a Proposal
            </a>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              >
                We build modern web products —{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                  AI-driven
                </span>{" "}
                &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-300">
                  blockchain-native
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-6 text-slate-300 max-w-2xl"
              >
                End-to-end web development, lifecycle management, and dApp
                engineering. From idea and design to delivery and long-term
                operations — we integrate cutting-edge AI to accelerate UX and
                blockchain to secure value.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={() => setActive("contact")}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-500 px-5 py-3 rounded-xl shadow-lg font-semibold"
                >
                  Get a Proposal <ArrowRight size={16} />
                </a>
                <a
                  href="#projects"
                  onClick={() => setActive("projects")}
                  className="inline-flex items-center gap-3 bg-slate-800/60 px-4 py-3 rounded-xl font-semibold hover:bg-slate-800"
                >
                  See our Work
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                <div className="p-4 rounded-lg bg-slate-800/40">
                  <div className="text-xs uppercase opacity-80">
                    Avg delivery
                  </div>
                  <div className="text-lg font-bold">6–12 weeks</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/40">
                  <div className="text-xs uppercase opacity-80">Focus</div>
                  <div className="text-lg font-bold">Web + AI + Blockchain</div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-3xl p-6 shadow-xl border border-slate-700"
              >
                {/* Hero visual: stylized dashboard + token + AI node */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">
                          Active Projects
                        </div>
                        <div className="text-xl font-bold">12</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold">
                          Live
                        </div>
                        <div className="text-xs text-slate-400">
                          uptime 99.97%
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 h-36 rounded-lg bg-gradient-to-br from-indigo-700/20 to-pink-700/10 p-3 flex items-end">
                      <div className="w-full h-24 rounded-lg bg-gradient-to-t from-black/10 to-white/2" />
                    </div>
                  </div>

                  <div className="rounded-xl p-3 bg-gradient-to-br from-black/10 to-white/2">
                    <div className="text-xs text-slate-300">AI Pipelines</div>
                    <div className="mt-3 text-sm">
                      Vector search • NLU • Auto-ops
                    </div>
                  </div>
                  <div className="rounded-xl p-3 bg-gradient-to-br from-black/10 to-white/2">
                    <div className="text-xs text-slate-300">Blockchain</div>
                    <div className="mt-3 text-sm">
                      Smart contracts • Bridges • Wallets
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* floating CTA strip */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <div className="bg-slate-800/40 px-6 py-3 rounded-full shadow-md backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div>
                  We ship design → MVP → production with continuous ops.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <div>
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-3xl font-bold"
              >
                Services
              </motion.h2>
              <p className="mt-2 text-slate-300 max-w-xl">
                We offer full lifecycle services tailored for startups and
                enterprises combining web engineering, AI integrations, and
                blockchain dApp development.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                onClick={() => setActive("contact")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-2 rounded-lg shadow"
              >
                Request a Call
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Product & UX"
              desc="Research, design sprint, prototypes, and high-converting UX flows."
              icon="brush"
            />
            <ServiceCard
              title="Web Engineering"
              desc="Frontend (React/Next), backend (Node/Golang), and infra with CI/CD."
              icon="code"
            />
            <ServiceCard
              title="AI Integrations"
              desc="LLMs, retrieval-augmented generation, auto-labeling, multimodal pipelines."
              icon="cpu"
            />
            <ServiceCard
              title="Blockchain dApps"
              desc="Smart contract design, audits, bridges, wallets, and tokenomics."
              icon="box"
            />
            <ServiceCard
              title="DevOps & SRE"
              desc="Kubernetes, observability, infra-as-code, and production runbooks."
              icon="cloud"
            />
            <ServiceCard
              title="Managed Lifecycle"
              desc="SLA-backed maintenance, feature sprints, and growth engineering."
              icon="life"
            />
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-transparent to-slate-900/40"
        >
          <div className="flex items-center justify-between">
            <div>
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-3xl font-bold"
              >
                Selected Projects
              </motion.h2>
              <p className="mt-2 text-slate-300">
                A few case-studies that show our approach — shipping polished UX
                and secure blockchain flows.
              </p>
            </div>
            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-800/60"
              >
                View All
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_PROJECTS.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="text-xs text-slate-400">Case Study</div>
                </div>
                <p className="mt-3 text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-slate-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link}
                    className="text-sm font-semibold text-indigo-300"
                  >
                    Explore
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActive("contact")}
                    className="inline-flex items-center gap-2 bg-indigo-600/80 px-3 py-2 rounded-lg"
                  >
                    Hire Us <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-slate-700 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">Start a project with us</h3>
                <p className="mt-2 text-slate-300">
                  Tell us about the problem you want to solve — we’ll propose a
                  pragmatic plan and an MVP roadmap.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-700/40">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="font-semibold">hello@alphaxm.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-700/40">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Call</div>
                      <div className="font-semibold">+1 (555) 555‑1234</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <a href="#" className="p-2 rounded-md bg-slate-800/40">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="p-2 rounded-md bg-slate-800/40">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300">Your name</label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800/30 border border-slate-700"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Email</label>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800/30 border border-slate-700"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={4}
                      className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800/30 border border-slate-700"
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-2 rounded-lg font-semibold"
                    >
                      {sending ? "Sending..." : "Send Message"}{" "}
                      <Send size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ name: "", email: "", message: "" });
                      }}
                      className="px-3 py-2 rounded-md bg-slate-800/40"
                    >
                      Clear
                    </button>
                  </div>
                  {sent && (
                    <div className="text-sm text-emerald-400">
                      Thanks — we'll get back to you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold">alphaXM</div>
              <div className="text-xs text-slate-400">
                © {new Date().getFullYear()} alphaXM — web, AI, blockchain
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={() => setActive("contact")}
                className="text-sm"
              >
                Contact
              </a>
              <a
                href="#projects"
                onClick={() => setActive("projects")}
                className="text-sm"
              >
                Projects
              </a>
              <a
                href="#services"
                onClick={() => setActive("services")}
                className="text-sm"
              >
                Services
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* Small helper components outside main default export */
function ServiceCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-slate-700"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
          {icon[0].toUpperCase()}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-300">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}
