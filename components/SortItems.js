import React, {useState} from "react";
import styles from "../styles/SortItems.module.scss";
import { HiOutlineSortAscending,HiOutlineSortDescending } from "react-icons/hi";

const SortItems = ({
  // handleToate,
  // handleTarif,
  // handleOvertime,
  // handleNight,
  // allChecked,
}) => {

  const initialValues = {
    toate: true,
    tarifAsc: false,
    tarifDesc: false,
    program: false,
    night: false
  }

  const [state,setState] = useState(initialValues)


  const handleToate = (e) =>{
    console.log("toate", e)
    setState(initialValues)

  }

  const handleTarifAsc = () =>{
    console.log("tarif asc")
    setState({...state, tarifAsc: true,tarifDesc: false , toate: false})
  }

  const handleTarifDesc = () => {
    console.log("tarif desc")
    setState({...state, tarifDesc: true,tarifAsc: false , toate: false})
  };

  const handleProgram = () => {
    console.log("program")
    setState({...state, program: !state.program, toate: false})
  };

  const handleNight = () => {
    console.log("night")
    setState({...state, night: !state.night, toate: false})
  };

  return (
    <div className={styles.container + " m-0 p-0 mt-4 mb-2"}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <button onClick={(e)=>handleToate(e)} className={state.toate ? styles.active : ""}>Toate</button>
        </div>
        <div className={styles.wrapper}>
          <button onClick={(e)=>handleTarifAsc(e)} className={state.tarifAsc ? styles.active : ""}>Tarif <HiOutlineSortAscending className={styles.icon} /></button>
        </div>
        <div className={styles.wrapper}>
          <button onClick={(e)=>handleTarifDesc(e)} className={state.tarifDesc ? styles.active : ""}>Tarif <HiOutlineSortDescending className={styles.icon} /></button>
        </div>
        <div className={styles.wrapper}>
          <button onClick={(e)=>handleProgram(e)} className={state.program ? styles.active : ""}>Program+</button>
        </div>
        <div className={styles.wrapper}>
          <button onClick={(e)=>handleNight(e)} className={state.night ? styles.active : ""}>24/7</button>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
