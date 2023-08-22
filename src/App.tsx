import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { Layout } from "./utils/layout/Layout";
import { Login, Signup, Search, Globesample, Mail } from "./pages";
import MailGlobe from "./components/globe/MailGlobe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 샘플 페이지 */}
        <Route path="/three" element={<MailGlobe />} />

        {/* 검색 페이지 */}
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Layout />}>
          <Route path="/mail" element={<Mail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
