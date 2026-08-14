import {
  Trophy,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";

function Results() {
  return (
    <main>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-20 text-center text-white">

        <Trophy
          className="mx-auto mb-5"
          size={55}
        />

        <h1 className="text-4xl font-bold md:text-5xl">
          Our Results
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Excellence is reflected in the achievements
          of our students.
        </p>

      </section>

      {/* Stats */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: TrendingUp,
              value: "95%",
              title: "Overall Pass Rate",
            },
            {
              icon: Trophy,
              value: "98%",
              title: "Engineering Results",
            },
            {
              icon: Award,
              value: "92%",
              title: "Management Results",
            },
            {
              icon: Star,
              value: "500+",
              title: "University Toppers",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-100"
              >

                <div className="mx-auto w-fit rounded-full bg-blue-50 p-4 text-blue-600">
                  <Icon size={28} />
                </div>

                <h2 className="mt-5 text-4xl font-bold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* Achievement */}
      <section className="bg-white px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-center text-3xl font-bold text-slate-900">
            Academic Excellence
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border">

            <table className="w-full min-w-[600px]">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="px-6 py-4 text-left">
                    Year
                  </th>

                  <th className="px-6 py-4 text-left">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left">
                    Pass Rate
                  </th>

                  <th className="px-6 py-4 text-left">
                    Toppers
                  </th>
                </tr>

              </thead>

              <tbody>

                {[
                  ["2026", "Engineering", "98%", "42"],
                  ["2026", "Management", "95%", "31"],
                  ["2026", "Science", "94%", "28"],
                  ["2025", "Computer Applications", "97%", "36"],
                ].map((row) => (

                  <tr
                    key={`${row[0]}-${row[1]}`}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="px-6 py-4 font-semibold">
                      {row[0]}
                    </td>

                    <td className="px-6 py-4">
                      {row[1]}
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-600">
                      {row[2]}
                    </td>

                    <td className="px-6 py-4">
                      {row[3]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Results;