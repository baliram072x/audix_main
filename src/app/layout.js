// import Navbar from "@/components/Navbar";
// import "./globals.css";
// import MusicPlayer from "@/components/MusicPlayer";
// import Providers from "@/redux/Providers";
// import TopProgressBar from "@/components/topProgressBar/TopProgressBar";
// import Favicon from "./favicon.ico";
// import SongsHistory from "@/components/SongsHistory";
// import { Toaster } from "react-hot-toast";
// import AuthProvider from "./AuthProvider";
// import { Poppins } from "next/font/google";
// import Script from "next/script";

// const poppins = Poppins({
//   weight: "500",
//   subsets: ["latin-ext"],
//   display: "swap",
// });

// export const metadata = {
//   title: "Audix",
//   description: "Music streaming app",
//   image:
//     "https://res.cloudinary.com/dbr73rpz9/image/upload/v1690380865/images/logo-color_noktgr.png",
//   url: "https://hayasaka.vercel.app",
//   type: "website",
//   icons: [{ rel: "icon", url: Favicon.src }],
//   site_name: "Hayasaka",
//   manifest: "/manifest.json",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Script
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=G-Z4FJ5T627Q"
//       ></Script>
//       <Script>
//         {`
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-Z4FJ5T627Q');
//   `}
//       </Script>
//       <body className={poppins.className}>
//         <Providers>
//           <AuthProvider>
//             <TopProgressBar />
//             <SongsHistory />
//             <Navbar />
//             <Toaster />
//             {children}
//             <div className="h-20"></div>
//             <div className="fixed  bottom-0 left-0 right-0 flex backdrop-blur-lg rounded-t-3 z-50">
//               <MusicPlayer />
//             </div>
//           </AuthProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }


// import Navbar from "@/components/Navbar";
// import "./globals.css";
// import MusicPlayer from "@/components/MusicPlayer";
// import Providers from "@/redux/Providers";
// import TopProgressBar from "@/components/topProgressBar/TopProgressBar";
// import Favicon from "./favicon.ico";
// import SongsHistory from "@/components/SongsHistory";
// import { Toaster } from "react-hot-toast";
// import AuthProvider from "./AuthProvider";
// import { Poppins } from "next/font/google";
// import Script from "next/script";
// import Script from 'next/script';

// const poppins = Poppins({
//   weight: "500",
//   subsets: ["latin-ext"],
//   display: "swap",
// });

// export const metadata = {
//   title: "Audix",
//   description: "Music streaming app",
//   image:
//     "https://res.cloudinary.com/dbr73rpz9/image/upload/v1690380865/images/logo-color_noktgr.png",
//   url: "https://hayasaka.vercel.app",
//   type: "website",
//   icons: [{ rel: "icon", url: Favicon.src }],
//   site_name: "Hayasaka",
//   manifest: "/manifest.json",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8141004950391233"
//      crossorigin="anonymous"></script>
//         {/* Google Analytics Scripts */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-Z4FJ5T627Q"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-KD92KGLHMG');
//           `}
//         </Script>

//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8141004950391233"
//      crossorigin="anonymous"></script>
// <ins class="adsbygoogle"
//      style="display:block"
//      data-ad-client="ca-pub-8141004950391233"
//      data-ad-slot="3881756136"
//      data-ad-format="auto"
//      data-full-width-responsive="true"></ins>
// <script>
//      (adsbygoogle = window.adsbygoogle || []).push({});
// </script>

        
//       </head>
//       <body className={poppins.className}>
//         <Providers>
//           <AuthProvider>
//             <TopProgressBar />
//             <SongsHistory />
//             <Navbar />
//             <Toaster />
//             {children}
//             <div className="h-20"></div>
//             <div className="fixed bottom-0 left-0 right-0 flex backdrop-blur-lg rounded-t-3 z-50">
//               <MusicPlayer />
//             </div>
//           </AuthProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }








import Navbar from "@/components/Navbar";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import Providers from "@/redux/Providers";
import TopProgressBar from "@/components/topProgressBar/TopProgressBar";
import Favicon from "./favicon.ico";
import SongsHistory from "@/components/SongsHistory";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider";
import { Poppins } from "next/font/google";
import Script from "next/script";
import AdBanner from "@/components/AdBanner"; // Naya component import karein

const poppins = Poppins({
  weight: "500",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Audix",
  description: "Music streaming app",
  image: "https://res.cloudinary.com/dbr73rpz9/image/upload/v1690380865/images/logo-color_noktgr.png",
  url: "https://hayasaka.vercel.app",
  type: "website",
  icons: [{ rel: "icon", url: Favicon.src }],
  site_name: "Hayasaka",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense Main Script - Sirf ek baar */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8141004950391233"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4FJ5T627Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KD92KGLHMG');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Providers>
          <AuthProvider>
            <TopProgressBar />
            <SongsHistory />
            <Navbar />
            <Toaster />

            {/* Ad yahan dikhega - Navbar ke niche */}
            <AdBanner />

            {children}

            <div className="h-20"></div>
            <div className="fixed bottom-0 left-0 right-0 flex backdrop-blur-lg rounded-t-3 z-50">
              <MusicPlayer />
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}