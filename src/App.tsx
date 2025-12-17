import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/layouts/nav-bar'
import { AboutMePage } from './pages/AboutMePage'
import { BlogPage } from './pages/BlogPage'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
