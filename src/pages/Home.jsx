import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Building2,
  CheckCircle2,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    category: "Engineering",
    name: "B.Tech Engineering",
    description:
      "Build strong technical skills with practical learning and industry-focused education.",
    duration: "4 Years",
  },
  {
    category: "Management",
    name: "MBA Management",
    description:
      "Develop leadership, business and management skills with experienced professionals.",
    duration: "2 Years",
  },
  {
    category: "Science",
    name: "B.Sc Science",
    description:
      "Explore science through practical experiments, research and modern learning.",
    duration: "3 Years",
  },
];

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              🎓 Admissions Open 2026-27
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Shape Your
              <span className="text-blue-600"> Future </span>
              With Quality Education
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Learn from experienced faculty, develop industry-ready skills,
              and achieve your academic goals with EduCare.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/courses"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Explore Courses
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/admissions"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Apply Now
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="text-sm text-slate-500">Students</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">95%</p>
                <p className="text-sm text-slate-500">Success Rate</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">25+</p>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
             
             <img
  src="https://uprawnienia-budowlane.com/wp-content/uploads/2025/02/Kampus-nowoczesnej-politechniki.webp"
  alt="University Campus"
  className="h-[400px] w-full object-cover sm:h-[500px]"
/>
            </div>

            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3 text-green-600">
                  <Award size={25} />
                </div>

                <div>
                  <p className="font-bold text-slate-900">Top Rated</p>
                  <p className="text-sm text-slate-500">
                    Education Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 lg:px-8">
          <div className="text-center text-white">
            <Users className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-blue-100">Students</p>
          </div>

          <div className="text-center text-white">
            <BookOpen className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-blue-100">Courses</p>
          </div>

          <div className="text-center text-white">
            <Award className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-blue-100">Results</p>
          </div>

          <div className="text-center text-white">
            <Building2 className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-blue-100">Years</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Our Courses"
            title="Explore Our Popular Courses"
            description="Choose from a wide range of academic and professional courses designed to prepare you for your future."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* STUDENT IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
              alt="Students learning together"
              className="h-[420px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1000x700/eff6ff/2563eb?text=Students";
              }}
            />
          </div>

          {/* CONTENT */}
          <div>
            <span className="font-semibold text-blue-600">
              WHY CHOOSE EDUCARE?
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Education That Builds Your Future
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We focus on academic excellence, practical learning, and overall
              student development.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Experienced and qualified faculty",
                "Modern classrooms and laboratories",
                "Industry-focused practical learning",
                "Excellent placement opportunities",
                "Student-focused learning environment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="flex-shrink-0 text-blue-600"
                    size={22}
                  />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/enquiry"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Take the first step towards your successful career. Apply for
            admission today.
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-600 transition hover:bg-slate-100"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;