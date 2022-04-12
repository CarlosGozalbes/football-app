import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import SearchGamePage from './pages/searchgamepage/SearchGamePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/searchgame" exact element={<SearchGamePage />} />
          <Route path="/" exact element={<SearchGamePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
