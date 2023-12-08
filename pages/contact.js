import React from "react";
import {
  Container,
  H4Custom,
  LabelCustom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";
import styles from "../styles/contact.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import PageTitle from "../components/pageTitle";

const Contact = () => {
  return (
    <Container className={styles.container}>
      <PageTitle text="Contact" />
      <SmallContainer bg>
        <H4Custom w="100%">☎︎&emsp;Contact</H4Custom>
        <p>
          Bine ați venit pe pagina noastră de contact! Suntem încântați să vă
          oferim mai multe informații și să răspundem întrebărilor
          dumneavoastră. Nu ezitați să ne contactați folosind una dintre
          următoarele modalități:
        </p>
        <p>
          <span>Telefon:</span> Pentru asistență rapidă și personalizată,
          sunați-ne la numărul nostru de telefon dedicat: &nbsp;
          <span>
            <a href="tel:0748.22.15.77" rel="noreferrer">
              0748.22.15.77
            </a>
          </span>
        </p>
        <p>
          <span>Email:</span> Dacă preferați comunicarea scrisă, ne puteți scrie
          la adresa noastră de email: contact@serviciionline.ro. Răspundem
          prompt la toate mesajele primite și suntem aici pentru a vă ajuta.
        </p>
        <p>
          <span>WhatsApp:</span> Suntem și pe WhatsApp pentru a facilita
          comunicarea directă. Adăugați-ne la lista de contacte și trimiteți-ne
          un mesaj la numărul <br />
          <a href="http://wa.me/+40748221577" target="_blank" rel="noreferrer">
            <FaWhatsapp />
            &nbsp;0748.22.15.77
          </a>
        </p>
        <p>
          Echipa noastră dedicată este disponibilă să vă ofere suport și
          informații, fie că aveți întrebări despre produsele noastre, aveți
          nevoie de asistență tehnică sau doriți să ne împărtășiți feedback-ul
          dumneavoastră. Așteptăm cu nerăbdare să vă auzim!
        </p>
      </SmallContainer>
    </Container>
  );
};

export default Contact;
