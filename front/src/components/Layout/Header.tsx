export default function Header() {
  return (
    <header className="text-white bg-blue-900 py-4">
      <div className="mx-auto px-4 flex justify-around items-center">
        <h1 className="text-2xl font-semibold tracking-wider">BDAY Music</h1>
        <div className="flex flex-row">
          <div className="mx-2">USER ACC</div>
          <div className="mx-2">LOG IN</div>
        </div>
      </div>
    </header>
  );
}
