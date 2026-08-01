import React from "react";
import SectionHeading from "../../SectionHeading";

const About = () => {
  return (
    <section id="about">
      <div className="bg-gradient-to-b from-[#0f0715] to-[#0a0b1f] flex flex-col items-center justify-center">
        <SectionHeading>ABOUT ME</SectionHeading>
        {/* Description */}
        <p className="mt-6 text-center text-gray-300 text-lg sm:text-xl md:text-2xl w-4/5 md:w-2/5">
          I am currently pursuing a BSc in Information Technology at the
          University of Moratuwa. As a as a Quality Assurance Engineer, I have a
          passion for learning new technologies and delivering high-quality
          software. My goal is to leverage my skills and knowledge to bridge the
          gap between development and operations, ensuring efficient and
          reliable software delivery.
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className=" flex flex-col md:flex-row items-center justify-center mt-4 space-y-6 md:space-y-0 md:space-x-8"
        >
        </div>
      </div>
    </section>
  );
};

export default About;
