import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: white !important;
        }

        * {
          box-sizing: border-box;
          background: none;
        }

        #__next {
          background: white !important;
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp
