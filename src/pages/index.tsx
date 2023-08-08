import Card from "@/components/card";
import Navbar from "@/components/navbar";
import BlogCard from "@/sections/blog/blog-card";
import TitleHeader from "@/sections/title-header";
import { BlogType } from "@/types/blog";
import { client } from "@/utils/contenful";
import { Spinner } from "@nextui-org/react";
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
    <main>
      <Navbar />
      {/* <TitleHeader title="My Blog Posts" /> */}
      <section className="max-w-6xl mx-auto px-4 ">
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-6 md:mt-16">
            {/* {blog.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.fields.title}
                summary={blog.fields?.summary}
                cover={blog.fields?.coverImage?.fields.file.url || ""}
                link={`${blog.fields.slug}`}
              />
            ))} */}

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
      </section>
    </main>
  );
}
