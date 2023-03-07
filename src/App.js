import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import "./index.js";
import Map from "./components/map.component"
 export default function Home() {
  return (
    <div className="">
      <div className=" w-full   align-top items-center">
        <h1 className=" text-red-500">Where to spend your crypto?</h1>
        </div>
      <div className="grid justify-items-stretch ">
      <div className="  connect">
          <ConnectWallet />
        </div>
      </div>
      
      <div>
        <Map/>
      </div>

    </div>
  );
}
