import React from "react";
import ContentImage from "./content-image";

interface Props {
  title: string;
  coverImage: string;
  summary?: string;
  date?: string;
}
const BlogHeader: React.FC<Props> = ({ title, coverImage, date , summary}) => {
  return (
    <section className="container">
      <h2>{title}</h2>
      <p className="italic text-gray-300 mb-6">{summary}</p>
      <div className="hidden md:flex md:justify-between md:items-center md:mb-10 my-2"></div>
      <div className="mb-8 md:mb-16 sm:mx-0 mt-2">
        <ContentImage alt={`Cover Image for ${title}`} src={coverImage} />
      </div>
    </section>
  );
};

export default BlogHeader;
