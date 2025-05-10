import Image from "next/image";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import "./globals.css";

export default function Home() {
  return (
    <>
      <nav className="bg-white flex items-center justify-between text-black max-h-20 py-5 max-w-6xl fixed top-[25px] left-1/2 transform -translate-x-1/2 w-[90%] px-[30px] rounded-[30px] shadow-lg z-[1000]">
        <Image
          src="/images/andrew.jpg"
          alt="Site Logo"
          width={70}
          height={70}
          className="rounded-full grayscale hover:grayscale-0"
        />

        <ul className="flex space-x-5">
          {["/home", "/skills", "/journey", "/projects"].map((item, index) => (
            <li
              key={item}
              className="hover:text-green-500 relative group transition-all duration-200 ease-in-out animate-fade-in"
              style={{
                animation: "fadeIn 0.3s ease-in-out forwards",
                animationDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={item}
                className="transition-transform duration-200 group-hover:scale-105 capitalize"
              >
                {item.replace("/", "")}
                <span className="block h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="text-gray-600 body-font pt-48">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src="/images/1212.jpg"
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Anci4nttt.
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Frontend Development
                    <br />🕸<br />
                    Video Editor
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  A 14 year old doing competitive programming and frontend web
                  development. I have been doing coding for the past 4 years and web
                  development for 3.5 years.
                  <br />
                  Welcome to my portfolio!! Here you will find everything about me
                  and what I have done in my professional life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-10">/skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Languages */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Dart</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Frameworks & Libraries
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Astro.js</li>
                <li>Flutter</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Git & GitHub</li>
                <li>Framer</li>
                <li>Figma</li>
                <li>Vercel & Netlify</li>
              </ul>
            </div>

            {/* Others */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Others</h3>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Video Editing</li>
                <li>Graphic Design</li>
                <li>Database Management</li>
                <li>Marketing</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

            <Projects />

    </>
  );
}
