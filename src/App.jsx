import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Experience from "./pages/Experience";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<Home />} />

        {/* Individual pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/destinations" element={<Destinations />} />

        {/* Detail pages */}
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
