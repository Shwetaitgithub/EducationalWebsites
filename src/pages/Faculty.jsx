import SectionTitle from "../components/SectionTitle";

const faculty = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Professor & HOD",
    department: "Computer Engineering",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Prof. Priya Mehta",
    role: "Associate Professor",
    department: "Management",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Amit Patil",
    role: "Professor",
    department: "Science",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Prof. Neha Joshi",
    role: "Assistant Professor",
    department: "Computer Science",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
];

function Faculty() {
  return (
    <main>

      <section className="bg-blue-600 px-5 py-20 text-center text-white">

        <h1 className="text-4xl font-bold md:text-5xl">
          Our Faculty
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Learn from experienced and passionate educators
          dedicated to student success.
        </p>

      </section>

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            badge="Our Team"
            title="Meet Our Experienced Faculty"
            description="Our faculty combines academic expertise with practical industry experience."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {faculty.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <img
                  src={person.image}
                  alt={person.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-lg font-bold text-slate-900">
                    {person.name}
                  </h3>

                  <p className="mt-1 font-medium text-blue-600">
                    {person.role}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {person.department}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Faculty;