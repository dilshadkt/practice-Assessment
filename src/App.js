function App() {
  return (
    <main>
      <nav className="flex justify-center bg-yellow-300 font-medium">
        Header
      </nav>
      <div className="flex">
        <div className="flex-1  ">
          <section className="bg-green-400   mx-[15%] ">
            <form className="flex">
              <div className="flex-1 bg-red-400 ">
                <div className="flex items-center justify-between">
                  <div>
                    <label>VrNo :-</label>
                    <input
                      className="border-black border-[1px] w-20 ml-6"
                      type="text"
                    />
                  </div>
                  <div>
                    <label>VrDate :-</label>
                    <input
                      className="border-black border-[1px] w-20 ml-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex my-5">
                  <label>AC Name :</label>
                  <input
                    type="text"
                    className="flex-1 border-black border-[1px]"
                  />
                </div>
              </div>

              <div className="flex-initial w-[30%]  bg-blue-400">w</div>
            </form>
          </section>
          <section>f</section>
        </div>
        <div className="flex-initial w-[10%]"></div>
      </div>
    </main>
  );
}

export default App;
