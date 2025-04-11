import React from 'react';
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <div className="font-poppins">
     
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/travel.png')" }}
      >
        <h1 className="text-4xl md:text-6xl px-8 py-4 rounded-lg">About Us</h1>
      </section>

      <section className="bg-gray-100 py-16 px-6 md:px-20 flex flex-col md:flex-row gap-12 text-center">
        {[
          {
            img: "/images/group.png",
            title: "Great Team Work",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat ipsam ut optio accusamus iste hic mollitia reprehenderit. Cupiditate laudantium enim ut quos possimus aspernatur delectus libero maxime, et repellendus.",
          },
          {
            img: "/images/rocket.png",
            title: "Our Vision",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat ipsam ut optio accusamus iste hic mollitia reprehenderit. Cupiditate laudantium enim ut quos possimus aspernatur delectus libero maxime, et repellendus.",
          },
          {
            img: "/images/chart.png",
            title: "Our Mission",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat ipsam ut optio accusamus iste hic mollitia reprehenderit. Cupiditate laudantium enim ut quos possimus aspernatur delectus libero maxime, et repellendus.",
          },
        ].map((item, index) => (
          <div key={index} className="flex-1 px-4">
            <img src={item.img} alt={item.title} className="mx-auto w-20 h-20 mb-6" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

    
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 relative">
        <div className="relative">
          <img
            src="/images/test.png"
            alt="Testimonial"
            className="w-64 h-64 rounded-tl-[60px] rounded-br-[60px]"
          />
          <img
            src="/images/open.png"
            alt="Quote"
            className="absolute -top-6 left-70 w-10 h-10"
          />
        </div>

        <div className="max-w-xl text-left">
          <p className=" mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat ipsam ut optio
            accusamus iste hic mollitia reprehenderit. Cupiditate laudantium enim ut quos possimus
            aspernatur delectus libero maxime, et repellendus.
          </p>
          
          <h4 className="font-bold text-gray-800">Siti Sarah</h4>
          <p>Founder Travasco</p>
        </div>
      </section>

     
      <section
        className="text-white text-center py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/looking.png')" }}
      >
        <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>

        <div className="py-16 px-6 md:px-20 flex flex-col md:flex-row gap-12 text-center">
          {[
            {
              img: "/images/customer.png",
              title: "126+",
              desc: "Satisfied client.",
            },
            {
              img: "/images/user.png",
              title: "230+",
              desc: "Active users.",
            },
            {
              img: "/images/mountain.png",
              title: "230+",
              desc: "Completed projects.",
            },
            {
              img: "/images/gold-medal.png",
              title: "230+",
              desc: "Awards won.",
            },
          ].map((item, index) => (
            <div key={index} className="flex-1 px-4">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-20 h-20 mb-6 object-contain grayscale brightness-0 invert"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="py-16 px-6 md:px-20">
        <p className="text-gray-400 text-center text-sm">Gallery</p>
        <h2 className="text-3xl font-bold text-center mb-10">Unforgettable Moments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: "/images/reddress.png", label: "Bali", large: true },
            { img: "/images/dubai.png", label: "Dubai" },
            { img: "/images/paris.png", label: "Paris" },
            { img: "/images/italy.png", label: "Italy" },
            { img: "/images/london.png", label: "London" },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative ${
                item.large ? "md:col-span-2 md:row-span-2 h-110" : "h-52"
              }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="rounded-xl object-cover w-full h-full"
              />
              <p className="absolute bottom-3 left-3 text-white text-lg font-semibold drop-shadow-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default AboutUs;
