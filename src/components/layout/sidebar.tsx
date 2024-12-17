import Link from "next/link";
import React from "react";
import avatar from '../../assets/images/avatar.jpeg'
import Image from "next/image";
import { ContactIcons } from "../ContactIcons";
// import ContactIcons from '../Contact/ContactIcons';

export const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link href="/" className="logo">
        <Image src={avatar} alt="avatar" className="rounded-full w-40 h-40 object-cover"  />
      </Link>
      <header className="mt-4">
        <h2 className="header-name">Do Nguyen Van</h2>
        <p className="text-xl">
          <a href="mailto:michael@mldangelo.com" className="send-mail">nguyenvando081096@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="py-14 my-14 border-y	border-slate-300">
      <h2 className="header-title mb-4">About</h2>
      <p>
        Hi, I’m a Front-End developer with around 5 years’ experience in
        software development. Seeking a challenging position in an organization
        where I can use my talents and skills to grow and expand an organization
        as well as myself.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright text-xs">
        &copy;Do Nguyen Van
      </p>
    </section>
  </section>
);
