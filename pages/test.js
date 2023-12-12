import React, { useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

import {
  Container,
  H4Custom,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";

const Test = () => {
  const auth = getAuth();
  const [state, setState] = useState("");
  const db = getDatabase();
  const je = ref(db, `Alin`);
  const uid = auth.currentUser.uid;

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

  const seeData = () => {
    console.log(state);
  };

  return (
    <Container className="border border-danger flex-grow-1">
      <button
        onClick={moc}
        style={{
          width: "100%",
          height: "5rem",
          marginTop: "2rem",
          backgroundColor: "black",
          color: "whitesmoke",
        }}
      >
        Get data
      </button>
      <button
        onClick={seeData}
        style={{
          width: "100%",
          height: "5rem",
          marginTop: "2rem",
          backgroundColor: "black",
          color: "whitesmoke",
        }}
      >
        See data
      </button>
      <p>state</p>
    </Container>
  );
};

export default Test;
