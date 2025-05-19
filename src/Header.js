import "./App.css";
import socials from "./assets/socials.png";
import xIcon from "./assets/x-icon.png";
import tiktok from "./assets/tiktok.png";
import tgIcon from "./assets/telegram-icon.png";
import igIcon from "./assets/ig-icon.png";
import { copyToClipboard } from "./App";

export function Header() {
  return (
    <div className="">
      <header className="">
        <img
          alt="socials slider"
          loading="lazy"
          width="2630"
          height="3430"
          decoding="async"
          data-nimg="1"
          class="absolute w-auto h-40 pr-2 lg:h-60 2xl:h-72 right-2 lg:right-9 top-2 2xl:top-2"
          style={{ color: "transparent" }}
          src={socials}
        />
        <div class="absolute gap-2 ml-2 lg:ml-7 right-10 lg:right-12 top-[22px] lg:top-9">
          <div class="flex flex-col">
            <div class="z-10 flex flex-row lg:mr-10">
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="z-10 font-bold text-white"
                href="https://x.com/JujoFun"
              >
                <img
                  alt="telegram logo"
                  loading="lazy"
                  width="680"
                  height="580"
                  decoding="async"
                  data-nimg="1"
                  class="w-auto mx-1 h-7 lg:mx-2 lg:w-auto lg:h-10 2xl:h-12"
                  style={{ color: "transparent" }}
                  src={xIcon}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="z-10 font-bold text-white"
                href="https://t.me/JujoFun"
              >
                <img
                  alt="tiktok logo"
                  loading="lazy"
                  width="630"
                  height="670"
                  decoding="async"
                  data-nimg="1"
                  class="w-auto mx-1 h-7 lg:mx-2 lg:w-auto lg:h-10 2xl:h-12"
                  style={{ color: "transparent" }}
                  src={tgIcon}
                />
              </a>
            </div>
            {/* <div class='z-10 flex flex-row lg:mr-10'>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        class='z-10 font-bold text-white'
                        href='https://www.tiktok.com/@sillynubcat'
                     >
                        <img
                           alt='tiktok logo'
                           loading='lazy'
                           width='630'
                           height='670'
                           decoding='async'
                           data-nimg='1'
                           class='w-auto mx-1 h-7 lg:mx-2 lg:w-auto lg:h-10 2xl:h-12'
                           style={{ color: 'transparent' }}
                           src={tgIcon}
                        />
                     </a>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        class='font-bold text-white'
                        href='https://x.com/nubcat'
                     >
                        <img
                           alt='x logo'
                           loading='lazy'
                           width='530'
                           height='600'
                           decoding='async'
                           data-nimg='1'
                           class='w-auto mx-1 h-7 lg:mx-2 lg:w-auto lg:h-10 2xl:h-12'
                           style={{ color: 'transparent' }}
                           src={igIcon}
                        />
                     </a>
                  </div> */}
          </div>
        </div>
        <button
          onClick={() => copyToClipboard()}
          className="cursor-pointer hover:bg-green-900 px-8 m-2 text-[#fffff] btn bg-green-800 font-bold absolute gap-2 right-[70px] top-5 lg:top-64 hidden lg:block 2xl:top-[300px] rounded-2xl z-20 font-bounty text-[20px]"
        >
          Contract
        </button>
      </header>
    </div>
  );
}
