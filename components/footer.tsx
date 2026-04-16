// components/footer.tsx
export function Footer() {
  return (
    <footer className="bg-[var(--green)] text-white py-16 border-t border-white/10">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

    <div>
      <h3 className="text-lg font-bold text-[var(--gold)]">
        Lockhart Solutions
      </h3>
      <p className="mt-3 text-white/70 text-sm">
        Solar panel removal, reinstallation, cleaning, and system support across NW Arkansas and the River Valley.
      </p>
    </div>

    <div>
      <h4 className="font-bold">Services</h4>
      <ul className="mt-3 space-y-2 text-white/70 text-sm">
        <li>Panel removal</li>
        <li>Reinstallation</li>
        <li>Panel cleaning</li>
        <li>Troubleshooting</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold">Contact</h4>
      <p className="mt-3 text-white/70">479-256-3772</p>
      <p className="text-white/70">NW Arkansas & River Valley</p>
    </div>

  </div>

</footer>
  );
}