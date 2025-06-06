function App() {
  return (
    <>
      <header>
        HEADER GOING HERE
        <div>USER ACC</div>
        <div>SIGN IN / LOG IN</div>
      </header>

      <main>
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

      <footer>
        <p>made by verrakav - idea: namliw</p>
      </footer>
    </>
  );
}

export default App;
