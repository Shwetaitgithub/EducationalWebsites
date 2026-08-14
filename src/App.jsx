import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Results from "./pages/Results";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/results" element={<Results />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;