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

  // const [blogs, setBlogs] = useState([]);

  const blogs = [
    {
      id: "nextjs-optimisation",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      title: "Optimising Next.js Apps",
      desc: "Learn practical techniques to optimise your Next.js applications.",
      tags: ["Next.js", "Performance", "Frontend"],
      date: "January 31, 2026"
    },
    {
      id: "react-performance",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      title: "React Performance Tips",
      desc: "Understand React rendering behaviour and optimisation strategies.",
      tags: ["React", "JavaScript", "Frontend"],
      date: "February 10, 2026"
    },
    {
      id: "system-design-basics",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "System Design Basics",
      desc: "A beginner friendly guide to system design concepts.",
      tags: ["System Design", "Backend"],
      date: "February 20, 2026"
    }
  ];

  //     useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/blogs"); // your API
  //       const data = await res.json();
  //       setBlogs(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

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