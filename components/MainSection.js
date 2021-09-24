import Image from "next/image";
import MainHeader from "./MainHeader";
import Wallet from "./Wallet";

function MainSection() {
  return (
    <div className="bg-gray-200 w-full">
      <MainHeader/>
      <Wallet/>
    </div>
  );
}

export default MainSection;
