import React from "react";
import {
  Container,
} from "../components/singleTags/elemetsCustom";
import styles from "../styles/donatii.module.scss";
import { ImCopy } from "react-icons/im";
import toast from "react-hot-toast";

const Donatii = () => {
  const copyToClipboard = (bank) => {
    navigator.clipboard.writeText(bank);
    toast(`Numărul contului a fost copiat: ${bank}`, {
      icon: "✅",
      duration: 4000,
    });
  };

  return (
    <Container>
      <div className={styles.donatii + " m-0 p-0 px-3 pb-5 my-3 m-auto"}>
        <h2 className={styles.title}>Dragi prieteni,</h2>
        <p className={styles.para}>
          Vrem să vă spunem cât suntem de recunoscători pentru faptul că sunteți
          parte din această experiență minunată pe platforma noastră. Suntem
          mândri să oferim servicii{" "}
          <span className={styles.gratuit}>gratuite</span> atât pentru cei care
          oferă servicii, cât și pentru cei care le utilizează, dar asta vine cu
          cheltuieli pentru a menține platforma în funcțiune și în dezvoltare
          continuă.
        </p>
        <p className={styles.para}>
          Am decis să nu percepem taxe pentru a facilita accesul la serviciile
          noastre, pentru a sprijini micile afaceri și antreprenorii. Cu toate
          acestea, pentru a asigura o experiență de calitate, avem nevoie de
          sprijinul vostru. Donațiile voastre sunt cruciale pentru a ne ajuta să
          finanțăm următoarele aspecte esențiale:
        </p>
        <ol>
          <li>
            <span>Baze de date robuste:</span> Donațiile contribuie la creșterea
            capacității noastre de stocare și gestionare a datelor,
            asigurându-ne că informațiile rămân accesibile și fiabile.
          </li>
          <li>
            <span>Dezvoltare continuă:</span> Continuăm să adăugăm noi
            funcționalități și să îmbunătățim experiența utilizatorilor.
            Sprijinul vostru ne permite să investim în echipă și în dezvoltare
            tehnologică.
          </li>
          <li>
            <span>Securitate sporită:</span> Păstrăm datele utilizatorilor în
            siguranță, iar donațiile ne ajută să implementăm măsuri de
            securitate și protecție pentru a vă asigura că sunteți în deplină
            siguranță.
          </li>
          <li>
            <span>Servicii fără publicitate:</span> Am decis să nu afișăm
            publicitate pentru a vă oferi o experiență mai curată și mai
            plăcută. Donațiile ne ajută să compensăm aceste pierderi.
          </li>
        </ol>
        <p className={styles.para}>
          Fiecare donație, indiferent de mărime, face o diferență semnificativă.
          Vă rugăm să vă gândiți să sprijiniți platforma noastră pentru a
          continua să oferim servicii de calitate superioară și pentru a susține
          comunitatea noastră. Vă mulțumim din inimă pentru generozitatea
          voastră și pentru că sunteți alături de noi în această călătorie. Cu
          sprijinul vostru, suntem hotărâți să facem platforma noastră și mai
          bună și mai utilă pentru toți utilizatorii noștri.
        </p>
        <hr className={styles.separator} />
        <div className={styles.cont}>
          <h4>Cont ING: </h4>
          <p>
            RO90ING1234567890ING
            <ImCopy
              className={styles.copyIcon}
              onClick={() => copyToClipboard("RO90ING1234567890ING")}
            />
          </p>
        </div>
        <div className={styles.cont}>
          <h4>Cont BT: </h4>
          <p>
            RO90BT9876543210BT
            <ImCopy
              className={styles.copyIcon}
              onClick={() => copyToClipboard("RO90BT9876543210BT")}
            />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Donatii;
