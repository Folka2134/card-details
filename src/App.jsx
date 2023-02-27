import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="h-80 bg-[#21082F] p-4">
        <div className="card-front h-56 w-96 p-10 rounded-lg bg-gradient-to-br from-[#6142F5] via-[#A353D0] to-[#650792] text-white absolute inset-y-36 inset-x-5 z-10">
          <div className="flex flex-col h-full justify-between pb-4">
            <h1></h1>
            <h1 className="text-center text-3xl tracking-widest">
              0000000000000000
            </h1>
          </div>
          <div className="flex justify-between text-sm">
            <h3 className="uppercase">Jane Appleaseed</h3>
            <p>00/00</p>
          </div>
        </div>
        <div className="card-front h-56 w-96 pt-4 rounded-lg bg-gray-100 right-6 absolute">
          <h1 className="h-10 bg-black">.</h1>
          <div className="p-5">
            <div className="text-right text-white tracking-widest rounded-md p-2 bg-gray-400">
              000
            </div>
          </div>
        </div>
      </div>
      <main className="p-10 mt-12">
        <form className="flex flex-col justify-evenly h-96">
          <div>
            <label
              className="text-sm font-semibold tracking-wider uppercase"
              htmlFor="cardName"
            >
              Cardholder Name
            </label>
            <input
              className="w-full p-2 border-2 border-gray-300 mt-2"
              type="text"
              placeholder="e.g Jane Appleseed"
            />
          </div>
          <div>
            <label
              className="text-sm font-semibold tracking-wider uppercase"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className="w-full p-2 border-2 border-gray-300 mt-2"
              type="text"
              placeholder="e.g 1234 5678 9123 0000"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label
                className="text-sm font-semibold tracking-wider uppercase"
                htmlFor="cardNumber"
              >
                Exp. Date (mm/yy)
              </label>
              <div className="flex">
                <input
                  className="w-14 p-2 border-2 border-gray-300 mr-3 mt-2"
                  type="text"
                  placeholder="MM"
                />
                <input
                  className="w-14 p-2 border-2 border-gray-300 mr-3 mt-2"
                  type="text"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-semibold tracking-wider uppercase"
                htmlFor="cardNumber"
              >
                CVC
              </label>
              <input
                className="w-28 p-2 border-2 border-gray-300 mr-3 mt-2"
                type="text"
                placeholder="e.g 123"
              />
            </div>
          </div>
          <input
            className="bg-[#21082F] text-white p-4 rounded-xl"
            type="submit"
            value="Confirm"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
