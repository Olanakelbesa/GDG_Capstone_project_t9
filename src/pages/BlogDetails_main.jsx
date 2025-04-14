
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt } from "react-icons/fa";

const BlogDetailsMain = () => {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <img
          src="/image/header_Blog.png"
          alt="Beautiful Bali landscape with rice terraces"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center px-4">
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
            alt="Bali landscape with rice terraces and mountains"
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-sm"
            loading="lazy"
          />

          <h2 className="text-4xl font-bold text-gray-800 mb-2">Discovering Bali</h2>
          <p className="text-gray-500 text-sm mb-6">
            By <span className="font-medium text-black">Rebel Rover</span> · March 20, 2025 · 8 min read
          </p>

          <section className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-lg">
              Bali, the land of gods, offers far more than stunning beaches. Beyond the touristy
              spots lies a world full of untouched rice terraces, ancient temples, and hidden
              waterfalls.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Hidden Waterfalls</h3>
            <p>
              One such hidden gem is the Tukad Cepung Waterfall, where the sun rays filter through
              the cave roof creating a magical spotlight. Getting there requires a short trek, but
              the serenity is worth every step.
            </p>
            
            <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-4 italic text-gray-700 font-medium rounded-md my-6">
              "Travel isn't always about the destination — sometimes it's about discovering what you
              never knew existed."
            </blockquote>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cultural Immersion</h3>
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
          
          {/* Share buttons */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex items-center gap-4">
            <span className="text-gray-600 font-medium">Share:</span>
            <div className="flex gap-3">
              <a href="#" aria-label="Share on Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="Share on Twitter" className="text-gray-500 hover:text-blue-400 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Share on LinkedIn" className="text-gray-500 hover:text-blue-700 transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <button aria-label="Share options" className="text-gray-500 hover:text-gray-700 transition-colors">
                <FaShareAlt size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-6 w-full md:w-auto">
          {/* About Author */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
            <div className="flex items-center gap-4">
              <img 
                src="/image/author.jpg" 
                alt="Rebel Rover author" 
                className="w-16 h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold">Rebel Rover</h4>
                <p className="text-sm text-gray-600">Travel writer & photographer</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Adventure seeker sharing hidden gems and local experiences around the world.
            </p>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {[
                { title: "Exploring The Spirit of Kyoto", date: "March 15, 2025", image: "/image/kyoto.jpg" },
                { title: "A Morning in Marrakech", date: "March 10, 2025", image: "/image/marrkech.jpg" },
                { title: "Hidden Trails of Patagonia", date: "March 2, 2025", image: "/image/Patagonia.jpg" }
              ].map((post, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                    loading="lazy"
                  />
                  <div>
                    <a href="#" className="text-blue-700 hover:underline font-medium block">
                      {post.title}
                    </a>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
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
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">→</span>
                      {item}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">12</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </article>

      {/* Related Articles */}
      <section className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">You Might Also Like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Walking Through the Soul of Ubud", 
              excerpt: "Ubud is not just a place — it's a feeling. Tucked in the heart of Bali...",
              image: "/image/ubdu.jpg",
              date: "March 22, 2025"
            },
            { 
              title: "The Hidden Beaches of Lombok", 
              excerpt: "While Bali gets all the attention, Lombok's pristine beaches offer...",
              image: "/image/lombok.jpg",
              date: "March 18, 2025"
            },
            { 
              title: "Sunrise at Mount Batur", 
              excerpt: "Hiking Bali's active volcano before dawn rewards you with one of...",
              image: "/image/batur.jpg",
              date: "March 15, 2025"
            }
          ].map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
              </div>
            </article>
          ))}
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
            placeholder="Your comment *"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          ></textarea>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Website"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <label className="flex items-start space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 accent-blue-600" />
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
