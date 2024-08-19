import NewUserPage from "./pages/NewUserPage";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div className="container flex  flex-column mx-auto m-16">
        <h1 className="flex items-center justify-center w-full m-8">
          Make your own bday playlist!
        </h1>
        <NewUserPage />
      </div>
    </div>
  );
}

// export default App;
