import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import PostGamePage from './pages/postgamepage/PostGamePage';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<PostGamePage />} />{" "}
          {/* searchgame */}
          <Route path="/fdsafdsaafdaf" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
