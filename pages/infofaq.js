import React from "react";
import styles from "../styles/infofaq.module.scss";
import {
  Container,
  SmallContainer,
  H4Custom,
  LabelCustom,
} from "../components/singleTags/elemetsCustom";

const Info = () => {
  return (
    <Container>
      <SmallContainer bg>
        <H4Custom w="100%" m="0 0 1rem 0">
          ℹ️&emsp;Info & FAQ
        </H4Custom>
        <LabelCustom>
          &emsp;Bine ați venit pe platforma noastră dedicată micilor afaceri din
          România! Suntem mândri să vă oferim oportunitatea de a descoperi și
          accesa servicii de la aceste întreprinderi locale. Ne-am dedicat
          misiunii de a sprijini aceste afaceri și de a face procesul de găsire
          și colaborare cu ele cât mai ușor pentru clienți. Pe platforma
          noastră, micile afaceri pot înregistra gratuit detaliile despre
          serviciile oferite, precum și informații importante, cum ar fi orele
          de funcționare, locațiile acoperite și prețurile. Acest lucru vă
          permite să găsiți rapid și eficient informațiile de care aveți nevoie
          pentru a face o alegere informată. Suntem mândri că oferim acces la
          informații actualizate despre serviciile și produsele disponibile de
          la micile afaceri din întreaga țară. Astfel, clienții pot verifica cu
          ușurință disponibilitatea serviciilor non-stop și pot găsi opțiuni
          convenabile în funcție de locație și buget. Platforma noastră
          reprezintă o legătură esențială între micile afaceri și comunitatea
          noastră de clienți. Susținem cu mândrie afacerile locale și vă invităm
          să explorați și să sprijiniți antreprenorii din România. Alăturați-vă
          comunității noastre și descoperiți servicii de calitate superioară de
          la micile afaceri din întreaga țară. Apreciază și sprijină
          antreprenorii locali.
        </LabelCustom>
      </SmallContainer>
    </Container>
  );
};

export default Info;
