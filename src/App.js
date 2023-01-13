import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
      <Team />
      <Events />
      <Gallery/>
      <Contact />
    </div>
  );
}

export default App;
