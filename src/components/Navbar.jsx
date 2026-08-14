import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  Phone,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Results", path: "/results" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <GraduationCap size={26} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Edu<span className="text-blue-600">Care</span>
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/admissions"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              <Phone size={18} />
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;