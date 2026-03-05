import { lazy, Suspense } from "react";
import { motion } from "motion/react";

import Connect from "../components/Connect";
import Credit from "../components/Credit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";

const Song = lazy(() => import("../components/Song"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);



      useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://aman-asthana-backend.onrender.com/blogs"); // your API
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Header />
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              img={blog.img}
              title={blog.title}
              desc={blog.desc}
              tags={blog.tags}
              date={blog.date}
              id={blog.id}
            />
          ))}
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
  );
};

export default BlogPage;