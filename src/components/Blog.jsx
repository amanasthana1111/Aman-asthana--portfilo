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
          img="https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e247cb513308e6a22189257eb81445ec7a5231715bffbedf1ca7e9a686e391dad1f7757cca3e9424acce921ad81e7c9bf"
          title="How to optimise a Next.js web app"
          desc="Optimise your Next.js web app to make it lightning fast!"
          tags={["Frontend", "Next.Js", "JavaScript", "Performance"]}
          date="January 31, 2026"
          id="nextjs-optimisation"
        />

        <BlogCard
          img="/blog2.jpg"
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
