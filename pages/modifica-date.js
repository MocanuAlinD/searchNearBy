import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

import {
  Container,
  H4Custom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";

const ModificaDate = () => {
  const auth = getAuth();
  const [state, setState] = useState("");

  const db = getDatabase();
  const je = ref(db, `Alin`);
  const uid = auth.currentUser?.uid;

  useEffect(() => {
    const moc = () => {
      onValue(
        je,
        (s) => {
          if (s.val() !== null) {
            [s.val()].map((item) =>
              Object.values(item).map((i) => {
                const alin = Object.keys(i);
                alin.filter((x) => x === uid && setState(i[uid]));
              })
            );
          }
        },
        {
          onlyOnce: true,
        }
      );
    };
    moc();
  }, []);

  if (!state) {
    return <h4>not available</h4>;
  }

  return (
    <Container className="border border-danger flex-grow-1">
      <div>
        Email:
        <ul>
          {state.contact.email.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        Telefon:
        <ul>
          {state.contact.phone.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <p>Telefon:{state.contact.phone[1]}</p>
      <p>Data inregistrare:{state.dataregister}</p>
      <p>Nume prenume: {state.fullname}</p>
      <p>Id: {state.id}</p>
      <p>Judet: {state.judet}</p>
      <p>Ora inceput: {state.orainceput}</p>
      <p>Ora inregistrare: {state.oraregister}</p>
      <p>Oras: {state.oras}</p>
      <p>Ora sfarsit:{state.orasfarsit}</p>
      <p>Pret max: {state.pretMax}</p>
      <p>Pret min: {state.pretMin}</p>
      <p>Tip job: {state.tipjob}</p>
      <p>Urgente: {state.urgente}</p>
      <p>Urgente noapte: {state.urgenteNoapte}</p>
      <p>Website: {state.website}</p>
      <p>Zi inceput: {state.ziinceput}</p>
      <p>Zi sfarsit: {state.zisfarsit}</p>
      <style>{`
        p{
          color: white;
          font-size: .8rem;
          font-weight: 200;
          margin: 0;
          padding: 0;
          text-align: center;
        }
      `}</style>
    </Container>
  );
};

export default ModificaDate;
