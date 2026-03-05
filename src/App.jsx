import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPageContent from "./pages/BlogPageContent.jsx";
import BlogAdmin from "./pages/BlogAdmin.jsx";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blogs" element = {<BlogPage/>} />
    <Route path="/blogs/:id" element={<BlogPageContent />} />
    <Route path="/amanasthana12" element={<BlogAdmin/>} />
    <Route path="*" element={<Home />} />
  </Routes>
</>
  );
}

export default App;
