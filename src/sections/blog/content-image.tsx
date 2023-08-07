import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const ContentImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{width:'100%', height:"400px"}} />
    </div>
  );
};

export default ContentImage;
