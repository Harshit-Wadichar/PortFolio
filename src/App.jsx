
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

import {
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiC,
  SiJavascript,
  SiHtml5,
  SiVercel,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiPython,
  SiOpenstreetmap,
} from "react-icons/si";

import { FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function App() {
  const skills = [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express.js", Icon: SiExpress },
    { name: "Postman API", Icon: SiPostman },
    { name: "CSS3", Icon: SiCss3 },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "React.js", Icon: SiReact },
    { name: "C Language", Icon: SiC },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "Vercel", Icon: SiVercel },
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "SQL (MySQL)", Icon: SiMysql },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Python", Icon: SiPython },
    { name: "Cartography", Icon: SiOpenstreetmap },
  ];

  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/Harshit-Wadichar",
      Icon: SiGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshit-wadichar-12b4482bb",
      Icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mapzshapz/",
      Icon: FaInstagram,
    },
  ];

  const slides = [
    {
      id: 1,
      title: "Snakes and Ladders Quiz War",
      description:
        "Snakes & Ladders Quiz War is a fast-paced 2-player game combining dice, math quizzes, and strategy in a fun twist on the classic board game.",
      imageUrl: "salqw.png",
      githubURL:
        "https://github.com/Harshit-Wadichar/Snakes-and-ladders-quiz-war.git",
      vercel: "https://snakes-and-ladders-quiz-war.vercel.app/",
    },
    {
      id: 2,
      title: "Smart Teacher Evaluation Platform(STEP)",
      description:
        "Smart Teacher Evaluation Platform (STEP) is a user-friendly web app that enables students to give quick, anonymous feedback on teaching. It offers customizable surveys, real-time analytics, and easy reports to help educators improve continuously.",
      imageUrl: "step.png",
      githubURL: "#",
    },
    {
      id: 3,
      title: "Other Projects",
      description:
        "Small projects like calculator, rock paper scissors game, tic-tac-toe game, snakes and ladders game, to do list and etc which i created to build my logic.",
      imageUrl: "image.png",
      githubURL: "https://github.com/Harshit-Wadichar/my-websites.git",
    },
  ];

  // Duplicate first slide at the end for seamless loop
  const loopSlides = [...slides, slides[0]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => handleNext(), 6000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    if (currentIndex < loopSlides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    // If we've reached the duplicate slide, snap back to start without transition
    if (currentIndex === loopSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const sections = [
    { id: "about", label: "About", icon: HomeIcon },
    { id: "skills", label: "Skills", icon: UserIcon },
    { id: "projects", label: "Projects", icon: BriefcaseIcon },
    { id: "profiles", label: "Profiles", icon: GlobeAltIcon },
    { id: "contact", label: "Contact", icon: EnvelopeIcon },
    { id: "/resume.pdf", label: "Resume", icon: DocumentArrowDownIcon },
  ];

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");


useEffect(() => {
    if (state.succeeded) {
      setText("Thanks for your message!");
      setTimeout(()=> {
        setText("");
      }, 5000);
      //  clear form inputs
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded]);

  return (
    <div className="overflow-x-hidden bg-gradient-to-t from-purple-300 to-indigo-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#2d2e32] backdrop-blur-sm shadow-md z-20 border-b border-gray-700">
        <nav className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-8 py-3">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            {sections.map((sec) => (
              <a
                key={sec.id}
                  download={sec.id === "/resume.pdf" ? true : undefined}
                href={sec.id === "/resume.pdf" ? "/harshit_resume.pdf"  : `#${sec.id}`}
                className={`flex items-center px-4 py-2 rounded-lg text-white text-base font-medium transition-all duration-500 ease-in-out
            ${
              sec.id === "/resume.pdf"
                ? "bg-blue-600 hover:bg-[#2d2e32] shadow-md border border-blue-600 hover:border-white"
                : "hover:bg-blue-600 hover:text-white"
            }`}
              >
                <sec.icon className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:scale-110" />
                <span>{sec.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Top spacer so fixed header doesn’t cover content */}
      <div className="h-16" />

      {/* Main content */}
      <main>
        {sections
          .filter((sec) => sec.id !== "/resume.pdf")
          .map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className={` w-screen flex flex-col justify-center items-center m-0 p-0`}
            >
              {sec.id === "projects" ? (
         <div className="mt-32 w-full  mx-auto flex flex-col items-center relative">
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-0 md:mb-0">
    My Projects
  </h2>
  <div className="h-full w-full overflow-hidden relative">
    <div
      ref={slideRef}
      onTransitionEnd={handleTransitionEnd}
      className="flex items-center h-full"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: isTransitioning ? 'transform 0.5s ease' : 'none'
      }}
    >
      {loopSlides.map((slide, index) => (
        <div
          key={index}
          className="flex-shrink-0  w-full  mt-4 md:mt-10 mb-0  flex flex-col 2xl:flex-row items-center justify-center overflow-hidden transform transition-transform hover:scale-105"
        >
          <div className="flex flex-col md:flex-row w-full h-full">
            {/* Image */}
            <div className="my-2 max-h-[500px] w-full md:w-1/2 h-48 sm:h-64 md:h-auto ">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-contain p-4 "
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 max-w-[90%]">
                {slide.title}
              </h3>
              <p className="max-w-[80%] text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 sm:space-x-4">
                <a
                  href={slide.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                {slide.vercel && (
                  <a
                    href={slide.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Prev Button */}
    <button
      onClick={handlePrev}
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
    >
      {/* Add icon or text for prev */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Next Button */}
    <button
      onClick={handleNext}
      className="absolute right-2 sm:right-4  top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
    >
      {/* Add icon or text for next */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  {/* Dots */}
  <div className=" flex mt-4 justify-center space-x-2 ">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => {
          setCurrentIndex(idx);
          setIsTransitioning(true);
        }}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
          currentIndex === idx ||
          (currentIndex === loopSlides.length - 1 && idx === 0)
            ? "bg-blue-500"
            : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>


              ) : sec.id === "about" ? (
                <div className="max-w-2xl mt-24 text-center space-y-8">
                  <div className="absolute inset-0  opacity-50 -z-10"></div>

                  <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                    Hello, I’m{" "}
                    <span className="text-white bg-blue-600 px-1">
                      Harshit Wadichar
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-medium text-gray-700">
                    Crafting dynamic, responsive web applications end-to-end.
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed">
                    I’m a full‑stack developer with a passion for building
                    scalable, high‑performance web solutions. Continuously
                    refining my Data Structures & Algorithms skills to optimize
                    problem‑solving and code efficiency. Exploring Machine
                    Learning fundamentals—algorithm design, data preprocessing,
                    and model evaluation—to add intelligent features to my
                    projects.
                  </p>
                </div>
              ) : sec.id === "skills" ? (
                <div className="max-w-5xl mt-32 mx-auto px-4 text-center">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                    My Skills
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map(({ name, Icon }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center bg-white p-4 rounded-xl shadow transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      >
                        <Icon className="text-5xl text-blue-600 mb-2" />
                        <span className="mt-1 text-sm font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : sec.id === "profiles" ? (
                <div className=" mt-32 mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                    My Profiles
                  </h2>
                  <div className="flex lg:flex-row flex-col items-center">
                    {profiles.map(({ name, url, Icon }) => (
                      <a
                      key={name}
                        href={url}
                        className={`flex flex-row items-center m-4 xl:m-8 py-2 px-24 rounded-lg text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg
             ${
               name === "GitHub"
                 ? "bg-gray-700"
                 : name === "LinkedIn"
                 ? "bg-blue-600"
                 : name === "Instagram"
                 ? "bg-pink-600"
                 : "bg-gray-500"
             }`}
                      >
                        <Icon className="text-3xl text-white mr-3" />
                        <span className="text-xl font-300 ">{name}</span>{" "}
                      </a>
                    ))}
                  </div>
                </div>
              ) : sec.id === "contact" ? (
                <div className="mt-32 mb-10 px-4 w-full mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
                    Contact Me
                  </h2>

                  <div className="flex flex-col md:flex-row md:items-start justify-center items-start gap-4">
                    {/* Contact Info — 30% width on md+ */}
                    <div className="w-full md:w-[30%] flex flex-col items-start">
                      <span className="flex items-center text-lg text-gray-800 mt-2">
                        <MdEmail className="mr-3 text-2xl text-blue-600" />
                        manohar.wadichar9545@gmail.com
                      </span>
                      <span className="flex items-center text-lg text-gray-800 mt-4">
                        <FaPhoneAlt className="mr-3 text-xl text-blue-600" />
                        +91 7498208265
                      </span>
                    </div>

                    {/* Form — 60% width on md+ */}
                    <div className="w-full md:w-[60%] flex justify-center">
         <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mt-2 px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mt-4 px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full mt-4 px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 px-8 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
      >
        Send Message
      </button>

{text && (
        <div className="mt-4 bg-white rounded-lg text-green-600 text-xl text-center">
          <h3>{text}</h3>
        </div>
      )}

    </form>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center px-4">
                  <h2 className="text-4xl font-bold mb-4">{sec.label}</h2>
                  <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum.
                  </p>
                </div>
              )}
            </section>
          ))}
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Harshit Wadichar. All rights reserved
          </p>
          <p className="text-xs mt-2">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
