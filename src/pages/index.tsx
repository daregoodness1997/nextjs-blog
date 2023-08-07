import { client } from '@/utils/contenful';
import Image from 'next/image'
import { useEffect, useState } from 'react';
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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
