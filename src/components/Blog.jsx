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
          title="Binary Search on Answer and Linked List Pattern Revision"
          desc="Today I revised important Data Structures and Algorithms patterns including Binary Search problems and Linked List."
          tags={["Dsa", "BinarySearch","Linked List"]}
          date="January 31, 2026"
          id="dsa-revision-binary-search-linkedlist-001"
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          title="Binary Search Revision"
          desc="Today I revised the complete Binary Search concept from A to Z by going through 26 videos and problems. This revision covered multiple patterns like standard binary search, first and last occurrence, rotated arrays, peak element, and binary search on answer."
          tags={["Dsa", "BinarySearch"]}
          date="February 10, 2026"
          id="binary-search-revision-a-to-z"
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
