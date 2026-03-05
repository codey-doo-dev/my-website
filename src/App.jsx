import Navbar from "./Components/Navbar";
import { Btn } from "./Components/Btn";
import { Main } from "./Components/Main";
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