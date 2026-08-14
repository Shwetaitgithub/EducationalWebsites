import {
  Code2,
  BriefcaseBusiness,
  FlaskConical,
  Monitor,
} from "lucide-react";

function CourseCard({ course }) {

  const icons = {
    Engineering: Code2,
    Management: BriefcaseBusiness,
    Science: FlaskConical,
    Computer: Monitor,
  };

  const Icon = icons[course.category] || Code2;

  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <Icon size={28} />
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          Available
        </span>
      </div>

      <p className="text-sm font-semibold text-blue-600">
        {course.category}
      </p>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {course.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {course.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t pt-4">
        <span className="text-sm text-slate-500">
          {course.duration}
        </span>

        <button className="font-semibold text-blue-600 hover:text-blue-800">
          View Course →
        </button>
      </div>

    </div>
  );
}

export default CourseCard;