import React from "react";
import { HeaderMain } from "@/components/HeaderMain";

const aboutMe = [
  {
    title: "My Skills",
    contents: [
      { label: "Languages", value: "Vietnamese, English." },
      {
        label: "Programming",
        value: "Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js, Redux, Tailwind CSS, UI Libraries (React-Bootstrap, MUI, Chakra UI), Redux Toolkit, JEST, Unit Testing.",
      },
      { label: "Management", value: "Team Management, Agile/Scrum." },
    ],
  },
];

const About = () => (
  <article id="about">
    <HeaderMain title="About Me" desc="Who Am I?" />

    <h3 className="font-bold uppercase tracking-widest">Intro</h3>
    <p className="text-[#646464] mb-2">
      `Hi! My name is Do Nguyen Van. I am a passionate developer having
      experience in Frontend & Mobile App development complemented by backend
      expertise and I&apos;m currently working at <b>NAL</b> as a <b>Software
      Developer Engineer</b>. I am much interested in developing new things which
      excite me a lot. :)
    </p>
    <p className="text-[#646464]">
      I love exploring new technologies and being a practitioner, I like to stay
      on top of latest trends. I try to leave every line of code I write more
      readable, accessible, and modular. My problem-solving mindset and active
      GitHub profile showcase my commitment to innovative and collaborative
      coding.
    </p>

    {aboutMe.map((el, index) => (
      <div className="mb-6 mt-6" key={index}>
        <h3 className="font-bold uppercase tracking-widest">{el.title}</h3>
        {el.contents.map((content, i) => (
          <p key={i} className="text-[#646464]">
            {content?.label && <b>{content?.label}:</b>} {content.value}
          </p>
        ))}
      </div>
    ))}
  </article>
);

export default About;
