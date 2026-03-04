import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./components/Blog.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPageContent from "./pages/BlogPageContent.jsx";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blogs" element = {<BlogPage/>} />
    <Route path="/blogs/:id" element={<BlogPageContent />} />
    <Route path="*" element={<Home />} />
  </Routes>
</>
  );
}

export default App;
