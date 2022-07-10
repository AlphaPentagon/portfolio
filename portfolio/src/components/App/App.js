import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home.js";
import { About } from "../../pages/About.js";
import { Projects } from "../../pages/Projects.js";
import { Layout } from "../../pages/Layout.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
