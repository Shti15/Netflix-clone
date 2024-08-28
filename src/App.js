import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { MoviesData } from "./data/MoviesData";
import TrendingMovies from "./components/TrendingMovies";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Components Folder
          - Navbar
          - Input Fields
          - Button
          - Forms
          - Cards
          - Modals (Popups)

          Pages Folder
          - Homepage.jsx
          - About.jsx
          - MoviePage.jsx

          function ()=> {
              navigate('/MoviePage/23g67g34ub3471')
            }
      */}
      <Router>
        <MoviesData>
          <Nav />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/MoviePage" element={<MoviePage />} />
            <Route path="/MoviePage/:id" element={<MoviePage />} />
          </Routes>
          <TrendingMovies />
        </MoviesData>
      </Router>
    </div>
  );
}

export default App;
