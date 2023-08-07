import React from "react";
import TitleHeader from "./sections/title-header";

interface TitleHeaderProps {
  children: React.ReactNode;
  title: string;
}

const Layout = () => {
  return (
    <main>
      <TitleHeader title="" />
    </main>
  );
};

export default Layout;
