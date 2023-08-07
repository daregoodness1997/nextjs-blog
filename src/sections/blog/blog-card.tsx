import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  cover: string;
  title: string;
  summary?: string;
  author?: { img: string; name: string; role?: string };
  type?: "vertical" | "horizontal";
  link: string;
}

const BlogCard: React.FC<Props> = ({
  cover,
  title,
  summary,
  author,
  type = "vertical",
  link,
}) => {
  return (
    <Link href={link}>
      <div className="blog-card">
        <div>
          <img
            src={cover}
            alt={title}
            style={{ width: "100%", height: "200px", objectFit:"cover" , borderRadius:'4px'}}
          />
        </div>

        <div>
          <div>
            <h3>{title}</h3>
            {type === "vertical" && summary ? <p>{summary}</p> : null}
          </div>

          {author && (
            <div>
              {type === "vertical" ? (
                <Image src={author.img} alt={author.name} />
              ) : null}

              <div>
                <h5>{author.name}</h5>
                {type === "vertical" ? <label>{author?.role}</label> : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
