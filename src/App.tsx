import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./index.css";
import Search from "./pages/Search";
import Globesample from "./pages/Globesample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* 샘플 페이지 */}
      <Route path="/three" element={<Globesample/>}/>

      {/* 검색 페이지 */}
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
