import './App.css';
import { Header } from './Header';
import logo from './assets/logo.png';
import mascot from './assets/mascot.png';
import textBar from './assets/text-bar.png';
import pieChart from './assets/pie-chart.png';
import supply from './assets/supply.png';
import joinTelegram from './assets/join-telegram.gif';
import a12 from './assets/a12.png';
import Marquee from 'react-fast-marquee';
import q2 from './assets/q2.png';
import q3 from './assets/q3.png';
import a3 from './assets/a3.png';
import r4 from './assets/r4.png';
import r5 from './assets/r5.png';
import r6 from './assets/r6.png';
import r7 from './assets/r7.png';

const CONTRACT_ADDRESS = 'XXXXXX';

export function copyToClipboard() {
   var textToCopy = CONTRACT_ADDRESS;
   var tempInput = document.createElement('input');
   tempInput.value = textToCopy;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand('copy');
   document.body.removeChild(tempInput);
   alert('Contract copied to clipboard: ' + textToCopy);
}

function App() {
   return (
      



         <div className='mt-[8vw] mb-6'>
            <div className='relative w-full hidden lg:block'>
               <div className='absolute left-0 z-10 flex w-screen overflow-x-hidden text-black top-1 lg:-top-8'>
                  <Marquee className='mt-11 overflow-hidden'>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                     <span className='mx-2 text-2xl font-bold lg:text-8xl'>
                        $JUJO
                     </span>
                  </Marquee>
               </div>
               <img
                  alt='text bar image'
                  loading='lazy'
                  width='500'
                  height='500'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-[400px]  mb-3 lg:mb-0'
                  style={{ color: 'transparent' }}
                  src={textBar}
               />
            </div>
         </div>
         
           
      
   );
}

export default App;
