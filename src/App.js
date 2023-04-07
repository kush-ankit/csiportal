import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <img src="https://i.ibb.co/D96qPDx/2ewf.png" alt="back" className='fixed h-screen w-screen -z-50 md:hidden' />
      <Home />
      <Events />
      <Team />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
