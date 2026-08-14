import SectionTitle from "../components/SectionTitle";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    category: "Engineering",
    name: "B.Tech Computer Engineering",
    description: "Learn programming, software development, databases and modern technologies.",
    duration: "4 Years",
  },
  {
    category: "Engineering",
    name: "B.Tech Electronics",
    description: "Build expertise in electronics, communication and embedded systems.",
    duration: "4 Years",
  },
  {
    category: "Computer",
    name: "BCA",
    description: "Develop strong foundations in computer applications and software development.",
    duration: "3 Years",
  },
  {
    category: "Management",
    name: "MBA",
    description: "Develop leadership, business and management skills for your career.",
    duration: "2 Years",
  },
  {
    category: "Science",
    name: "B.Sc Computer Science",
    description: "Study computer science concepts with practical and research-based learning.",
    duration: "3 Years",
  },
  {
    category: "Science",
    name: "M.Sc Computer Science",
    description: "Advance your knowledge of computer science and emerging technologies.",
    duration: "2 Years",
  },
];

function Courses() {
  return (
    <main>

      <section className="bg-blue-600 px-5 py-20 text-center text-white">

        <h1 className="text-4xl font-bold md:text-5xl">
          Our Courses
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Explore our academic programs designed to
          provide knowledge, skills and career opportunities.
        </p>

      </section>

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            badge="Programs"
            title="Choose Your Career Path"
            description="Find the right course to achieve your academic and professional goals."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course) => (
              <CourseCard
                key={course.name}
                course={course}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Courses;