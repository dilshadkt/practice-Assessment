import SideNav from "./components/SideNav";

function App() {
  return (
    <main>
      <nav className="flex justify-center bg-yellow-300 font-medium py-2">
        Header
      </nav>
      <div className="flex mr-[100px]">
        <div className="w-full">
          <section className=" mx-[12%]">
            <div className="bg-red-400 flex py-4">
              <div className="flex-1">
                <form></form>
              </div>
              <div className="flex-initial w-[26%] bg-blue-600">f</div>
            </div>
          </section>
          <section></section>
        </div>
        <SideNav />
      </div>
    </main>
  );
}

export default App;
