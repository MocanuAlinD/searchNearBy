import React, { useState } from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import Stars from "../components/Stars";
import styles from "../styles/test.module.scss";

const Test = () => {
  const initial = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const [state, setState] = useState(0);
  const [each, setEach] = useState(initial);

  const changeSlider = (e) => {
    setState(e);
    setEach((prev) => ({ ...each, [e]: each[e] + 1 }));
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        {[...Array(6)].map((_, i) => {
          return (
            <div key={i} className="w-100 m-0 p-0 m-2">
              <h4 className="text-center m-0 p-0 border">{i}</h4>
              <input
                type="radio"
                checked={i <= state}
                value={i}
                onClick={() => changeSlider(i)}
                className={styles.input}
              />
            </div>
          );
        })}
      </div>
      <h4 className="w-100 text-center m-0 p-0">{state}</h4>
      <div className="border d-flex gap-3">
        <h4>{each[0]}</h4>
        <h4>{each[1]}</h4>
        <h4>{each[2]}</h4>
        <h4>{each[3]}</h4>
        <h4>{each[4]}</h4>
        <h4>{each[5]}</h4>
      </div>
      <button onClick={()=>(
        setState(0), setEach(initial)
      )} className='mt-5'>reset</button>
    </Container>
  );
};

export default Test;
