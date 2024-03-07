import React, { useState, useEffect } from "react";
import { Button } from "../components/tags/Button";
import { ButtonRotateCard } from "../components/tags/ButtonRotateCard";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import {
  IconSearch,
  IconDays,
  IconDelete,
  IconMinMax,
  IconOrar,
  IconPercent,
  IconTest,
} from "../components/tags/Icon";
import { Container } from "../components/singleTags/elemetsCustom";
import styles from "../styles/pages/test.module.scss";

const Test = ({ size }) => {
  return (
    <Container>
      <div className={styles.main}>
        <div
          className={styles.alin}
          style={{
            "--size": size ? `${size * 16 / 60}px` : "3px",
            width: size ? `${size}rem` : "30rem",
            height: size ? `${size}rem` : "30rem",
          }}
        >
          <div className={styles.div + " " + styles.unu}></div>
          <div className={styles.div + " " + styles.doi}></div>
          <div className={styles.div + " " + styles.trei}></div>
          <div className={styles.div + " " + styles.patru}></div>
          <div className={styles.div + " " + styles.cinci}></div>
          <div className={styles.div + " " + styles.sase}></div>
          <div className={styles.dan}></div>
        </div>
      </div>
    </Container>
  );
};

export default Test;
// <Button w="fit-content">Aln</Button>
//       <ButtonRotateCard
//         bg="var(--color-1-dark)"
//         w="fit-content"
//         p="0.5rem 1rem"
//         br="var(--border-radius)"
//       >
//         Alin
//       </ButtonRotateCard>
//       <ButtonWithIcon w="fit-content">with icon</ButtonWithIcon>
//       <br />
//       <IconSearch />
//       <br />
//       <IconDays />
//       <br />
//       <IconDelete />
//       <br />
//       <IconMinMax />
//       <br />
//       <IconOrar />
//       <br />
//       <IconPercent />
//       <br />
//       <IconTest />
