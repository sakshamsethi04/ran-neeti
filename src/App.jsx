import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import PageTransition from "./components/PageTransition";
import Register from "./pages/register";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Arena from "./pages/Arena";
import About from "./pages/About";

function App() {
  return (  
    <>
      <CursorGlow />

      <Navbar />

      <PageTransition>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          <Route path="/arena" element={<Arena />} />

          <Route path="/about" element={<About />} />
          <Route
  path="/register"
  element={<Register />}
/>
        </Routes>
      </PageTransition>

    </>
  );
}

export default App;