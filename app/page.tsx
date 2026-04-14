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
    story: "Rain reminds us that we cannot stop what can&apos;t be stopped . The world will turn, the seasons changes , the rain falls , and life goes on.",
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
    story: "rainy days have a unique charm, and this photo captures that essence perfectly.",
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
    story: "like a scene from a dream you don&apos;t remember.",
  },
  {
    id: 12,
    src: "/images/photo12.jpg",
    alt: "Photo 12",
    location: "Rishikesh, Uttarakhand",
    story: "Thandi hawa, dheere behta paani… aur khud se ek khamosh mulaqat.",
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
    story: "Where architecture meets spirituality, and every corner tells a story of devotion.",
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADING */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#222022]"
            exit={{ opacity: 0 }}
          >
            <h1 className="text-3xl text-white">Prabhakar</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#222022] text-white">
        {/* NAVBAR */}
        <header className="fixed top-0 z-50 w-full">
          <div className="flex justify-between px-4 py-4 md:px-12">
            <a className="text-sm md:text-lg">Prabhakar</a>
          </div>

          {/* MOBILE NAV */}
          <div className="px-4 md:hidden">
            <nav className="rounded-full bg-black/50 px-4 py-2 text-[11px] flex justify-between">
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
          className="relative min-h-screen flex items-center pt-24"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/photo4.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-4 md:px-12">
            <h1 className="text-3xl md:text-6xl">
              Capturing Moments <br /> Beyond Words
            </h1>

            <p className="mt-4 text-sm text-white/70 max-w-md">
              Just a collection of moments I didn&apos;t want to forget.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section id="shots" className="px-4 py-16 md:px-12">
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            initial="hidden"
            whileInView="show"
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
                  <div className="relative">
                    <img src={photo.src} className="rounded-xl w-full" />

                    {/* WATERMARK */}
                    <div className="absolute top-2 right-2">
                      <span className="text-[10px] bg-white/30 px-2 rounded text-black/50">
                        Prabhakar Shukla
                      </span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="mt-3">
                    <p className="text-xs text-[#C3D809] uppercase">
                      {photo.location}
                    </p>

                    {photo.story && (
                      <p className="text-sm text-white/70 mt-1">
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
          <p className="text-white/70 max-w-xl">
            I’m not a professional photographer — I just enjoy capturing frames
            that feel memorable, aesthetic, or simply worth keeping. This space
            is a personal archive of some of my favorite shots.
          </p>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="px-4 py-6 border-t border-white/10 flex justify-between"
        >
          <p>© 2026 Prabhakar</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/prabhakar_.shukla">Instagram</a>
            <a href="https://www.linkedin.com/in/prabhakar-shukla-90334b399">
              LinkedIn
            </a>
          </div>
        </footer>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div onClick={(e) => e.stopPropagation()} className="relative">
                <img
                  src={selectedImage.src}
                  className="max-h-[90vh] rounded-xl"
                />

                {/* MODAL WATERMARK */}
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-white/30 px-2 rounded text-black/50">
                    Prabhakar Shukla
                  </span>
                </div>

                {/* TEXT */}
                <div className="mt-3 text-center">
                  <p className="text-[#C3D809]">{selectedImage.location}</p>
                  {selectedImage.story && (
                    <p className="text-white/70 text-sm mt-1">
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
