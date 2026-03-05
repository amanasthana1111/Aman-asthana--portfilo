import { useState } from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Blog = () => {

   const navigate = useNavigate();
  const [count, setCount] = useState(0);

    const handleClickk = () => {
    const newCount = count + 1;
    console.log(newCount)
    setCount(newCount);

    if (newCount === 10) {
      navigate("/amanasthana12");
    }
  };


  return (
    <>
      {/* Header */}
      <div className="text-sm font-['MyFont1'] text-gray-500 mt-8 flex justify-between">
        <div onClick={handleClickk}>Blogs</div>
      </div>

      {/* Blog Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <BlogCard
          img="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          title="How to optimise a Next.js web app"
          desc="Optimise your Next.js web app to make it lightning fast!"
          tags={["Frontend", "Next.Js", "JavaScript", "Performance"]}
          date="January 31, 2026"
          id="nextjs-optimisation"
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          title="Understanding React Performance"
          desc="Tips and tricks to improve React app performance."
          tags={["React", "Performance", "Frontend"]}
          date="February 10, 2026"
          id="react-performance"
        />
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to={"/blogs"}
          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Show more →
        </Link>
      </div>
    </>
  );
};

export default Blog;
