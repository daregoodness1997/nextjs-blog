import Card from "@/components/card";
import Layout from "@/layout";
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
    <Layout title="My Blog Post">
      <>
        {loading ? (
          <div className="w-full h-1/2 md:h-[600px] flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-6 md:mt-8">
            {blog.map((blog) => (
              <Card
                key={blog.id}
                title={blog.fields.title}
                summary={blog.fields?.summary}
                cover={blog.fields?.coverImage?.fields.file.url || ""}
                link={`${blog.fields.slug}`}
              />
            ))}
          </div>
        )}
      </>
    </Layout>
  );
}
