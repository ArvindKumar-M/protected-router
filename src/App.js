import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { AuthProvider } from "./components/context/Authentication";
import "./components/styles.css";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/loginform" element={<LoginForm />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
