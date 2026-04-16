export function WorkCard({ job }: any) {
  return (
    <div className="group">
      <div className="overflow-hidden">
        <img
          src={job.image}
          className="w-full h-64 object-cover transition group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-xl font-bold">{job.title}</h3>
      <p className="mt-2 text-white/70">{job.desc}</p>
    </div>
  );
}