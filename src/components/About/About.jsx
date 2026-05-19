import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/myimage.jpg"; // ✅ Fixed import path

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shashank Upadhyay
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight">
            <span className="text-white mr-2">I am a</span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "App Developer",
                  "UI/UX Designer",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate full-stack developer with a strong foundation in
            web development and modern technologies. I recently completed my
            Bachelor's degree in Computer Science and have built several
            personal projects using the MERN stack (MongoDB, Express.js, React,
            and Node.js). During my academic journey, I completed an internship
            and gained practical skills. I’m eager to apply my knowledge in a
            professional environment, contribute to impactful projects, and
            continuously grow as a developer.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem]
        md:h-[30rem] border-4 border-purple-600 rounded-full "
          
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}

          >
            <img
              src={profileImage}
              alt="Shashank Upadhyay"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] "
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
