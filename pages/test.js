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
import styles from "../styles/pages/test.module.scss";

const Test = () => {
  return (
    <div className={styles.main}>
      <Button w="fit-content">Aln</Button>
      <ButtonRotateCard
        bg="var(--color-1-dark)"
        w="fit-content"
        p="0.5rem 1rem"
        br="var(--border-radius)"
      >
        Alin
      </ButtonRotateCard>
      <ButtonWithIcon w="fit-content">with icon</ButtonWithIcon>
      <br />
      <IconSearch />
      <br />
      <IconDays />
      <br />
      <IconDelete />
      <br />
      <IconMinMax />
      <br />
      <IconOrar />
      <br />
      <IconPercent />
      <br />
      <IconTest />
    </div>
  );
};

export default Test;
