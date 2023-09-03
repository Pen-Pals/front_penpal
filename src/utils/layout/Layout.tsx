import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import WriterBox from "../../components/editor/WriterBox";
export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <WriterBox />
      <Sidebar />
    </>
  );
}
