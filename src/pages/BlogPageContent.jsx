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
    const [blog, setBlog] = useState(null);

    useEffect(() => {
       window.scrollTo(0,0);
      const fetchBlog = async () => {
        try {
          const res = await fetch(`https://aman-asthana-backend.onrender.com/blogs/${id}`);
          const data = await res.json();
          setBlog(data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchBlog();
    }, [id]);

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
