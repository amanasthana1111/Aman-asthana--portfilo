import React from 'react'

const BlogPage = ({id,title,date,desc,tags =[] , imglink,paragraphs = [],moreImg = []}) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 text-gray-200">

      {/* Title */}
      <h1 className="text-3xl font-semibold">{title}</h1>

      {/* Date */}
      <p className="text-gray-400 text-sm mt-2">{date}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-[#1a1a1a] border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main Image */}
      {imglink && (
        <img
          src={imglink}
          alt={title}
          className="mt-6 rounded-xl w-full"
        />
      )}

      {/* Description */}
      {desc && (
        <p className="mt-6 text-gray-300 leading-relaxed">
          {desc}
        </p>
      )}

      {/* Paragraphs */}
      {paragraphs?.map((p, i) => (
        <p
          key={i}
          className="mt-4 text-gray-300 leading-relaxed"
        >
          {p}
        </p>
      ))}

      {/* Extra Images */}
      {moreImg?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`blog-img-${i}`}
          className="mt-6 rounded-xl w-full"
        />
      ))}
    </div>
  )
}

export default BlogPage