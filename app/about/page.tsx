export default function AboutPage() {
  return (
    // Centered hero-style content block for the About page.
    <section className="flex flex-1 items-center justify-center bg-linear-to-tr from-amber-50 via-orange-50 to-rose-50 px-6 py-16">
      {/* Main About card containing label, title, and description. */}
      <div className="w-full max-w-4xl rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-lg shadow-orange-100 backdrop-blur sm:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          About Hema Connect
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Hema Connect is designed to bring people and resources together with a
          clear, simple, and reliable web experience. This page can be expanded
          with your mission, team details, and service highlights.
        </p>
      </div>
    </section>
  );
}
