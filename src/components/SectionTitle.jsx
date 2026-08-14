function SectionTitle({ badge, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">

      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        {badge}
      </span>

      <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default SectionTitle;