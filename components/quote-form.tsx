export function QuoteForm() {
  return (
    <form className="space-y-3">
      <input placeholder="Name" className="w-full p-3 border rounded" />
      <input placeholder="Phone" className="w-full p-3 border rounded" />
      <textarea placeholder="What do you need done?" className="w-full p-3 border rounded" />

      <button className="w-full bg-[var(--brand)] text-white py-3 font-bold">
        Send request
      </button>
    </form>
  );
}