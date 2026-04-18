"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    id: 1,
    src: "/images/photo1.jpg",
    alt: "Photo 1",
    location: "home lucknow, Uttar Pradesh",
    story: "The photo from where my photography journey started .",
  },
  {
    id: 2,
    src: "/images/photo2.jpg",
    alt: "Photo 2",
    location: "SRM AP Campus",
    story:
      "The cherry blossoms were in full bloom, creating a dreamy atmosphere that I couldn’t resist capturing.",
  },
  {
    id: 3,
    src: "/images/photo3.jpg",
    alt: "Photo 3",
    location: "clock tower , lucknow",
    story:
      "Har ghadi yahan ek kahani hai, aur yeh tasveer uss kahani ka ek hissa hai.",
  },
  {
    id: 4,
    src: "/images/photo4.jpg",
    alt: "Photo 4",
    location: "Bada Imambara, Lucknow",
    story: "Har imarat ek daastaan hai, bas sunne wala chahiye.",
  },
  {
    id: 5,
    src: "/images/photo5.jpg",
    alt: "Photo 5",
    location: "The Residency, Lucknow",
    story:
      "The most unrealistic photo I have ever taken, the colors were so vibrant that it felt like a painting.",
  },
  {
    id: 6,
    src: "/images/photo6.jpg",
    alt: "Photo 6",
    location: "Home Lucknow, Uttar Pradesh",
    story:
      "Rain reminds us that we cannot stop what can't be stopped . The world will turn, the seasons changes , the rain falls , and life goes on.",
  },
  {
    id: 7,
    src: "/images/photo7.jpg",
    alt: "Photo 7",
    location: "Begum Hazrat Mahal Park, Lucknow",
    story: "Yahan har mod par ek daastaan milti hai.",
  },
  {
    id: 8,
    src: "/images/photo8.jpg",
    alt: "Photo 8",
    location: "Home Lucknow, Uttar Pradesh",
    story:
      "rainy days have a unique charm, and this photo captures that essence perfectly.",
  },
  {
    id: 9,
    src: "/images/photo9.jpg",
    alt: "Photo 9",
    location: "Jagannath Temple, hyderabad",
    story: "In the quiet presence of devotion, everything else fades away.",
  },
  {
    id: 10,
    src: "/images/photo10.jpg",
    alt: "Photo 10",
    location: "charminar, hyderabad",
    story: "Where history glows under city lights",
  },
  {
    id: 11,
    src: "/images/photo11.jpg",
    alt: "Photo 11",
    location: "Rishikesh, Uttarakhand",
    story: "like a scene from a dream you don't remember.",
  },
  {
    id: 12,
    src: "/images/photo12.jpg",
    alt: "Photo 12",
    location: "Rishikesh, Uttarakhand",
    story:
      "Thandi hawa, dheere behta paani… aur khud se ek khamosh mulaqat.",
  },
  {
    id: 13,
    src: "/images/photo13.jpg",
    alt: "Photo 13",
    location: "Mangalagiri",
    story: "Lonely roads, loud thoughts.",
  },
  {
    id: 14,
    src: "/images/photo14.jpg",
    alt: "Photo 14",
    location: "Vijayawada, Andhra Pradesh",
    story:
      "Where architecture meets spirituality, and every corner tells a story of devotion.",
  },
  {
    id: 15,
    src: "/images/photo15.jpg",
    alt: "Photo 15",
    location: "Viswanath Temple, Banaras",
    story: "Framed by nature, held by faith.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<(typeof photos)[number] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADING */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#222022]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-[#C3D809] md:text-xs">
                Visual Diary
              </p>
              <h1 className="text-3xl text-white md:text-5xl">Prabhakar</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#222022] text-white">
        {/* NAVBAR */}
        <header className="fixed top-0 z-50 w-full">
          <div className="flex items-center justify-between px-4 py-4 md:px-12">
            <a
              href="#home"
              className="text-sm tracking-[0.18em] text-white transition hover:text-[#C3D809] md:text-lg"
            >
              Prabhakar
            </a>

            {/* Desktop Nav */}
            <nav className="hidden rounded-full border border-white/10 bg-black/45 px-4 py-2 md:block">
              <div className="flex gap-8 text-sm text-white/80">
                <a href="#home" className="transition hover:text-[#C3D809]">
                  Home
                </a>
                <a href="#shots" className="transition hover:text-[#C3D809]">
                  Shots
                </a>
                <a href="#about" className="transition hover:text-[#C3D809]">
                  About
                </a>
                <a href="#contact" className="transition hover:text-[#C3D809]">
                  Contact
                </a>
              </div>
            </nav>
          </div>

          {/* Mobile Nav */}
          <div className="px-4 md:hidden">
            <nav className="flex justify-between rounded-full bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-white/85">
              <a href="#home">Home</a>
              <a href="#shots">Shots</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/photo4.jpg')" }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))",
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 md:h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0,0,0,0.72))",
            }}
          />

          <motion.div
            className="relative z-10 px-4 md:px-12"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-[10px] uppercase tracking-[0.34em] text-white/80 md:text-sm"
            >
              Prabhakar&apos;s Visual Diary
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-3xl leading-[1.08] md:text-6xl"
            >
              Capturing Moments <br /> Beyond Words
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-sm text-white/70 md:text-base"
            >
              Just a collection of moments I didn&apos;t want to forget.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#shots"
              className="mt-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] tracking-[0.18em] text-white transition hover:border-[#C3D809] hover:text-[#C3D809] md:px-6 md:py-3 md:text-sm"
            >
              VIEW SHOTS
            </motion.a>
          </motion.div>
        </section>

        {/* GALLERY */}
        <section id="shots" className="px-4 py-16 md:px-12">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C3D809] md:text-xs"
          >
            Shots
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-8 text-2xl font-semibold text-white md:mb-10 md:text-4xl"
          >
            My Shots
          </motion.h2>

          <motion.div
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            variants={staggerContainer}
          >
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={fadeUp}
                className="mb-6 break-inside-avoid"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full rounded-xl object-cover transition duration-300 hover:scale-[1.01]"
                    />

                    {/* WATERMARK */}
                    <div className="absolute right-2 top-2">
                      <span className="rounded bg-white/30 px-2 text-[10px] text-black/50">
                        Prabhakar Shukla
                      </span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#C3D809]">
                      {photo.location}
                    </p>

                    {photo.story && (
                      <p className="mt-1 text-sm text-white/70">
                        {photo.story}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-4 pb-16 md:px-12">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C3D809] md:text-xs"
          >
            About
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl text-2xl font-semibold text-white md:text-4xl"
          >
            A small visual collection of moments that stood out to me.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-4 max-w-xl text-white/70"
          >
            I&apos;m not a professional photographer — I just enjoy capturing
            frames that feel memorable, aesthetic, or simply worth keeping.
            This space is a personal archive of some of my favorite shots.
          </motion.p>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="flex flex-col justify-between gap-4 border-t border-white/10 px-4 py-6 md:flex-row md:px-12"
        >
          <p className="text-sm text-white/70">© 2026 Prabhakar</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/prabhakar_.shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#C3D809]"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/prabhakar-shukla-90334b399"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#C3D809]"
            >
              LinkedIn
            </a>
          </div>
        </footer>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[95vw]"
              >
                <button
                  className="absolute right-2 top-2 z-20 text-3xl text-white/80 transition hover:text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>

                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] rounded-xl md:max-h-[90vh]"
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />

                {/* MODAL WATERMARK */}
                <div className="absolute right-12 top-3">
                  <span className="rounded bg-white/30 px-2 py-[2px] text-xs text-black/50">
                    Prabhakar Shukla
                  </span>
                </div>

                {/* TEXT */}
                <div className="mt-3 text-center">
                  <p className="text-[#C3D809]">{selectedImage.location}</p>
                  {selectedImage.story && (
                    <p className="mt-1 text-sm text-white/70">
                      {selectedImage.story}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
