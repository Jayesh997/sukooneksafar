// App.js
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import DestinationDetail from "./pages/DestinationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";
import InternationalDestinationDetail from "./pages/InternationalDestinationDetails";
import ScrollToTop from "./ScrollToTop";
import ScrollToSectionOnLoad from "./components/ScrollToSectionOnLoad";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <ScrollToSectionOnLoad />
      <Routes>
        {/* Home page with all sections - this handles /, /india, /international, /services, /about */}
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<Home />} />
        <Route path="/international" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />

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
