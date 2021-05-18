import "../styles/globals.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
