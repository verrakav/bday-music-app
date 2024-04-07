import NewUserPage from "./pages/NewUserPage";

function App() {
  return (
    <div>
      <h1 className="flex flex-row items-center justify-center w-full m-8">
        Make your own bday playlist!
      </h1>
      <div className="container mx-auto m-16">
        <NewUserPage />
      </div>
    </div>
  );
}

export default App;
