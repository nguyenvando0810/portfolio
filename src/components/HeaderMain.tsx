import React from "react";

interface HeaderMain {
  title: string;
  desc?: string;
}

export const HeaderMain = ({ title, desc }: HeaderMain) => (
  <header className="header-main">
    <h2 className="font-black text-2xl">{title}</h2>
    <p className="mb-0">{desc}</p>
  </header>
);
