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
      <div>
        <div className="w-1/2">
          <Image
            src={"http:" + cover}
            alt={title}
            width={200}
            height={200}
            // fill={true}
            sizes="100%"
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
