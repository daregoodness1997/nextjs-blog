import React from "react";
import RichText from "./rich-text";

interface Props {
  content?: any;
}

const BlogBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="container">
      <RichText content={content} />
    </div>
  );
};

export default BlogBody;
