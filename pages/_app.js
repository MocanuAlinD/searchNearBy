import "../styles/globals.scss";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../fstore/store";
import Layout from "../components/LayoutPage";
import { useRouter } from "next/router";
import PageTitle from "../components/pageTitle";

function MyApp({ Component, pageProps }) {
  const initialLocation = {
    id: "",
    judet: "",
    oras: "",
  };

  const [location, setLocation] = useState(initialLocation);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("location")) {
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      localStorage.setItem("location", JSON.stringify(initialLocation));
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <PageTitle text={router.pathname.split("/")[1]} />
        <Component
          {...pageProps}
          location={location}
          setLocation={setLocation}
        />
        <Toaster />
      </Layout>
    </Provider>
  );
}

export default MyApp;
