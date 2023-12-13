import "../styles/globals.scss";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/LayoutPage";
import { useRouter } from "next/router";
import PageTitle from "../components/pageTitle";
import { Provider } from "react-redux";
import { store } from "../fstore/store";
import {
  getAuth,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import { setUid, setImage, setHasService } from "../features/login/loginSlice";
import { modInitialState } from "../features/modificaDate/modificaDateSlice";

function MyApp({ Component, pageProps }) {
  const initialLocation = {
    id: "",
    judet: "",
    oras: "",
  };
  const [location, setLocation] = useState(initialLocation);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleUserDetailsOn(user);
      } else {
        handleUserDetailsOff(user);
      }
    });
    if (localStorage.getItem("location")) {
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      localStorage.setItem("location", JSON.stringify(initialLocation));
    }
  }, []);

  const handleUserDetailsOn = async (user) => {
    store.dispatch(setUid(user.uid));
    store.dispatch(setImage("icon48.png"));
    const service = await fetch(`api/userData?id=${user.uid}`);
    const res = await service.json();
    // if user has service registered
    if (res.length > 0) {
      store.dispatch(setHasService(true));
    } else if (res.length <= 0) {
      store.dispatch(setHasService(false));
    }
  };

  const handleUserDetailsOff = (user) => {
    store.dispatch(setUid(""));
    store.dispatch(setImage("iconwho48.png"));
    store.dispatch(modInitialState());
  };

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
