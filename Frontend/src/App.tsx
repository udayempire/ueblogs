import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/" element={<Blogs/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )}
export default App
