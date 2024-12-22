import React from "react";
import { HeaderMain } from "@/components/HeaderMain";

const aboutMe = [
  {
    title: "Info",
    contents: [
      { label: "Birthday", value: "08/10/1996" },
      { label: "Address", value: "Dinh Cong, Yen Dinh, Thanh Hoa." },
      { label: "Phone", value: "0962 438 147" },
    ],
  },
  {
    title: "Education",
    contents: [
      { value: "[Hanoi University Of Industry, Vietnam]" },
      { value: "[From 2014] - [To 2018]" },
      { label: "Major", value: "Computer Science." },
    ],
  },
  {
    title: "Skills",
    contents: [
      { label: "Languages", value: "Vietnamese, English." },
      {
        label: "Programming",
        value: "HTML/CSS, JavaScript, ReactJS (Js/Ts), NextJs, Vuejs",
      },
      { label: "Management", value: "Team Management, Agile/Scrum." },
    ],
  },
];

const About = () => (
  <article id="about">
    <HeaderMain title="About Me" />

    <h3 className="font-bold uppercase tracking-widest">Who Am I ?</h3>
    <p></p>

    {aboutMe.map((el, index) => (
      <div className="mb-6" key={index}>
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
