export default function Home() {
  return (
    <main className="min-h-screen bg-[#222022] text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('photography-portfolio/public/images/imambara.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
          }}
        />

        {/* Bottom Blur Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))",
          }}
        />

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl px-6 md:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80 md:text-sm">
            Prabhakar's Visual Diary
          </p>

          <h1 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-[0.04em] text-white md:text-6xl lg:text-7xl">
            Capturing Moments
            <br />
            Beyond Words
          </h1>

          <p className="mt-6 max-w-lg text-sm italic tracking-wide text-white/70 md:text-base">
            Just a collection of moments I didn’t want to forget.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="px-6 py-20 md:px-12">
        <h2 className="mb-10 text-3xl font-semibold text-[#C3D809] md:text-4xl">
          My Shots
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <img
            src="/images/photo1.jpg"
            alt="Photo 1"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo2.jpg"
            alt="Photo 2"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo3.jpg"
            alt="Photo 3"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo4.jpg"
            alt="Photo 4"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo5.jpg"
            alt="Photo 5"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo6.jpg"
            alt="Photo 6"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo7.jpg"
            alt="Photo 7"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo8.jpg"
            alt="Photo 8"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo9.jpg"
            alt="Photo 9"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo10.jpg"
            alt="Photo 10"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo11.jpg"
            alt="Photo 11"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo12.jpg"
            alt="Photo 12"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo13.jpg"
            alt="Photo 13"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo14.jpg"
            alt="Photo 14"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
          <img
            src="/images/photo15.jpg"
            alt="Photo 15"
            className="rounded-xl transition duration-300 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}