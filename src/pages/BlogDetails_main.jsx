import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetailsMain = () => {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full">
        <img
          src="/image/header_Blog.png"
          alt="Blog Header"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Travel Stories For Now <br /> and the Future
          </h1>
          <div className="text-white text-base flex flex-wrap gap-6 justify-center items-center">
            <span className="flex items-center gap-2">👤 Hasmar</span>
            <span className="flex items-center gap-2">📅 January 18, 2021</span>
            <span className="flex items-center gap-2">🗂 Stories, Tips</span>
          </div>
        </div>
      </div>

      {/* Article Section */}
      <article className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
        {/* Left: Content */}
        <div className="md:col-span-3 relative">
          <span className="absolute -top-10 right-0 text-[10px] text-gray-400 uppercase tracking-wide">
            Destination Travel
          </span>

          <img
            src="/image/landscape.jpg"
            alt="Bali landscape"
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-sm"
          />

          <h2 className="text-4xl font-bold text-gray-800 mb-2">Discovering Bali</h2>
          <p className="text-gray-500 text-sm mb-6">
            By <span className="font-medium text-black">Rebel Rover</span> · March 20, 2025
          </p>

          <section className="text-gray-700 space-y-6 leading-relaxed">
            <p>
              Bali, the land of gods, offers far more than stunning beaches. Beyond the touristy
              spots lies a world full of untouched rice terraces, ancient temples, and hidden
              waterfalls.
            </p>
            <p>
              One such hidden gem is the Tukad Cepung Waterfall, where the sun rays filter through
              the cave roof creating a magical spotlight. Getting there requires a short trek, but
              the serenity is worth every step.
            </p>
            <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-4 italic text-gray-700 font-medium rounded-md">
              "Travel isn't always about the destination — sometimes it's about discovering what you
              never knew existed."
            </blockquote>
            <p>
              When you explore Bali beyond the surface, you get to witness the vibrant culture and
              traditions that are deeply rooted in everyday life. The locals' hospitality and
              spiritual connection make every moment memorable.
            </p>
            <p>
              Plan your journey with Rebel Rover and we'll take you beyond the obvious. Let your
              next vacation be filled with wonder, discovery, and unforgettable experiences.
            </p>
          </section>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-6 w-full md:w-auto">
          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <img
                  src="/image/kyoto.jpg"
                  alt="Exploring The Spirit of Kyoto"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <a href="#" className="text-blue-700 hover:underline font-medium block">
                    Exploring The Spirit of Kyoto
                  </a>
                  <p className="text-xs text-gray-500">March 15, 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img
                  src="/image/marrkech.jpg"
                  alt="A Morning in Marrakech"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <a href="#" className="text-blue-700 hover:underline font-medium block">
                    A Morning in Marrakech
                  </a>
                  <p className="text-xs text-gray-500">March 10, 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img
                  src="/image/Patagonia.jpg"
                  alt="Hidden Trails of Patagonia"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <a href="#" className="text-blue-700 hover:underline font-medium block">
                    Hidden Trails of Patagonia
                  </a>
                  <p className="text-xs text-gray-500">March 2, 2025</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="divide-y divide-gray-200">
              {["Travel", "Tips", "Stories", "Destination"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">→</span>
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have Any Question */}
          <div className="bg-black text-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-lg font-semibold">Have Any Question?</h3>
            <p className="text-sm text-gray-200">
              Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span>📞</span>
              <span>+62 6943 6956</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span>✉️</span>
              <span>contact@domain.com</span>
            </div>
          </div>
        </aside>
      </article>

      {/* Ubud Sub-Section */}
      <section className="max-w-5xl mx-auto mt-20 grid md:grid-cols-4 gap-10 px-4 relative">
        <div className="md:col-span-3">
          <img
            src="/image/ubdu.jpg"
            alt="Streets of Ubud"
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-sm"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Walking Through the Soul of Ubud</h2>
          <p className="text-gray-500 text-sm mb-6">
            By <span className="font-medium text-black">Rebel Rover</span> · March 22, 2025
          </p>
          <section className="text-gray-700 space-y-6 leading-relaxed">
            <p>
              Ubud is not just a place — it’s a feeling. Tucked in the heart of Bali, its streets buzz with quiet spirituality, artisan craft, and timeless tradition.
            </p>
            <p>
              The scent of incense drifts from temples, while gentle gamelan music echoes from distant courtyards. Each alley feels like a story, each offering a poem written in flowers.
            </p>
            <p>
              Visit the traditional market at sunrise, where locals bargain in Balinese, and explore Campuhan Ridge Walk at golden hour for panoramic views and inner peace.
            </p>
            <p>
              When you lose the map and simply wander, you begin to understand why Ubud captures the soul of so many travelers — not with spectacle, but with stillness.
            </p>
          </section>
        </div>

        {/* Tags & Icons */}
        <div className="md:col-span-1 flex md:flex-col justify-between items-start mt-8 md:mt-0 space-y-4 md:space-y-6 w-full md:w-auto">
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Tags</h4>
            <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-1 font-semibold">Destination</span>
            <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-semibold">Travel</span>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-auto ml-auto md:ml-0">
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-blue-800"><FaLinkedinIn /></a>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow-md p-8 mb-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Leave a Reply</h2>
        <p className="text-xs text-gray-400 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="space-y-5">
          <textarea
            placeholder="Your comment"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="text"
            placeholder="Name *"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-blue-600" />
            <span>Save my name, email, and website in this browser for the next time I comment.</span>
          </label>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogDetailsMain;
