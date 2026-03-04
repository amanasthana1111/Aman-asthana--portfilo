import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BlogPage from "../components/BlogPage";
import { motion } from "motion/react";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Song from "../components/Song";
import Credit from "../components/Credit";
import { lazy, Suspense } from "react";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogPageContent = () => {
    const Song = lazy(() => import("../components/Song"));
  const { id } = useParams();
  const blog = {
    id: "nextjs-optimisation",
    title: "Optimising Next.js Applications for Performance",
    date: "January 31, 2026",
    desc: "Next.js is powerful, but without proper optimisation your app can become slow. In this guide we explore simple strategies to improve performance.",

    tags: ["Next.js", "Performance", "Frontend", "JavaScript"],

    imglink: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

    paragraphs: [
      "Next.js provides many built-in optimisations such as server-side rendering, static generation, and image optimisation. However, developers must still follow best practices to fully benefit from these features.",

      "One of the most important steps is reducing unnecessary re-renders. Using memoization techniques like React.memo, useMemo, and useCallback can significantly improve performance in larger applications.",

      "Another key optimisation is code splitting. Next.js automatically splits your bundles by route, but dynamic imports can help load heavy components only when needed.",

      "Finally, optimising images and reducing unused JavaScript can drastically improve loading time. Tools like Lighthouse and Web Vitals can help identify bottlenecks.",
    ],

    moreImg: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    ],
  };
  //   const [blog, setBlog] = useState(null);

  //   useEffect(() => {
  //     const fetchBlog = async () => {
  //       try {
  //         const res = await fetch(`http://localhost:5000/blogs/${id}`);
  //         const data = await res.json();
  //         setBlog(data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     fetchBlog();
  //   }, [id]);

  if (!blog) {
    return <p className="text-gray-400 text-sm mt-6">Loading blog...</p>;
  }

  return (
    <>
      <div className="w-full bg-[#000000] min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Header />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <BlogPage
              id={blog.id}
              title={blog.title}
              date={blog.date}
              desc={blog.desc}
              tags={blog.tags || []}
              imglink={blog.imglink}
              paragraphs={blog.paragraphs || []}
              moreImg={blog.moreImg || []}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Connect />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <Footer />
          </motion.div>

          <Suspense
            fallback={
              <p className="text-gray-500 text-sm mt-6">Loading music...</p>
            }
          >
            <Song />
          </Suspense>

          <Credit />
        </div>
      </div>

    </>
  );
};

export default BlogPageContent;
