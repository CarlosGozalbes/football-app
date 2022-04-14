import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import SearchGamePage from './pages/searchgamepage/SearchGamePage';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/searchgame" exact element={<SearchGamePage />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
