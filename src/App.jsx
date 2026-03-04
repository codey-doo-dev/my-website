import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Main Section</h2>
      </div>
      <Footer />
    </>
  );
}

export default App;