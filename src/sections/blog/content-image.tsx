import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const ContentImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src={src} alt={alt} className="content-img" />
    </div>
  );
};

export default ContentImage;
