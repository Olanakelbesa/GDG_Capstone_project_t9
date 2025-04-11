import { Mail, MapPin, Phone } from 'lucide-react';
import Footer from './Footer';

export default function ContactPage() {
  return (
    <div className="font-sans text-black">
    

      <section
        className="relative w-full h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/cm.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">Contact</div>
        </div>
      </section>

      
      <section className="py-16 px-6 md:px-24 grid md:grid-cols-2 gap-10">
       
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-black text-black rounded p-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-black text-black rounded p-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-black text-black rounded p-3 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-black text-black rounded p-3 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-black mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          {[1, 2, 3].map((_, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-bold text-black">Ukhonsemawe, Aceh</h3>
              <div className="flex items-center text-black mt-2">
                <Phone className="mr-2 w-5 h-5" /> +62 634 9256
              </div>
              <div className="flex items-center text-black mt-1">
                <Mail className="mr-2 w-5 h-5" /> contact@domain.com
              </div>
              <div className="flex items-center text-black mt-1">
                <MapPin className="mr-2 w-5 h-5" /> Jl. Dr. Samudra Haga sekatan
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
