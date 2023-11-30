import "../styles/globals.scss";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../fstore/store";

function MyApp({ Component, pageProps }) {
  const initialLocation = {
    id: "",
    judet: "",
    oras: "",
  };

  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    if (localStorage.getItem("location")) {
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      localStorage.setItem("location", JSON.stringify(initialLocation));
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} location={location} setLocation={setLocation} />
      <Toaster />
    </Provider>
  );
}

export default MyApp;
