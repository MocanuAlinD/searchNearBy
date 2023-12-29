import "../styles/globals.scss";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/LayoutPage";
import { useRouter } from "next/router";
import PageTitle from "../components/pageTitle";
import { Provider } from "react-redux";
import { store } from "../fstore/store";
import { alin } from "../lib";
import {
  getAuth,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import {
  setUid,
  setImage,
  setHasService,
  setInitialStateLogin,
} from "../features/login/loginSlice";
import {
  setInitialStateModify,
  modUrgente,
  modUrgenteNoapte,
  modChangeState,
} from "../features/modificaDate/modificaDateSlice";
import { setInitialStateInscriere } from "../features/inscriere/inscriereSlice";
import { setInitialStateInregistrare } from "../features/signup/signupSlice";
import { setInitialStateSearch } from "../features/searchJudet/searchJudetSlice";
import { setInitialStateSort } from "../features/sortItems/sortItemsSlice";
import { setInitialStateReview } from "../features/review/reviewSlice";
import { setInitialStateShowTitle } from "../features/showTitle/showTitleSlice";
import { setInitialStateReclamatie } from "../features/reclamatie/reclamatieSlice";

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
        handleUserDetailsOff(); // user not logged in or logs off
      }
    });
    if (localStorage.getItem("location")) {
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      localStorage.setItem("location", JSON.stringify(initialLocation));
    }
  }, []);

  const changeListaOrase = (x) => {
    const tempSorted = [...alin[x]].sort(
      (a, b) => (a.nume > b.nume && 1) || -1
    );
    store.dispatch(modChangeState(["listaOrase", tempSorted]));
  };

  const handleUserDetailsOn = async (user) => {
    store.dispatch(setUid(user.uid));
    store.dispatch(setImage("icon48.png"));
    const service = await fetch(`api/userData?id=${user.uid}`);
    const res = await service.json();
    // if user has service registered
    if (res.length > 0) {
      const data = res[0];
      store.dispatch(setHasService(true));
      changeListaOrase(data.judet);
      store.dispatch(modChangeState(["email", data.contact.email]));
      store.dispatch(modChangeState(["phone", data.contact.phone]));
      store.dispatch(modChangeState(["dataregister", data.dataregister]));
      store.dispatch(modChangeState(["detalii", data.detalii]));
      store.dispatch(modChangeState(["fullname", data.fullname]));
      store.dispatch(modChangeState(["judet", data.judet]));
      store.dispatch(modChangeState(["orainceput", data.orainceput]));
      store.dispatch(modChangeState(["oraregister", data.oraregister]));
      store.dispatch(modChangeState(["oras", data.oras]));
      store.dispatch(modChangeState(["orasfarsit", data.orasfarsit]));
      store.dispatch(modChangeState(["pretMax", data.pretMax]));
      store.dispatch(modChangeState(["pretMin", data.pretMin]));
      store.dispatch(modChangeState(["tipjob", data.tipjob]));
      store.dispatch(modChangeState(["website", data.website]));
      store.dispatch(modChangeState(["ziinceput", data.ziinceput]));
      store.dispatch(modChangeState(["zisfarsit", data.zisfarsit]));
      store.dispatch(modUrgente(data.urgente));
      store.dispatch(modUrgenteNoapte(data.urgenteNoapte));
    } else if (res.length <= 0) {
      store.dispatch(setHasService(false));
    }
  };

  const handleUserDetailsOff = () => {
    store.dispatch(setInitialStateInscriere());
    store.dispatch(setInitialStateLogin());
    store.dispatch(setInitialStateModify());
    store.dispatch(setInitialStateReclamatie());
    store.dispatch(setInitialStateReview());
    store.dispatch(setInitialStateSearch());
    store.dispatch(setInitialStateShowTitle());
    store.dispatch(setInitialStateInregistrare());
    store.dispatch(setInitialStateSort());
    store.dispatch(setUid(""));
    store.dispatch(setImage("iconwho48.png"));
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
