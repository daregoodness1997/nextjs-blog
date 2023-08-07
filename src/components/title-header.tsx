import React from "react";
interface Props {
  title?: string;
}

const TitleHeader: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleHeader;
