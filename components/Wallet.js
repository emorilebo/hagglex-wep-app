import Activity from "./Activity";
import CoinActivity from "./CoinActivity";

function Wallet() {
  return (
    <div className="bg-white rounded mx-2 my-2">
      <div className="flex justify-between m-2">
        <h1>Wallet</h1>
        <div className="flex">
          <button>List</button>
          <button>Stats</button>
        </div>
      </div>
      <div className="flex m-2 p-2">
          <p>FLEX</p>
          <p>VAULT</p>
      </div>
      <Activity/>
    </div>
  );
}

export default Wallet;
