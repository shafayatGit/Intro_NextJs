"use client";
import { getBlogs } from "@/src/actions/blog.actions";
import { useEffect, useState } from "react";

export default async function AboutPage() {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    (async () => {
      //IIFI function to handle async operation inside useEffect..
      const { data } = await getBlogs();
      setData(data);
    })();
  }, []);

  await new Promise((resolve) => setTimeout(resolve, 4000)); //that will give timeout of 4s
  return <div>AboutPage</div>;
}
