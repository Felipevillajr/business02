import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
}

export default App;
