function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <header className="text-white bg-blue-900 py-4">
        <div className="mx-auto px-4 flex justify-around items-center">
          <h1 className="text-2xl font-semibold tracking-wider">BDAY Music</h1>
          <div className="flex flex-row">
            <div className="mx-2">USER ACC</div>
            <div className="mx-2">LOG IN</div>
          </div>
        </div>
      </header>

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

      <div>
        <footer className="text-white bg-blue-900 py-4 flex flex-col items-center">
          <p>idea: namliw 2023</p>
          <p>made: verrakav 2025</p>
          <p>lol</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
