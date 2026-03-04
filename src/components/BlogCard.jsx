import { FaArrowRight, FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, desc, tags = [], date, id }) => {
  return (
    <div className="max-w-sm rounded-2xl border border-white/10 bg-[#0f0f0f] overflow-hidden hover:border-white/20 transition">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white font-light">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-400 text-sm">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className=" font-semibold px-2 py-1 text-xs rounded-full bg-[#1a1a1a] border border-white/10 text-gray-200"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaRegCalendar className="text-xs" />
            {date}
          </div>

          <Link
            to={`/blogs/${id}`}
            className="flex items-center gap-1 hover:text-white transition"
          >
            Read More
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;