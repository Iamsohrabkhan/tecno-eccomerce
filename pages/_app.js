import {AppProvider } from "./components/appContext";
import Navbar from "./components/navbar";
import Footer from './components/footer'
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <main>
        <Navbar />
        <div className="min-h-[70vh]">
        <Component {...pageProps} />
        </div>
        <Footer/>
        </main>
      </AppProvider>
      
    </>
  );
}
