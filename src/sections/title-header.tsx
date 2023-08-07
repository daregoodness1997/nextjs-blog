import React from "react";
interface Props {
  title?: string;
}

const TitleHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="title-header-container">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleHeader;
