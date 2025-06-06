//  hooks
import { useState } from "react";
//  components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  const [bdays, setBdays] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  //  collects dates from the user
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBdays((prev) => {
      //  if there's no prev uses []
      if (bdays.length <= 5) {
        return [...(prev || []), e.target.value];
      } else {
        return [...prev];
      }
    });
    if (bdays.length === 5) setMessage("Enough bdays!");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <Header />

      <main className="w-full m-2 max-w-screen-xl mx-auto px-2">
        <div className="flex flex-col justify-between items-center bg-yellow-200">
          {/* Mother div */}
          <div className="flex flex-row gap-4">
            {/* Left side */}
            <div className="flex flex-col w-2/3 bg-green-300">
              <p>NAME HERE</p>
              <input type="date" value={bdays} onChange={handleChange} />
              <ul>
                {bdays.map((date, idx) => {
                  return <li key={idx}>{date}</li>;
                })}
                {message && <li>{message}</li>}
              </ul>
            </div>
            {/* Right side */}
            <div className="flex flex-col w-1/3 bg-blue-400">
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
