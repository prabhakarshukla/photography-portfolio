"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/images/photo${i + 1}.jpg`,
  alt: `Photo ${i + 1}`,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div
        className="pointer-events-none fixed z-[100] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C3D809]/70 bg-[#C3D809]/10 backdrop-blur-sm md:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#222022]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#C3D809]">
                Visual Diary
              </p>
              <h1 className="text-4xl text-white md:text-6xl">Prabhakar</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#222022] text-white">
        {/* NAVBAR */}
        <header className="fixed left-0 top-0 z-50 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
            <a
              href="#home"
              className="text-lg tracking-[0.2em] text-white transition hover:text-[#C3D809]"
            >
              Prabhakar
            </a>

            <nav className="rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
              <ul className="flex items-center gap-5 text-sm text-white/80 md:gap-8">
                <li>
                  <a href="#home" className="transition hover:text-[#C3D809]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shots" className="transition hover:text-[#C3D809]">
                    Shots
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-[#C3D809]">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition hover:text-[#C3D809]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/photo4.jpg')",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))",
            }}
          />

          <motion.div
            className="relative z-10 max-w-3xl px-6 md:px-12"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80 md:text-sm"
            >
              Prabhakar&apos;s Visual Diary
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-[0.04em] text-white md:text-6xl lg:text-7xl"
            >
              Capturing Moments
              <br />
              Beyond Words
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-sm italic tracking-wide text-white/70 md:text-base"
            >
              Just a collection of moments I didn&apos;t want to forget.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#shots"
              className="mt-8 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm tracking-[0.18em] text-white backdrop-blur-md transition hover:border-[#C3D809] hover:text-[#C3D809]"
            >
              VIEW SHOTS
            </motion.a>
          </motion.div>
        </section>

        {/* GALLERY SECTION */}
        <section id="shots" className="px-6 py-20 md:px-12">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-10 text-3xl font-semibold text-[#C3D809] md:text-4xl"
          >
            My Shots
          </motion.h2>

          <motion.div
            className="columns-1 gap-5 sm:columns-2 lg:columns-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {photos.map((photo) => (
              <motion.button
                key={photo.id}
                variants={fadeUp}
                onClick={() => setSelectedImage(photo.src)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-auto w-full rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                  />

                  {/* WATERMARK */}
                  <div className="pointer-events-none absolute top-2 right-3">
  <span className="text-black/40 text-[10px] md:text-xs font-medium tracking-wide bg-white/30 px-2 py-[2px] rounded-md backdrop-blur-sm">
    By Prabhakar Shukla
  </span>
</div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-2xl bg-[#C3D809]/0 transition duration-500 group-hover:bg-[#C3D809]/10" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(195,216,9,0.35),0_0_40px_rgba(195,216,9,0.08)]" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-6 pb-24 pt-10 md:px-12">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C3D809]"
            >
              About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-white md:text-4xl"
            >
              A small visual collection of moments that stood out to me.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-white/70 md:text-base"
            >
              I&apos;m not a professional photographer — I just enjoy capturing
              frames that feel memorable, aesthetic, or simply worth keeping.
              This space is a personal archive of some of my favorite shots.
            </motion.p>
          </motion.div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer
          id="contact"
          className="border-t border-white/10 px-6 py-8 md:px-12"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
          >
            <p className="text-sm text-white/50">
              © 2026 Prabhakar. A personal collection of moments.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/prabhakar_.shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-[#C3D809]"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/prabhakar-shukla-90334b399?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-[#C3D809]"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </footer>

        {/* FULLSCREEN MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute right-6 top-6 z-50 text-3xl text-white/80 transition hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>

              <motion.img
                src={selectedImage}
                alt="Selected preview"
                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}