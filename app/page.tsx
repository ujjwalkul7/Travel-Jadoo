import Image from "next/image";
import { FaMapMarkedAlt, FaCreditCard, FaPlaneDeparture } from "react-icons/fa";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 md:px-24 bg-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-start bg-[white] justify-center min-h-[80vh] w-full">
        <p className="text-orange-600 font-semibold uppercase tracking-wide mb-4">
          Best destinations around the world
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#181E4B] mb-6">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h1>

        <p className="text-gray-500 max-w-lg mb-10">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Find out more
          </button>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <span className="text-gray-600 font-medium">Play Demo</span>
          </div>
        </div>

       {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:block">   {/* Hides on mobile, shows on md+ */}
          <div className="absolute top-20 left-180 w-[800px] h-[800px]">
            <Image
              src="/girl.jpg"
              alt="Trip to Greece"
              width={1200}
              height={1100}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>

      </section>

{/* SERVICES SECTION */}
<section className="w-full bg-[white] py-24 text-center">
  <p className="text-gray-500 uppercase tracking-wide mb-2">Category</p>
  <h2 className="text-4xl font-extrabold text-[#181E4B] mb-16">
    We Offer Best Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center max-w-xs p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-gray-100 relative">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1684/1684375.png"
        alt="Weather"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-[#1E2A78] font-semibold text-lg mb-2">
        Calculated Weather
      </h3>
      <p className="text-gray-500 text-sm">
        Built Wicket longer admire do barton vanity itself do in it.
      </p>
      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#DF6951] rounded-tr-2xl opacity-0 hover:opacity-100 transition-all duration-300"></div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center max-w-xs p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-gray-100 relative">
      <img
        src="https://cdn-icons-png.flaticon.com/512/681/681379.png"
        alt="Flight"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-[#1E2A78] font-semibold text-lg mb-2">
        Best Flights
      </h3>
      <p className="text-gray-500 text-sm">
        Engrossed listening. Park gate sell they west hard for the.
      </p>
      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#DF6951] rounded-tr-2xl opacity-0 hover:opacity-100 transition-all duration-300"></div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center max-w-xs p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-gray-100 relative">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2885/2885600.png"
        alt="Events"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-[#1E2A78] font-semibold text-lg mb-2">
        Local Events
      </h3>
      <p className="text-gray-500 text-sm">
        Barton vanity itself do in it. Preferred to men it engrossed listening.
      </p>
      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#DF6951] rounded-tr-2xl opacity-0 hover:opacity-100 transition-all duration-300"></div>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center max-w-xs p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-gray-100 relative">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png"
        alt="Customization"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-[#1E2A78] font-semibold text-lg mb-2">
        Customization
      </h3>
      <p className="text-gray-500 text-sm">
        We deliver outsourced aviation services for military customers.
      </p>
      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#DF6951] rounded-tr-2xl opacity-0 hover:opacity-100 transition-all duration-300"></div>
    </div>
  </div>
</section>

{/* TOP DESTINATIONS SECTION */}
<section className="w-full bg-[white] py-24 text-center">
  <p className="text-gray-500 uppercase tracking-wide mb-2">Top Selling</p>
  <h2 className="text-4xl font-extrabold text-[#181E4B] mb-16">
    Top Destinations
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    {/* Card 1 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full">
      <img
        src="rome.jpg"
        alt="Rome, Italy"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[#1E2A78] font-semibold text-lg">
            Rome, Italy
          </h3>
          <p className="text-gray-700 font-medium">$5.42k</p>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 12m0 0l-4.243 4.243M13.414 12l-4.243-4.243M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          10 Days Trip
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full">
      <img
        src="london.jpg"
        alt="London, UK"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[#1E2A78] font-semibold text-lg">
            London, UK
          </h3>
          <p className="text-gray-700 font-medium">$4.2k</p>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 12m0 0l-4.243 4.243M13.414 12l-4.243-4.243M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          12 Days Trip
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full">
      <img
        src="europe.jpg"
        alt="Full Europe"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[#1E2A78] font-semibold text-lg">
            Full Europe
          </h3>
          <p className="text-gray-700 font-medium">$15k</p>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 12m0 0l-4.243 4.243M13.414 12l-4.243-4.243M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          28 Days Trip
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="w-full bg-white py-20">
      {/* Book Your Trip Section */}
      <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* Left Text Content */}
        <div className="flex-1 space-y-6">
          <p className="text-indigo-500 font-semibold uppercase tracking-wider">
            Easy and Fast
          </p>
          <h2 className="text-5xl font-bold leading-snug text-gray-900">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="space-y-6 mt-10">
            <div className="flex gap-5">
              <div className="bg-yellow-400 p-4 rounded-2xl">
                <FaMapMarkedAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Choose Destination</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-red-400 p-4 rounded-2xl">
                <FaCreditCard className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Make Payment</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-cyan-600 p-4 rounded-2xl">
                <FaPlaneDeparture className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Reach Airport on Selected Date</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Trip Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-5 w-full max-w-sm">
            <Image
              src="/greece.jpg"
              alt="Trip to Greece"
              width={400}
              height={250}
              className="rounded-3xl object-cover w-full"
            />
            <h3 className="font-semibold text-lg mt-4">Trip To Greece</h3>
            <p className="text-gray-500 text-sm">14–29 June | by Robbin Joe</p>

            <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
              <p>24 people going</p>
              <p className="text-indigo-600 font-medium">40% completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* TESTIMONIAL SECTION */}
    <section className="w-full py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2">
          <p className="text-[#5E6282] font-semibold mb-3 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#181E4B] leading-tight mb-10">
            What People Say <br /> About Us.
          </h2>

          {/* Dots for slider indicators */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#39425D] rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* RIGHT SIDE TESTIMONIAL CARD */}
        <div className="md:w-1/2 relative">
          {/* Main Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 relative z-10">
            <div className="flex items-center mb-4">
              <Image
                src="/mike.png" // place your image in public/mike.jpg
                alt="Mike Taylor"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-[#1E2A78] font-semibold">Mike Taylor</h3>
                <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
          </div>

          {/* Background Card (for layered look) */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 absolute top-10 right-0 w-[90%] -z-0 shadow-md opacity-60">
            <h4 className="text-[#1E2A78] font-semibold">Chris Thomas</h4>
            <p className="text-gray-500 text-sm">CEO of Red Button</p>
          </div>
        </div>
      </div>

      {/* BRAND LOGOS */}
      <div className="w-full overflow-hidden mt-10">
        <div className="scroll-container">
          <Image
            src="/logos.png"
            alt="Brand Logos"
            width={1000}
            height={150}
            className="w-1/2 h-auto object-contain"
          />
          <Image
            src="/logos.png"
            alt="Brand Logos Duplicate"
            width={1000}
            height={150}
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </div>
    </section>

  {/* SUBSCRIBE SECTION */}
    <section className="relative bg-[#f8f4ff] rounded-tl-[150px] rounded-3xl mx-8 my-16 py-16 text-center overflow-visible z-10">
  <div className="max-w-5xl mx-4xl px-6">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
      Subscribe to get information, latest news and other interesting offers about{" "}
      <span className="text-indigo-600">Jadoo</span>
    </h2>

    <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 z-10">
      <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-3 w-full md:w-96">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0H2.25" />
        </svg>
        <input
          type="email"
          placeholder="Your email"
          className="outline-none flex-1 text-gray-600"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
      >
        Subscribe
      </button>
    </form>
  </div>

  {/* Floating icon bubble */}
  <div className="absolute top-[-30px] right-6 bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl z-50">
    <div className="p-3 rounded-full">
      <Image
        src="/send.png" // 👈 your custom image
        alt="Subscribe Icon"
        width={70}
        height={70}
        className="rounded-full"
      />
    </div>
  </div>
</section>

<footer className="relative bg-white text-gray-700 py-16 px-6 md:px-20 overflow-hidden">
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10">
    {/* Logo + Description */}
    <div className="md:col-span-2">
      <h2 className="text-3xl font-bold text-[#181E4B]">Jadoo.</h2>
      <p className="text-sm text-gray-500 mt-3 w-[80%]">
        Book your trip in minute, get full control for much longer.
      </p>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-semibold text-black mb-3">Company</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Mobile</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold text-black mb-3">Contact</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li><a href="#">Help/FAQ</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Affiliates</a></li>
      </ul>
    </div>

    {/* More */}
    <div>
      <h3 className="font-semibold text-black mb-3">More</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li><a href="#">Airlinefees</a></li>
        <li><a href="#">Airline</a></li>
        <li><a href="#">Low fare tips</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="relative z-10 mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Social Icons */}
    <div className="flex space-x-4">
      <a href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
        <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
      </a>
      <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 shadow flex items-center justify-center hover:opacity-80">
        <img src="/insta.png" alt="Instagram" className="w-8 h-8" />
      </a>
      <a href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
        <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
      </a>
    </div>

    {/* App Section */}
    <div className="text-center md:text-left">
      <p className="text-gray-700 text-sm mb-3 font-medium">Discover our app</p>
      <div className="flex space-x-3 justify-center md:justify-start">
        <img src="/Google Play.png" alt="Google Play" className="h-8" />
        <img src="/Play Store.png" alt="App Store" className="h-8" />
      </div>
    </div>
  </div>

  {/* Copyright */}
  <p className="relative z-10 text-center text-xs text-gray-500 mt-10">
    All rights reserved © jadoo.co
  </p>
</footer>



    </main>
  )
}
