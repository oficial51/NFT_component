import "./App.css";
import { useState } from "react";
import image from "./assets/image-equilibrium.jpg";
import avatar from "./assets/image-avatar.png";
import ethereum from "./assets/icon-ethereum.svg";
import clock from "./assets/icon-clock.svg";

function App() {
  const [eye, setEye] = useState(false);
  return (
    <>
      <main className="bg-[#0D1A2D] flex items-center justify-center w-screen h-screen">
        <div className="h-[543px] w-[327px] bg-[#15273F] rounded-2xl shadow-2xl">
          <div className="mx-[27px]">
            <div
              onMouseEnter={() => setEye(!eye)}
              onMouseLeave={() => setEye(!eye)}
              className="mt-[25px] relative bg-[#15273F] eye rounded-xl "
            >
              {eye == true ? (
                <div className="centered w-[36px] h-[36px] bg"></div>
              ) : null}
              <img
                src={image}
                alt="cube image"
                className={`w-[280px] relative ${eye == true ? ' opacity-50' : null} transition-all ease-in duration-200 go rounded-lg h-[280px]`}
              />
            </div>
            <h2 className="mt-[21px] hover:text-[#22F0EE] cursor-pointer transition-all ease-in-out duration-200 text-[23px] text-white font-bold">
              Equilibrium #3429
            </h2>
            <p className="mt-[7px] text-[16px] text-[#8BA4C3]">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between mt-[18px]">
              <div className="flex  justify-center gap-[6px] items-center">
                <img src={ethereum} alt="ethereum icon" />
                <p className="text-[#00FFF8] text-[17px]">0.041 ETH</p>
              </div>
              <div className="flex items-center justify-center">
                <img src={clock} alt="clock icon" />
                <p className="text-[#8BACD9] text-[17px]">3 days left</p>
              </div>
            </div>
            <div className="bg-[#2F4159] mt-[18px] w-full h-[1px]"></div>
          </div>
          <div className="flex ml-[27px] items-center text-[17px] mt-[12px]">
            <img
              src={avatar}
              className="w-[31px] rounded-full border border-white h-[31px]"
              alt="avatar"
            />
            <p className="text-[#8BACD9] ml-[7px]">
              Creation of <span className="text-white hover:text-[#22F0EE] cursor-pointer transition-all ease-in-out duration-200">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
