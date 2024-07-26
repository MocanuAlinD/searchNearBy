import React from "react";
import Divider from "../components/tags/Divider";
import { H, P } from "../components/CustomTags";
import styles from "../styles/pages/index.module.scss";

// schimba text de peste tot cu diacritice
// creeare pagina a userului unde sa-si modifice cererea depusa, sau sa o stearga (trebuie sa fie logat)(in meniul de la user icon din navbar)
// lasa in burger menu doar: home, cauta,login/signup, inregistrare
// la meniu user cand e logat: modifica date serviciu daca are serviciu inregistrat; modifica date cerere depusa;modificare date profil; sign out;close
// muta graph din servicii inafara la table ca sa nu mai dea eroare ca e un div in table
// scoate pagina de Donatii - DONE
// redenumeste pagina infofaq in informatii - DONE
// redenumeste pagina Reclamatii in Sesizari - DONE

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>CE ESTE aceasta platforma?</div>
          <div className={styles.cardContent}>
            &emsp;Conexiunea dintre afacerile mici și comunitatea locală.
            Susține economia locală și dezvoltarea antreprenorilor.
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>
            PENTRU CINE este această platformă?
          </div>
          <div className={styles.cardContent}>
            &emsp;Pentru oricine caută servicii esențiale. Ajută la conectarea
            rapidă cu afacerile mici și mijlocii locale, facilitând accesul la
            servicii variate.
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>CUM funcționează?</div>
          <div className={styles.cardContent}>
            &emsp;Pur și simplu cauți ce ai nevoie în zona ta, verifici prețuri,
            disponibilitate, etc, apoi stabilești cu prestatorul detaliile.
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>DE CE să cauți cu noi?</div>
          <div className={styles.cardContent}>
            &emsp;Nu suntem singurii și poate nici cei mai buni, dar încercăm să
            aducem ce e mai bun pentru toată lumea, ascultăm părerile tuturor și
            adaptăm platforma pentru VOI.
          </div>
        </div>
      </div>

      <div className="w-100 d-flex align-items-center justify-content-center flex-wrap gap-4 py-4">
        <div className={styles.miniCardContainer}>
          <H as="h4" color="var(--color-blue)">
            +Opțiuni
          </H>
          <Divider color="black" />
          <ul>
            <li>Tarif minim si maxim</li>
            <li>Program de functionare</li>
            <li>Disponibil peste program (maxim ora 22.00)</li>
            <li>Disponibil 24/7</li>
          </ul>
        </div>
        <div className={styles.miniCardContainer}>
          <H as="h4" color="var(--color-blue)">
            100% Gratuit
          </H>

          <Divider color="black" />
          <P color="var(--color-1-dark)" ta="start">
            &emsp;Zero lei te costa folosirea platformei. <br />
            &emsp;Intri in contact cu prestatorul de servicii si toate detaliile
            le negociati impreuna.
          </P>
        </div>
        <div className={styles.miniCardContainer}>
          <H as="h4" color="var(--color-blue)">
            Așteaptă oferte
          </H>

          <Divider color="black" />
          <P color="var(--color-1-dark)" ta="start">
            &emsp;Depune chiar tu o cerere și așteaptă să primești oferte.
            <br />
            <br />
            &emsp;Când ai rezolvat, ștergi cererea.
            <br />
            <br />
            &emsp;Tu alegi cum poți fi contactat.
          </P>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
