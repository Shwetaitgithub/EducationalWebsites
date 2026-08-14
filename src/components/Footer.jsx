import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* About */}
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-2">
              <GraduationCap size={24} />
            </div>

            <h2 className="text-xl font-bold">
              Edu<span className="text-blue-400">Care</span>
            </h2>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Empowering students with quality education,
            experienced faculty and modern learning
            opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <Link to="/courses" className="hover:text-white">
              Courses
            </Link>

            <Link to="/admissions" className="hover:text-white">
              Admissions
            </Link>

            <Link to="/faculty" className="hover:text-white">
              Faculty
            </Link>

            <Link to="/results" className="hover:text-white">
              Results
            </Link>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Popular Courses
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <p>B.Tech Engineering</p>
            <p>MBA Management</p>
            <p>B.Sc Science</p>
            <p>BCA Computer Applications</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contact Us
          </h3>

          <div className="space-y-4 text-slate-400">

            <div className="flex gap-3">
              <MapPin size={20} className="text-blue-400" />
              <p>
                College Road, Pune,
                Maharashtra, India
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={20} className="text-blue-400" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex gap-3">
              <Mail size={20} className="text-blue-400" />
              <p>info@educare.com</p>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 EduCare. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;