import React, { useState } from "react";

const BlogAdmin = () => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    desc: "",
    tags: "",
    imglink: "",
    paragraphs: "",
    moreImg: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: form.id,
      title: form.title,
      desc: form.desc,
      tags: form.tags.split(",").map((t) => t.trim()),
      imglink: form.imglink,
      paragraphs: form.paragraphs
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean),
      moreImg: form.moreImg
        .split(",")
        .map((img) => img.trim())
        .filter(Boolean)
    };

    try {
      const res = await fetch(
        "https://aman-asthana-backend.onrender.com/blogs/edit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json();
      alert("Blog saved successfully!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Error submitting blog");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

        <input
          name="id"
          placeholder="Blog ID (slug)"
          value={form.id}
          onChange={handleChange}
        />

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="desc"
          placeholder="Short description"
          value={form.desc}
          onChange={handleChange}
        />

        <input
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
        />

        <input
          name="imglink"
          placeholder="Main Image URL"
          value={form.imglink}
          onChange={handleChange}
        />

        <textarea
          name="paragraphs"
          placeholder="Paragraphs (comma separated)"
          value={form.paragraphs}
          onChange={handleChange}
        />

        <textarea
          name="moreImg"
          placeholder="Extra image URLs (comma separated)"
          value={form.moreImg}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit Blog
        </button>

      </form>
    </div>
  );
};

export default BlogAdmin;