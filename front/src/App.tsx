import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <Header />

      <main className="w-full m-2 max-w-screen-xl mx-auto px-2">
        <div className="flex flex-col justify-between items-center bg-yellow-200">
          {/* Mother div */}
          <div className="flex flex-row gap-4">
            {/* Left side */}
            <div className="flex flex-col bg-green-300">
              <p>NAME HERE</p>
              <input type="date" />
            </div>
            {/* Right side */}
            <div className="flex flex-col bg-blue-400">
              SOME ANIMATION GOING ON HERE
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
