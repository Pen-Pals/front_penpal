import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { Layout } from "./utils/layout/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Globesample from "./pages/Globesample";
import Mail from "./pages/Mail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 샘플 페이지 */}
        <Route path="/three" element={<Globesample />} />

        {/* 검색 페이지 */}
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Mail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
