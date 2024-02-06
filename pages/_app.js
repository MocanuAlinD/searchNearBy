import "../styles/globals.scss";
import "../styles/styling/_colors.scss";
import "../styles/styling/_fonts.scss";
import "../styles/styling/_size.scss";
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
  setPhoneModifica,
  setEmailModifica,
  changeStateModifica,
  setInitialStateModifica,
} from "../features/modificaDate/modificaSlice";
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
    store.dispatch(changeStateModifica(["listaOrase", tempSorted]));
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
      const emailList = [];
      const phoneList = [];
      Object.values(data.contact.email).map((item) =>
        emailList.push({ email: item })
      );
      Object.values(data.contact.phone).map((item) =>
        phoneList.push({ phone: item })
      );
      store.dispatch(setEmailModifica(emailList));
      store.dispatch(setPhoneModifica(phoneList));
      store.dispatch(changeStateModifica(["id", data.id]));
      store.dispatch(changeStateModifica(["dataregister", data.dataregister]));
      store.dispatch(changeStateModifica(["detalii", data.detalii]));
      store.dispatch(changeStateModifica(["fullname", data.fullname]));
      store.dispatch(changeStateModifica(["judet", data.judet]));
      store.dispatch(changeStateModifica(["orainceput", data.orainceput]));
      store.dispatch(changeStateModifica(["oraregister", data.oraregister]));
      store.dispatch(changeStateModifica(["oras", data.oras]));
      store.dispatch(changeStateModifica(["orasfarsit", data.orasfarsit]));
      store.dispatch(changeStateModifica(["pretMax", data.pretMax]));
      store.dispatch(changeStateModifica(["pretMin", data.pretMin]));
      store.dispatch(changeStateModifica(["tipjob", data.tipjob]));
      store.dispatch(changeStateModifica(["website", data.website]));
      store.dispatch(changeStateModifica(["ziinceput", data.ziinceput]));
      store.dispatch(changeStateModifica(["zisfarsit", data.zisfarsit]));
      store.dispatch(changeStateModifica(["urgente", data.urgente]));
      store.dispatch(
        changeStateModifica(["urgenteNoapte", data.urgenteNoapte])
      );
    } else if (res.length <= 0) {
      store.dispatch(setHasService(false));
    }
  };

  const handleUserDetailsOff = () => {
    store.dispatch(setInitialStateInscriere());
    store.dispatch(setInitialStateLogin());
    store.dispatch(setInitialStateModifica());
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
