import BlogBody from "@/sections/blog/blog-body";
import BlogHeader from "@/sections/blog/blog-header";
import TitleHeader from "@/sections/title-header";
import { BlogType } from "@/types/blog";
import { client } from "@/utils/contenful";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState<BlogType>({ fields: {} });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "blog",
          "fields.slug": slug,
        });

        setBlog(response.items["0"]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      <Head>
        <title>Blog Details</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <TitleHeader title={blog?.fields.title || ""} />

        <section className="container">
          <button onClick={() => router.push("/")}>Go Back</button>

          <BlogHeader
            title={blog?.fields.title || ""}
            coverImage={blog?.fields?.coverImage?.fields.file.url || ""}
          />
          <h2>{blog?.fields.title}.</h2>
          <p className="italic text-gray-300 mb-6">{blog?.fields.summary}</p>
          <BlogBody content={blog?.fields?.content || ""} />
        </section>
      </main>
    </div>
  );
};

export default BlogDetail;
