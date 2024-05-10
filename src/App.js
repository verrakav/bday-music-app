import NewUserPage from "./pages/NewUserPage";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1 className="flex flex-row items-center justify-center w-full m-8">
        Make your own bday playlist!
      </h1>
      <Button className="absolute top-0 right-0">archive?</Button>
      <div className="container mx-auto m-16">
        <div className="flex flex-row md:flex-row justify-around items-center ">
          <div className="align center">
            <NewUserPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
