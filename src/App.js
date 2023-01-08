import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
      <Events />
      <Team/>
      <Contact />
    </div>
  );
}

export default App;
