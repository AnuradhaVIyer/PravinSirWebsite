import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/header";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import Services from "./components/Services";
import About from "./components/about";
import SocialLinks from "./components/SocialLinks";
import Courses from "./components/Courses";
import Books from "./components/books";
import LearnersTrust from "./components/Achievements";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import CloudDevOpsConsulting from "./components/Consulting";
import DMI from "./components/dmi";
import Maintenance from "./error-pages/Maintenance";
import ErrorPage from "./error-pages/Error";
import Privacy from "./privacy";
import Terms from "./terms";

function App() {
  return (
    <Router>
      <div className="font-jakarta min-h-screen bg-[#F2F6FC]">

        <main>
          {/* Sticky Navigation under header */}
          <Navigation />

          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                 
                  <About />
                  <Services />
                  <Courses />
                   
                  <Books />
                 <LearnersTrust />
                  <Contact />

                   {/* <SocialLinks /> */}
                </>
              }
            />

            {/* DMI PAGE */}
            <Route path="/dmi" element={<DMI />} />

            {/* OPTIONAL FUTURE ROUTES */}
            {/* <Route path="/consulting" element={<CloudDevOpsConsulting />} /> */}
            {/* Add others if needed */}
            {/* Maintenance Page*/ }
            <Route path="/maintenance" element={<Maintenance />} />
            {/* Error Page*/ }
            <Route path="/error" element={<ErrorPage />} />
            {/* Privacy Page*/ }
            <Route path="/privacy" element={<Privacy />} />
            {/* Terms Page*/ }
            <Route path="/terms" element={<Terms />} />
          </Routes>

          {/* Global Footer */}
          <Footer />
        </main>

      </div>
    </Router>
  );
}

export default App;
