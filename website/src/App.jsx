import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import About from "./components/about";
import CloudDevOpsConsulting from "./components/Consulting";
import Courses from "./components/Courses";
import LearnersTrust from "./components/Achievements";
import Contact from "./components/contact";
import SocialLinks from "./components/SocialLinks";
import Hero from "./components/hero";
import Books from "./components/books";
import Footer from "./components/footer";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import DMI from "./components/dmi";

function App() {
  return (
    <Router>
      <div
        className="font-jakarta min-h-screen"
        style={{ backgroundColor: "#F2F6FC" }}
      >
        <Header />

        <main>
          <Navigation />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <About />
                  <SocialLinks />
                  <Courses />
                  <Books />
                  <LearnersTrust />
                  <Contact />
                </>
              }
            />
            <Route path="/dmi" element={<DMI />} />
            
          </Routes>

          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
