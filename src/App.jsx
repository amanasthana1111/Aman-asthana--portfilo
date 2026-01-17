import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
