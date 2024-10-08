import React from "react";
import SectionHeading from "../../SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-[#0a0a0f] to-[#0f0715] ">
      <SectionHeading>SKILLS</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill,i) => {
          return (
            <section id="skills" key={skill.id}>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 110}`}
              
            >
              <SkillCard skill={skill} />
            </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
