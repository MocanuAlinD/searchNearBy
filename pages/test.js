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
import IconSvg from "../components/tags/IconSvg";
import styles from "../styles/pages/test.module.scss";

const Test = ({ size }) => {
  return (
    <Container border ai="flex-end">
      <div className={styles.main}>
      </div>
    </Container>
  );
};

export default Test;
