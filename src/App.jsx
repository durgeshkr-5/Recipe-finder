import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favorite from "./pages/Favorite"
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      
    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<RecipeDetails />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>

    </>
  )
}

export default App
