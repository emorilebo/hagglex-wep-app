import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center p-5">
        <Image src="/hagglexlogo.png" width={40} height={40} layout="fixed" />
        <h1 className="pl-2 text-xl text-blue-900 font-bold">HaggleX</h1>
      </div>
      <div className="flex items-center mr-10">
      <div class="bg-white rounded-md mx-3  relative inline-block cursor-pointer hover:bg-white hover:border-green-300 hover:border-4">
          <BellIcon className="h-8 text-black" />
          <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-gray-300 border-2 text-blue-900 text-xs border-white rounded-full ">4</span>
        </div>
        <div className="border-2 p-2 rounded-full items-cente justify-center">
          <h1>WO</h1>
        </div>
        <h1>Wills Omaer</h1>
        <ChevronDownIcon className="h-6"/>
      </div>
    </div>
  );
}

export default Header;
