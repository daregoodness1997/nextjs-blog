import Layout from "@/layout";
import BlogBody from "@/sections/blog/blog-body";
import BlogHeader from "@/sections/blog/blog-header";
import TitleHeader from "@/sections/title-header";
import { BlogType } from "@/types/blog";
import { client } from "@/utils/contenful";
import { Button, Spinner } from "@nextui-org/react";
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
    <Layout title={blog?.fields.title || ""}>
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
        <>
          {loading ? (
            <div className="w-full h-1/2 md:h-[600px] flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          ) : (
            <section>
              <div className="py-4">
                <Button size="md" onClick={() => router.push("/")}>
                  Go Back
                </Button>
              </div>

              <BlogHeader
                title={blog?.fields.title || ""}
                coverImage={blog?.fields?.coverImage?.fields.file.url || ""}
                summary={blog?.fields.summary}
              />
            
              <BlogBody content={blog?.fields?.content || ""} />
            </section>
          )}
        </>
      </main>
    </Layout>
  );
};

export default BlogDetail;
