import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Experience from "./pages/Experience";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";
import India from "./pages/India";
import International from "./pages/International";
import InternationalDestinationDetail from "./pages/InternationalDestinationDetails";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<Home />} />

        {/* Individual pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/india" element={<India />} />
        <Route path="/international" element={<International />} />

        {/* Detail pages */}
        <Route path="/india/:id" element={<DestinationDetail />} />
        <Route
          path="/international/:id"
          element={<InternationalDestinationDetail />}
        />
        <Route path="/experience/:id" element={<ExperienceDetail />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
