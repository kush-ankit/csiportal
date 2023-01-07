import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
