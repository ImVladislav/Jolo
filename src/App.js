import "./App.css";
import { Header } from "./Header";
import logo from "./assets/logo.png";
import mascot from "./assets/mascot.png";
import textBar from "./assets/text-bar.png";
import pieChart from "./assets/pie-chart.png";
import supply from "./assets/supply.png";
import joinTelegram from "./assets/join-telegram.gif";
import a12 from "./assets/a12.png";
import Marquee from "react-fast-marquee";
import q2 from "./assets/q2.png";
import q3 from "./assets/q3.png";
import a3 from "./assets/a3.png";
import r4 from "./assets/r4.png";
import r5 from "./assets/r5.png";
import r6 from "./assets/r6.png";
import r7 from "./assets/r7.png";

const CONTRACT_ADDRESS = "JujoFun";

export function copyToClipboard() {
  var textToCopy = CONTRACT_ADDRESS;
  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Contract copied to clipboard: " + textToCopy);
}

function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <span
          onClick={copyToClipboard}
          className="hidden font-bold lg:block lg:text-xl cursor-pointer font-bounty"
        >
          Contract: <span>{CONTRACT_ADDRESS}</span>
        </span>
      </div>
      <div className="flex flex-col">
        <div className="relative justify-center flex mt-8 lg:mt-12">
          <img
            alt="logo"
            loading="lazy"
            width="2580"
            height="960"
            decoding="async"
            data-nimg="1"
            className="w-auto h-16 md:h-24 lg:h-[200px] "
            style={{ color: "transparent" }}
            src={logo}
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="transition-opacity duration-[4000] ease-in-out opacity-100">
            <img
              alt="mascot"
              loading="lazy"
              width="300"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-auto h-64 mt-20 lg:mt-10 2xl:mt-8 lg:h-[400px] 2xl:h-[550px]"
              style={{ color: "transparent" }}
              src={mascot}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12">
        <button
          onClick={() => (window.location.href = "/game/index.html")}
          className="cursor-pointer hover:bg-green-900 px-12 py-2 text-[#fffff] bg-green-800 font-bold gap-2 rounded-3xl font-bounty text-[48px]"
        >
          Jujorator
        </button>
      </div>

      <div className="mt-[8vw] mb-6">
        <div className="relative w-full hidden lg:block">
          <div className="absolute left-0 z-10 flex w-screen overflow-x-hidden text-black top-1 lg:-top-8">
            <Marquee className="mt-11 overflow-hidden">
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
              <span className="mx-2 text-2xl font-bold lg:text-8xl">$JUJO</span>
            </Marquee>
          </div>
          <img
            alt="text bar image"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="w-full h-[400px]  mb-3 lg:mb-0"
            style={{ color: "transparent" }}
            src={textBar}
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row mt-24  font-bounty text-[24px]">
          <div className="w-[33%] flex items-center justify-center font-bold text-[100px] text-center">
            Diamond <br /> Hands
          </div>
          <div className="w-[33%] flex items-center justify-center">
            <img
              width="500"
              height="400"
              decoding="async"
              data-nimg="1"
              className="my-3 lg:my-0 lg:block w-auto lg:mr-3 h-56 lg:h-[400px] 2xl:h-[450px]"
              style={{ color: "transparent" }}
              src={a12}
              alt=""
            ></img>
          </div>
          <div className="w-[33%] flex items-center justify-center font-bold text-[100px] text-center">
            Always
            <br />
            Win
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-12">
          <button
            onClick={() =>
              (window.location.href =
                "https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=6QjdY59XFoHZMSHTXRZbAKhwGYbfdcGvn7USX6c8pumpb")
            }
            className="cursor-pointer hover:bg-green-900 px-12 py-2 text-[#fffff] bg-green-800 font-bold gap-2 rounded-3xl font-bounty text-[48px]"
          >
            BUY NOW
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 font-bounty">
        <p className="text-[60px] lg:text-[120px] font-extrabold mt-8">
          Jujonomics
        </p>
        <img
          alt="pie chart"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="max-w-[600px] max-h-[600px] lg:max-h-[800px] lg:max-w-[800px] mt-12"
          style={{ color: "transparent" }}
          src={pieChart}
        />
      </div>

      <div className="relative flex flex-col items-center justify-start mt-[12px]">
        <img
          alt="supply image"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
          data-nimg="1"
          className="absolute left-[84px] lg:left-[100px] top-[-40px] lg:top-[-100px] flex h-auto ml-12 w-60 lg:w-80 lg:w-auto lg:ml-0 lg:px-2 lg:mx-0 lg:h-72 2xl:h-80"
          style={{ color: "transparent" }}
          src={supply}
        />
      </div>

      <div className="flex items-center justify-center mt-[290px] text-[60px] font-extrabold font-bounty">
        This is a map of a road. Deal with it.
      </div>

      <div className="relative flex justify-center items-center mt-8">
        <img className="w-96 h-96" src={q2} alt="" />
        <img
          className="absolute right-[-30px] lg:right-[150px] w-64 h-64 top-0"
          src={q3}
          alt=""
        />
      </div>

      <div className="flex items-center justify-center mt-24">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/JujoFun"
        >
          <img
            alt="join telegram gif"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="w-auto h-60 px-2 mb-5 lg:mb-0 lg:mx-0 lg:h-80 2xl:h-96 "
            style={{ color: "transparent" }}
            src={joinTelegram}
          />
        </a>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 px-10 mt-[80px]">
        <div className="w-[40%] flex items-center justify-center">
          <img className="w-64 h-64" src={a3} alt=""></img>
        </div>
        <div className="max-w-[60%] grid grid-cols-2 gap-4 mx-auto ">
          <div className="flex items-center justify-center w-[320px] h-[160px] text-center ml-auto pr-6">
            <a
              target="_blank"
              href="https://www.dextools.io/app/en/solana/pair-explorer/6QjdY59XFoHZMSHTXRZbAKhwGYbfdcGvn7USX6c8pump"
              rel="noreferrer"
            >
              <img src={r7} alt="" />
            </a>
          </div>
          <div className="flex items-center justify-center w-[320px] h-[160px] text-center pl-6">
            <a
              target="_blank"
              href="https://dexscreener.com/solana/6QjdY59XFoHZMSHTXRZbAKhwGYbfdcGvn7USX6c8pump"
              rel="noreferrer"
            >
              <img src={r6} alt="" />
            </a>
          </div>
          <div className="flex items-center justify-center w-[320px] h-[160px] text-center ml-auto pr-6">
            <a
              target="_blank"
              href="https://coinmarketcap.com"
              rel="noreferrer"
            >
              <img src={r5} alt="" />
            </a>
          </div>
          <div className="flex items-center justify-center w-[280px] h-[140px] text-center pl-6">
            <a target="_blank" href="https://coingecko.com" rel="noreferrer">
              <img src={r4} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full py-8 bg-green-800 flex flex-col items-center justify-center font-bounty gap-8 mt-8">
        <img
          alt="logo"
          loading="lazy"
          width="2580"
          height="960"
          decoding="async"
          data-nimg="1"
          className=" h-8 w-16"
          style={{ color: "transparent" }}
          src={logo}
        />

        <span
          onClick={copyToClipboard}
          className="font-bold lg:block lg:text-xl cursor-pointer"
        >
          Contract: <span>{CONTRACT_ADDRESS}</span>
        </span>

        <p className="text-[24px] ">
          © Copyright 2025 Jujo - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
