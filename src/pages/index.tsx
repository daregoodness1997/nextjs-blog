import BlogCard from "@/sections/blog/blog-card";
import TitleHeader from "@/sections/title-header";
import { BlogType } from "@/types/blog";
import { client } from "@/utils/contenful";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [blog, setBlog] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "blog",
        });

        setBlog(response.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <main >
      <TitleHeader title="My Blog Posts" />
      <section>
        {loading ? (
          <div>
            <div> Loadiing...</div>
          </div>
        ) : (
          <div className="container blog-container">
            {blog.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.fields.title}
                summary={blog.fields?.summary}
                cover={blog.fields?.coverImage?.fields.file.url || ""}
                link={`${blog.fields.slug}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
