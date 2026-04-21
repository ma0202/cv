"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowUpRight, Sparkles, GraduationCap, Trophy } from "lucide-react";
import { DATA } from "@/data/resume";

// ─── Small building blocks ─────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-gold" />
      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
      {children}
    </h2>
  );
}

function EquityCurveBg() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] w-full"
      viewBox="0 0 1200 280"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="eqGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0 220 C 100 210, 200 235, 300 200 C 400 160, 500 180, 600 150 C 700 115, 800 135, 900 95 C 1000 50, 1100 65, 1200 25 L 1200 280 L 0 280 Z"
        fill="url(#eqGrad)"
      />
      <path
        d="M 0 220 C 100 210, 200 235, 300 200 C 400 160, 500 180, 600 150 C 700 115, 800 135, 900 95 C 1000 50, 1100 65, 1200 25"
        stroke="#c9a96e"
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
        strokeDasharray="2000"
        className="animate-draw-line"
        style={{ strokeDashoffset: 2000 }}
      />
    </svg>
  );
}

// ─── The Page ──────────────────────────────────────────────────────

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <EquityCurveBg />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
            <div className="flex-1 space-y-7">
              <FadeUp>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                  <Sparkles className="size-3" />
                  {DATA.tagline}
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="font-serif text-[64px] leading-[1.02] tracking-tight text-ink sm:text-7xl md:text-[88px]">
                  Muskan
                  <br />
                  <span className="italic text-ink-soft">Ahuja</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p className="max-w-xl font-serif text-xl leading-[1.55] text-ink-soft md:text-2xl">
                  {DATA.headline}
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <div className="flex flex-wrap items-center gap-4 text-sm text-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-gold" />
                    {DATA.location}
                  </span>
                  <span className="text-gold">·</span>
                  <span>MS Finance, Brandeis</span>
                  <span className="text-gold">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-600" />
                    </span>
                    Open to opportunities
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={`mailto:${DATA.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ivory transition-all hover:bg-ink-soft"
                  >
                    <Mail className="size-4" />
                    <span>Email</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-5 py-3 text-sm font-medium text-ink transition-all hover:border-gold hover:bg-gold-soft/20"
                  >
                    <Linkedin className="size-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.18}>
              <div className="relative">
                {/* Gold halo */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-gold/30 via-gold-soft/20 to-transparent blur-3xl" />
                {/* Photo */}
                <div className="relative rounded-full bg-gradient-to-br from-gold via-gold-soft to-ink/10 p-[2px]">
                  <div className="relative size-52 overflow-hidden rounded-full border-[3px] border-ivory shadow-[0_30px_80px_-30px_rgba(13,27,42,0.35)] sm:size-64">
                    <Image
                      src={DATA.avatarUrl}
                      alt={DATA.name}
                      fill
                      className="object-cover [object-position:50%_22%]"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative corner mark */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-subtle shadow-sm">
                  <span className="size-1.5 rounded-full bg-gold" />
                  New York · NY
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="border-y border-line bg-paper/60">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <FadeUp>
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
                Impact at a glance
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-subtle md:block">
                Selected figures
              </span>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {DATA.impact.map((metric, i) => (
              <FadeUp key={metric.label} delay={i * 0.06}>
                <div className="group">
                  <div className="numeric font-serif text-4xl leading-none tracking-tight text-ink md:text-5xl">
                    {metric.value}
                  </div>
                  <div className="mt-2 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
                  <div className="mt-3 text-sm leading-snug text-subtle">
                    {metric.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>— 01. About</SectionLabel>
          <SectionTitle>A finance generalist in a specialist&apos;s clothing.</SectionTitle>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 font-serif text-2xl leading-[1.55] text-ink md:text-[26px]">
            {DATA.summary}
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-subtle md:text-lg">
            {DATA.summaryLong}
          </p>
        </FadeUp>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-line bg-paper/50">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>— 02. Experience</SectionLabel>
            <SectionTitle>Where the numbers got serious.</SectionTitle>
          </FadeUp>
          <div className="mt-14 space-y-10">
            {DATA.work.map((job, i) => (
              <FadeUp key={`${job.company}-${job.start}`} delay={i * 0.04}>
                <article className="relative pl-7 md:pl-10">
                  {/* Timeline spine */}
                  <div className="absolute left-0 top-[13px] h-full w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
                  <div className="absolute -left-[5px] top-2 size-[11px] rounded-full border-2 border-ivory bg-gold shadow-sm" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl text-ink md:text-3xl">
                      {job.company}
                    </h3>
                    <span className="numeric font-mono text-[11px] uppercase tracking-wider text-subtle">
                      {job.start} — {job.end}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-subtle">
                    <span className="italic text-ink-soft">{job.title}</span>
                    <span className="text-gold">·</span>
                    <span>{job.location}</span>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
                    {job.summary}
                  </p>

                  {job.tools.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-ivory px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-subtle"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>— 03. Featured Work</SectionLabel>
            <SectionTitle>Case studies worth opening.</SectionTitle>
            <p className="mt-5 max-w-2xl text-base text-subtle">
              Academic M&amp;A and market-research projects that sharpen the
              story told by the resume.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {DATA.caseStudies.map((cs, i) => (
              <FadeUp key={cs.title} delay={i * 0.08}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all hover:border-gold/60 hover:shadow-[0_20px_60px_-30px_rgba(201,169,110,0.5)] md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-gold">
                      {cs.date}
                    </div>
                    <ArrowUpRight className="size-4 shrink-0 text-subtle opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-ink md:text-[26px]">
                    {cs.title}
                  </h3>
                  <div className="mt-1 text-xs italic text-subtle">{cs.context}</div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                    {cs.summary}
                  </p>
                  {cs.highlights && cs.highlights.length > 0 && (
                    <div className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                      {cs.highlights.map((h) => (
                        <div key={h.label} className="border-l-2 border-gold pl-3">
                          <div className="numeric font-serif text-xl text-ink md:text-2xl">
                            {h.value}
                          </div>
                          <div className="mt-0.5 text-xs text-subtle">{h.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-line bg-paper/50">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>— 04. Education</SectionLabel>
            <SectionTitle>Classroom &amp; coursework.</SectionTitle>
          </FadeUp>
          <div className="mt-12 space-y-8">
            {DATA.education.map((edu, i) => (
              <FadeUp key={edu.school} delay={i * 0.08}>
                <article className="group flex flex-col gap-4 rounded-xl border border-line bg-ivory p-6 transition-all hover:border-gold/50 md:flex-row md:items-start md:gap-6 md:p-8">
                  <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-paper p-2">
                    {edu.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={edu.logoUrl}
                        alt={edu.school}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <GraduationCap className="size-7 text-gold" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl text-ink md:text-2xl">
                        {edu.school}
                      </h3>
                      <span className="numeric font-mono text-[11px] uppercase tracking-wider text-subtle">
                        {edu.start} — {edu.end}
                      </span>
                    </div>
                    <div className="mt-1 text-sm italic text-subtle">
                      {edu.degree} · {edu.location}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-line bg-paper px-2.5 py-0.5 text-[11px] text-subtle"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    {"recognitions" in edu && edu.recognitions.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {edu.recognitions.map((r) => (
                          <span
                            key={r}
                            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft/20 px-2.5 py-1 text-[11px] text-ink-soft"
                          >
                            <Trophy className="size-3 text-gold" strokeWidth={2} />
                            {r}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-line bg-ink text-ivory">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeUp>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
                — 05. Toolkit
              </span>
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-tight text-ivory md:text-5xl">
              The instruments.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {Object.entries(DATA.skills).map(([group, items], i) => (
              <FadeUp key={group} delay={i * 0.08}>
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                    {group}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 border-b border-ivory/10 pb-3 font-serif text-lg text-ivory"
                      >
                        <span className="size-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <FadeUp>
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
                — 06. Get in touch
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Let&apos;s make the <span className="italic">numbers</span> talk.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-subtle">
              Open to analyst and associate opportunities across Investment
              Banking, M&amp;A, and Private Equity.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`mailto:${DATA.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory transition-all hover:bg-ink-soft"
              >
                <Mail className="size-4" />
                <span>{DATA.email}</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-medium text-ink transition-all hover:border-gold hover:bg-gold-soft/20"
              >
                <Linkedin className="size-4" />
                <span>linkedin.com/in/muskanahuja02</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-ivory">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-subtle">
          <span>© {currentYear} Muskan Ahuja</span>
          <span>New York · NY</span>
          <span>muskanahuja.com</span>
        </div>
      </footer>
    </main>
  );
}
