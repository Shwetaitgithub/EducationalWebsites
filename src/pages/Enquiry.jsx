import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

function Enquiry() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>

      <section className="bg-blue-600 px-5 py-20 text-center text-white">

        <h1 className="text-4xl font-bold md:text-5xl">
          Contact & Enquiry
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Have questions about courses, admissions or
          fees? Send us an enquiry.
        </p>

      </section>

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* Contact */}
          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Get In Touch
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our team is available to answer your questions
              and help you choose the right course.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Phone />
                </div>

                <div>
                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-500">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Mail />
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="mt-1 text-slate-500">
                    info@educare.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <MapPin />
                </div>

                <div>
                  <p className="font-semibold">
                    Address
                  </p>

                  <p className="mt-1 text-slate-500">
                    College Road, Pune,
                    Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 md:p-8">

            {submitted ? (

              <div className="py-12 text-center">

                <CheckCircle
                  className="mx-auto text-green-600"
                  size={55}
                />

                <h2 className="mt-5 text-2xl font-bold">
                  Enquiry Submitted
                </h2>

                <p className="mt-2 text-slate-500">
                  Thank you! Our team will contact you soon.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  required
                  type="text"
                  placeholder="Your Name"
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

                  <option>B.Tech</option>
                  <option>BCA</option>
                  <option>MBA</option>
                  <option>B.Sc</option>
                  <option>M.Sc</option>
                </select>

                <textarea
                  required
                  rows="5"
                  placeholder="Write your enquiry..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700"
                >
                  Send Enquiry
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

export default Enquiry;