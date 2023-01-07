import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
