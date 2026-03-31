import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

export default function academicsExoplore() {
  const departments = [
    {
      name: "Social Studies",
      img: "https://media.istockphoto.com/id/1024531876/photo/key-success-in-graduate-study-abroad-program-and-open-or-expand-world-view-experience-concept.jpg?s=1024x1024&w=is&k=20&c=YIUr9gtBx9d5c-dDUzYUI6EzihabmKaIe5XSH4CVVug=",
    },
    {
      name: "Theology",
      img: "https://images.unsplash.com/photo-1490332695540-5acc256ec383?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Visual Arts",
      img: "https://plus.unsplash.com/premium_photo-1673470370451-6a60e9d93127?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Maths",
      img: "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Science",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  return (
    <section id="explore" className="bg-yellow-700 py-16 px-[6%] text-white mb-20">
      <h2 className="font-serif text-2xl mb-10">
        EXPLORE OUR ACADEMIC DEPARTMENTS
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {departments.map((dept, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={dept.img}
                alt={dept.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold">{dept.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br/>
    </section>
  );
}