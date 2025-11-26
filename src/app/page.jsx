// 'use client'
// import Homepage from '@/components/Homepage/Home'
// import { useEffect, useLayoutEffect } from 'react'
// import { useState } from 'react'

// export default function Home() {
//   const [showtip, setShowtip] = useState(false);
//   const [toturialComplete, setToturialComplete] = useState(false);

//   useLayoutEffect(() => {
//     setToturialComplete(JSON.parse(localStorage.getItem('toturialComplete')));

//     setTimeout(() => {
//       if (!toturialComplete) {
//         setShowtip(true);
//       }
//     }, 5000);
//   }, [])
//   useEffect(() => {

//   }, [toturialComplete])

//   const handleClick = () => {
//     setShowtip(false);
//     setToturialComplete(true);
//     localStorage.setItem('toturialComplete', true);
//   }
//   return (
//     <div>
//       {showtip && !toturialComplete &&
//         <div className='absolute top-4 left-16 z-50'>
//           <div className=' relative bg-[#3a3b3b] p-4 rounded-lg'>
//             <p className=' text-lg text-gray-300'>
//               Create your own <span className='text-[#00e6e6]'>Playlists</span> <br />and
//               add songs to <span className='text-[#00e6e6]'>Favourite</span>
//             </p>
//             <div className=' flex items-center mt-2 justify-end'>
//               <button onClick={handleClick} className=' bg-[#00e6e6] text-black px-3 py-2 rounded-lg'>Ok</button>
//             </div>
//             <div className=' absolute top-2 -left-2 bg-[#3a3b3b] rotate-[50deg] w-6 h-6'></div>
//           </div>
//         </div>}
//       <div className=' mx-auto relative flex flex-col w-11/12 text-white '>
//         <Homepage />
//       </div>
//     </div>
//   )
// }

'use client'
import Homepage from '@/components/Homepage/Home'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function Home() {
  const [showtip, setShowtip] = useState(false);
  const [toturialComplete, setToturialComplete] = useState(false);

  // 🔥 NEW: install prompt
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  // -------------------
  // YOUR OLD CODE
  // -------------------
  useLayoutEffect(() => {
    setToturialComplete(JSON.parse(localStorage.getItem('toturialComplete')));

    setTimeout(() => {
      if (!toturialComplete) {
        setShowtip(true);
      }
    }, 5000);
  }, []);

  useEffect(() => {}, [toturialComplete]);

  const handleClick = () => {
    setShowtip(false);
    setToturialComplete(true);
    localStorage.setItem('toturialComplete', true);
  };

  // -------------------
  // NEW PWA AUTO POPUP LOGIC
  // -------------------
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);      // save event
      setShowInstallBtn(true);       // show install button

      // 🔥 Auto popup jab user page open kare
      setTimeout(() => {
        e.prompt();
      }, 1000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  // -------------------
  // Install button click
  // -------------------
  const installAudix = async () => {
    if (!installPromptEvent) return;

    installPromptEvent.prompt();
    const choice = await installPromptEvent.userChoice;
    console.log("User choice:", choice.outcome);

    // If installed → button hide kar do
    if (choice.outcome === "accepted") {
      setShowInstallBtn(false);
    }

    setInstallPromptEvent(null);
  };


  return (
    <div>

      {/* 🔥 Popup tip (your code kept same) */}
      {showtip && !toturialComplete &&
        <div className='absolute top-4 left-16 z-50'>
          <div className=' relative bg-[#3a3b3b] p-4 rounded-lg'>
            <p className=' text-lg text-gray-300'>
              Create your own <span className='text-[#00e6e6]'>Playlists</span> <br />and
              add songs to <span className='text-[#00e6e6]'>Favourite</span>
            </p>
            <div className=' flex items-center mt-2 justify-end'>
              <button onClick={handleClick} className=' bg-[#00e6e6] text-black px-3 py-2 rounded-lg'>Ok</button>
            </div>
            <div className=' absolute top-2 -left-2 bg-[#3a3b3b] rotate-[50deg] w-6 h-6'></div>
          </div>
        </div>
      }

      {/* 🔥 CUSTOM INSTALL BUTTON */}
      {showInstallBtn &&
        <button
          onClick={installAudix}
          className='fixed bottom-6 right-6 bg-[#00e6e6] text-black px-4 py-3 rounded-xl shadow-xl z-50'
        >
          Install Audix
        </button>
      }

      <div className=' mx-auto relative flex flex-col w-11/12 text-white '>
        <Homepage />
      </div>
    </div>
  )
}

