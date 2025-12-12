export default function Home() {
  const characters = [
    {
      name: "Kabutar",
      role: "Pyara Sa Dost",
      summary:
        "Kabutar ek pyara sa parinda hai jo apni malkin ke saath rehta hai. Wo apni malkin se bohot pyar karta hai aur hamesha uski khushi ka khayal rakhta hai.",
      highlights: [
        "Pyar se bhara dil, hamesha muskurata",
        "Malkin ko har pal khush rakhne ki koshish",
        "Din bhar ghar ki dekhbhal mein madadgar",
      ],
      quote: "“Malkin ki khushi hi meri zindagi ka sabse bada inaam hai.”",
    },
    {
      name: "Malkin",
      role: "Sambhalne Waali Saathi",
      summary:
        "Malkin kabutar ka khayal rakhti hai. Wo usse khana deti hai, uski dekhbhal karti hai aur usse apne parivaar ka hissa samajhti hai. Unki kabutar se gehri dosti hai.",
      highlights: [
        "Rozana kabutar ki zarurat ka dhyaan",
        "Sneh aur bharose se bhara rishta",
        "Kabutar ki chhoti se chhoti baat samajhne wali",
      ],
      quote: "“Kabutar sirf paltoo nahi, mera apna saathi hai.”",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-rose-100 text-slate-900">
      <main className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16 sm:px-12">
        <header className="rounded-3xl bg-white/80 p-10 shadow-xl ring-1 ring-white/40 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Part 1 · Parichay
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Kabutar aur Malkin ki Pyari Dosti
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Yeh kahani hai ek kabutar aur uski malkin ki—do dil jo bharose aur
            pyaar ke dhaagon se jud gaye hain. Har din ki chhoti-badi baatein
            inke rishton ko mazboot banati hain.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2">
          {characters.map((character) => (
            <article
              key={character.name}
              className="group rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {character.name}
                </h2>
                <span className="rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold tracking-wide text-sky-700">
                  {character.role}
                </span>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {character.summary}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-500">
                {character.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 rounded-2xl bg-slate-50/80 p-3 text-slate-600 shadow-sm ring-1 ring-slate-100 group-hover:ring-sky-200"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-sky-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <footer className="mt-8 rounded-2xl bg-gradient-to-r from-sky-200/60 to-rose-200/60 p-4 text-sm font-medium text-slate-700 shadow-inner">
                {character.quote}
              </footer>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-white/70 p-8 shadow-inner ring-1 ring-white/50 backdrop-blur">
          <h3 className="text-xl font-semibold text-slate-900">
            Rishton ka Neev
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Kabhi kabhi sabse gehri dosti alag-alag duniyaon se aane walon ke
            beech banti hai. Kabutar aur malkin ka rishta bas paltoo aur malik
            ka nahi, balki do saathiyon ka hai jo ek doosre par bharosa karte
            hain. Iss kahani ka yeh pehla hissa unke parichay aur pyar bhari
            zimmedariyon ko dikhata hai.
          </p>
        </section>
      </main>
    </div>
  );
}
