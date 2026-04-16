import { services, jobs } from "@/lib/data";

export default function Page() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center">
  <div className="absolute inset-0">
    <img
      src="/hero-bg.jpg"
      className="w-full h-full object-cover"
      alt="Solar panel work"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

<div className="relative z-10 w-full pl-10 md:pl-16 lg:pl-24 pr-6">
  <div className="max-w-2xl text-white">

    <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
  Solar Work Done Right
  <span className="block text-[var(--gold)] italic">
    Start to Finish
  </span>
</h1>

    <p className="mt-6 text-white/80">
      Removal, reinstall, troubleshooting, and protection systems handled
      with precision to keep your solar running and your roof protected.
    </p>

    <div className="mt-8 flex gap-4">
  <a className="bg-[var(--gold)] text-black px-6 py-3 font-bold">
    Call Now
  </a>

  <a className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition">
    Get a Quote
  </a>
</div>

  </div>
</div>
</section>
<section className="py-24 bg-[var(--cream)] border-t border-[var(--border)]"></section>
      {/* ABOUT */}
      <section className="py-24 section-light">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-3 h-[420px]">

  {/* BIG IMAGE */}
  <div className="col-span-2 h-[240px] overflow-hidden">
    <img
      src="/images/work1.jpg"
      className="w-full h-full object-cover"
    />
  </div>

  {/* SMALL LEFT */}
  <div className="h-[170px] overflow-hidden">
    <img
      src="/images/work2.jpg"
      className="w-full h-full object-cover"
    />
  </div>

  {/* SMALL RIGHT */}
  <div className="h-[170px] overflow-hidden">
    <img
      src="/images/work3.jpg"
      className="w-full h-full object-cover"
    />
  </div>

</div>

          <div>
  <h2 className="text-5xl">
    Built to protect your system.
    <span className="block text-[var(--gold)] italic">
      Every system, every job.
    </span>
  </h2>

  <p className="mt-6 text-[var(--muted)] leading-relaxed">
    Lockhart Solutions works with homeowners, roofers, and solar companies to
    handle panel removal, reinstallation, cleaning, and system troubleshooting.
    No shortcuts, no guesswork — just clean, organized work that protects your
    system and your roof.
  </p>

  <ul className="mt-6 space-y-3">
    <li>✔ Structured removal & reinstallation process</li>
    <li>✔ Works directly with roofing crews</li>
    <li>✔ Clean, organized job sites</li>
    <li>✔ Systems tested and verified before completion</li>
  </ul>
</div>

        </div>
      </section>

      {/* SERVICES GRID (DARK) */}
     <section id="services" className="py-24 section-dark border-t border-white/10">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl">
      Solar system services
      <span className="block text-[var(--gold)] italic">
        Done right the first time
      </span>
    </h2>

    <div className="grid md:grid-cols-3 mt-16">

      {services.map((s: { title: string; items: string[] }) => (
        <div
          key={s.title}
          className="p-8 border border-white/10 hover:bg-[var(--green-soft)]"
        >
          <h3 className="text-xl">{s.title}</h3>

          <p className="mt-4 text-white/70 text-sm">
            {s.items.join(", ")}
          </p>

          <p className="mt-6 text-[var(--gold)] text-sm">
            Get a quote →
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* WORK (HOVER EFFECT) */}
      <section id="work" className="py-24 section-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl">
  Recent solar work
  <span className="block text-[var(--gold)] italic">
    Done right every time
  </span>
</h2>

          <div className="grid md:grid-cols-3 gap-4 mt-12">

            {jobs.map((job) => (
              <div key={job.title} className="group overflow-hidden relative">

                <img
                  src={job.image}
                  className="w-full h-72 object-cover group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center p-4">
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-sm mt-2">{job.desc}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
       <section className="py-24 section-accent">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
  <h2 className="text-4xl">Why people call us</h2>

  <div className="mt-8 space-y-6 text-white">
    <p><strong>01</strong> Structured removal & reinstallation process</p>
    <p><strong>02</strong> Works directly with roofing crews</p>
    <p><strong>03</strong> Clean, organized job sites</p>
    <p><strong>04</strong> Systems tested before completion</p>
  </div>
</div>

          <div className="bg-[var(--green)] text-white p-10">
  <p className="text-2xl italic">
    “We handle solar systems the right way the first time so you don’t
    have to deal with issues later.”
  </p>

  <button className="mt-6 bg-[var(--gold)] text-black px-6 py-3">
    Call now
  </button>
</div>

        </div>
      </section>

      {/* REVIEWS */}
       <section id="reviews" className="py-24 section-dark">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl">
            What people say
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
  "Showed up on time, handled the removal clean, and everything went back exactly how it should. Solid work.",
  "Worked directly with our roofer and made the whole process smooth. No issues at all.",
  "Panels were cleaned and system is running better than before. Would definitely recommend.",
].map((r, i) => (
              <div key={i} className="p-6 border border-white/10">
                ⭐⭐⭐⭐⭐
                <p className="mt-4 text-white/80 text-sm">{r}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
    <section id="contact" className="py-24 section-light border-t border-[var(--border)]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

    {/* LEFT */}
    <div>
      <h2 className="text-5xl">
  Free estimate —
  <span className="block italic text-[var(--gold)]">
    no pressure
  </span>
</h2>

<p className="mt-6 text-[var(--muted)]">
  Need panels removed, reinstalled, or cleaned? Reach out and we’ll take a look and give you a straight answer.
</p>

<div className="mt-6 space-y-4">
  <p><strong>📞</strong> 479-256-3772</p>
  <p><strong>📍</strong> NW Arkansas & River Valley</p>
  <p><strong>✔</strong> Reliable, clean, and organized work</p>
</div>
    </div>

    {/* FORM */}
    <form className="bg-white p-8 shadow-xl space-y-4">

      <input placeholder="Name" className="w-full border p-3" />
      <input placeholder="Phone" className="w-full border p-3" />
      <textarea placeholder="What do you need help with?" className="w-full border p-3" />
      <button className="w-full bg-[var(--green)] text-white py-3 font-bold">
        Get A Quote
      </button>

    </form>

  </div>
</section>

    </div>
  );
}