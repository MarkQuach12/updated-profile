import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/layouts/nav-bar";
import { AboutMePage } from "./pages/AboutMePage";
import { BlogPage } from "./pages/BlogPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import Snowfall from 'react-snowfall'
import { useTheme } from "next-themes";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Snowfall color={theme === "dark" ? "white" : "#D3D3D3"} snowflakeCount={50} style={{ position: "fixed", width: "100%", height: "100%" }} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
