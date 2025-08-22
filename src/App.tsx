import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ProfilePop from "./components/ProfilePop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/characters" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
        <ProfilePop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
