import { useState } from "react";
import {
  CheckCircle,
  FileText,
  Send,
  GraduationCap,
} from "lucide-react";

function Admissions() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-20 text-center text-white">

        <GraduationCap className="mx-auto mb-5" size={50} />

        <h1 className="text-4xl font-bold md:text-5xl">
          Admissions Open 2026-27
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Start your journey with EduCare and build
          a successful future.
        </p>

      </section>

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* Process */}
          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Admission Process
            </h2>

            <div className="mt-8 space-y-6">

              {[
                "Select your preferred course",
                "Fill out the admission application",
                "Submit required documents",
                "Complete document verification",
                "Receive admission confirmation",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="pt-2">
                    <p className="font-semibold text-slate-800">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 p-6">

              <div className="flex gap-4">
                <FileText className="text-blue-600" />

                <div>
                  <h3 className="font-bold">
                    Required Documents
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>• Academic certificates</li>
                    <li>• Identity proof</li>
                    <li>• Passport-size photographs</li>
                    <li>• Transfer certificate</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 md:p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Apply For Admission
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and our admission team
              will contact you.
            </p>

            {submitted ? (

              <div className="mt-10 rounded-2xl bg-green-50 p-8 text-center">

                <CheckCircle
                  className="mx-auto text-green-600"
                  size={50}
                />

                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Application Submitted!
                </h3>

                <p className="mt-2 text-green-600">
                  Our admission team will contact you soon.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />

                <select
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-500 outline-none focus:border-blue-500"
                >
                  <option value="">
                    Select Course
                  </option>

                  <option>B.Tech Computer Engineering</option>
                  <option>B.Tech Electronics</option>
                  <option>BCA</option>
                  <option>MBA</option>
                  <option>B.Sc Computer Science</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Application
                  <Send size={18} />
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Admissions;