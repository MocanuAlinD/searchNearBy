import React from "react";
import {
  Container,
  H4Custom,
  LabelCustom,
  ParaCustom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";
import { FaWhatsapp } from "react-icons/fa";
import PageTitle from "../components/pageTitle";
import styles from "../styles/pages/contact.module.scss";

const Contact = () => {
  return (
    <Container className={styles.container}>
      <PageTitle text="Contact" />
      <SmallContainer bg border>
        <H4Custom w="100%" fs="1.5rem">
          ☎︎&emsp;Contact
        </H4Custom>
        <ParaCustom>
          &emsp;Bine ați venit pe pagina noastră de contact! Suntem încântați să
          vă oferim mai multe informații și să răspundem întrebărilor
          dumneavoastră. Nu ezitați să ne contactați folosind una dintre
          următoarele modalități:
        </ParaCustom>
        <ParaCustom>
          <span>&emsp;Telefon:</span> Pentru asistență rapidă și personalizată,
          sunați-ne la numărul nostru de telefon dedicat: &nbsp;
          <span>
            <a href="tel:0748.22.15.77" rel="noreferrer">
              0748.22.15.77
            </a>
          </span>
        </ParaCustom>
        <ParaCustom>
          <span>&emsp;Email:</span> Dacă preferați comunicarea scrisă, ne puteți
          scrie la adresa noastră de email: contact@serviciionline.ro. Răspundem
          prompt la toate mesajele primite și suntem aici pentru a vă ajuta.
        </ParaCustom>
        <ParaCustom>
          <span>&emsp;WhatsApp:</span> Suntem și pe WhatsApp pentru a facilita
          comunicarea directă. Adăugați-ne la lista de contacte și trimiteți-ne
          un mesaj la numărul <br />
          <a href="http://wa.me/+40748221577" target="_blank" rel="noreferrer">
            <FaWhatsapp />
            &nbsp;0748.22.15.77
          </a>
        </ParaCustom>
        <ParaCustom>
          &emsp;Echipa noastră dedicată este disponibilă să vă ofere suport și
          informații, fie că aveți întrebări despre produsele noastre, aveți
          nevoie de asistență tehnică sau doriți să ne împărtășiți feedback-ul
          dumneavoastră. Așteptăm cu nerăbdare să vă auzim!
        </ParaCustom>
      </SmallContainer>
    </Container>
  );
};

export default Contact;
