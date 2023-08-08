import React from "react";
import TitleHeader from "./sections/title-header";
import Navbar from "./components/navbar";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({ children , title}) => {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 ">
        <TitleHeader title={title} />
        {children}
      </section>
    </main>
  );
};

export default Layout;
