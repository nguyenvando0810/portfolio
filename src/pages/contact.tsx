import React from "react";
import { ContactIcons } from "@/components/ContactIcons";
import { HeaderMain } from "@/components/HeaderMain";
import { TypeAnimation } from "react-type-animation";

const Contact = () => (
  <article className="post" id="contact">
    <HeaderMain title="Contact" />
    <div className="mb-4">
      <p>Feel free to get in touch. You can email me at: </p>

      <TypeAnimation
        sequence={[
          500,
          "nguyen",
          500,
          "nguyenvan",
          500,
          "nguyenvando",
          500,
          "nguyenvando08",
          500,
          "nguyenvando0810",
          500,
          "nguyenvando081096",
          500,
        ]}
        speed={50}
        repeat={Infinity}
      />@gmail.com
    </div>
    <ContactIcons />
  </article>
);

export default Contact;
