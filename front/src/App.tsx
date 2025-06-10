//  hooks
//  components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import BdaysPicker from "./components/BdaysPicker";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <Header />

      <main className="w-full m-2 max-w-screen-xl mx-auto px-2">
        <div className="flex flex-col justify-between items-center bg-yellow-200">
          {/* Mother div */}
          <div className="flex flex-row gap-4">
            {/* Left side */}
            <BdaysPicker />
            {/* Right side */}
            <div className="flex flex-col w-1/3 bg-blue-400">
              SOME ANIMATION GOING ON HERE / playlist
              <button>SPOTIFY REQ</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
