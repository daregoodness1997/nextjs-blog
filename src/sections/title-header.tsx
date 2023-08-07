import React from "react";
interface Props {
  title?: string;
}

const TitleHeader: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="flex items-center px-12 py-20 bg-[#121212] justify-center"
      // style={{
      //   backgroundColor: "#121212",
      //   padding: "6rem",
      //   display: "flex",
      //   justifyContent: "center",
      // }}
    >
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export default TitleHeader;
