import { Mail, Phone } from "lucide-react";

export default function Staff() {
  const staff = [
    {
      name: "John Doe",
      role: "Principal",
      img: "https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?s=1024x1024&w=is&k=20&c=jx5BQaE5_NSaIHr0mPk-cXhGZW-mQesWtI7HVnh4WVI=",
    },
    {
      name: "Jane Smith",
      role: "Vice Principal",
      img: "https://media.istockphoto.com/id/2244743627/photo/teacher-guiding-students-through-mindfulness-hand-breathing-exercise-in-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=LjadbKa4EvIQKHC0Zuf6zHrAbXXcHW9DaeXQAYULhHM=",
    },
    {
      name: "Robert Brown",
      role: "Senior Teacher",
      img: "https://media.istockphoto.com/id/1151224020/photo/teacher-with-preschoolers-finger-painting-at-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=iAZ_hBwMdz_nP05xCny_M-dr7uEGCGXbwFminHxcfKQ=",
    },
    {
      name: "Emily Davis",
      role: "Science Teacher",
      img: "https://media.istockphoto.com/id/1376136521/photo/focus-on-teacher-teacher-asking-questions-and-girl-raising-hands-to-answer-at-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=c7YzKoz-qs8t3T0c9jR2yL9rXsZ1YcIvxvN8V2RDkPg=",
    },
  ];

  return (
    <section id="staff" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* HEADING */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Our Staff
        </h1>
        <p className="text-gray-600 max-w-xl">
          Meet our dedicated and experienced faculty members who guide students
          towards excellence and success.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {staff.map((member, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">

              <h2 className="text-lg font-semibold">
                {member.name}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {member.role}
              </p>

              {/* ACTIONS */}
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <Mail size={18} className="cursor-pointer text-gray-600 hover:text-yellow-500" />
                <Phone size={18} className="cursor-pointer text-gray-600 hover:text-yellow-500" />
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}