import Image from "next/image";

function WalletSummary() {
  return (
    <div>
      <div className="bg-white max-w-full m-2 pt-2 rounded-md">
        <div className="bg-yellow-500 m-5 p-5 rounded-md cursor-pointer">
          <div className="flex">
            <img src="/bitcoins.png" className="h-10" />
            <div className="ml-6">
              <p className="text-xs font-semibold">Total Wallet Balance</p>
              <p className="text-2xl font-semibold ">0.0000000 BTC</p>
              <div className="bg-white rounded-3xl p-1">
                <p className="text-xs font-semibold">
                  Available Escrow wallet: 0.000000BTC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div CLASS="bg-gray-200 p-4">
            <button className="mx-6 font-bold">SEND</button>
            <button className="mx-6">DEPOSIT</button>
            <button className="mx-6">TRANSFER</button>
            <button className="mx-7">TRANS. HISTORY</button>
          </div>
        </div>
        <div className="border-2 m-6 rounded-t-lg">
          <div className="flex justify-between border-b">
            <button className="bg-gray-100 m-6">EXTERNAL WALLET</button>
            <button className="bg-gray-100 m-6">HAGGLEX WALLET</button>
          </div>
          <p className="font-semibold">Amount to send</p>
          <div className="flex items-baseline">
            <p className="text-5xl font-semibold">0.00</p>
            <p>NGN</p>
          </div>
          <di className="flex justify-end">
              <div className="border"/>
              <img src="/swap.png" className="h-10" />
          </di>
          <p>0.00000000BTC</p>
        </div>
      </div>
    </div>
  );
}

export default WalletSummary;
