import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Map from "./components/map.component"
export default function Home() {
  return (
    <div className="">
      <div className="grid justify-items-stretch ">
      <div className=" w-40 connect">
          <ConnectWallet />
        </div>
      </div>
      
      <div>
        <Map/>
      </div>

    </div>
  );
}
