import React from "react";
import styles from "../styles/LoadingScreen.module.scss";
import { HiDatabase } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { BsFileEarmarkCodeFill } from "react-icons/bs";

const LoadingScreen = ({setLoadSearch}) => {
  return (
    <div className={styles.loadingScreen__test}>
      <div
        className={
          styles.centerContainer +
          " d-flex flex-column justify-content-center"
        }
      >
        <button onClick={()=> setLoadSearch(prev=> !prev)} className={styles.closeButton + ""}>X</button>
        <div
          className={
            styles.transferIcons +
            " d-flex justify-content-center align-items-center"
          }
        >
          <HiDatabase className={styles.iconStart + " align-self-center"} />
          <div className={styles.spans + " flex-grow-1 font-monospace"}>
            <BsFileEarmarkCodeFill
              style={{ "--i": 0 }}
              className={styles.file}
            />
            <BsFileEarmarkCodeFill
              style={{ "--i": 1 }}
              className={styles.file}
            />
            <BsFileEarmarkCodeFill
              style={{ "--i": 2 }}
              className={styles.file}
            />
          </div>
          <RiPagesLine className={styles.iconEnd + " align-self-center"} />
        </div>
        <p className="m-0 p-0 text-center">Va rugam asteptati....</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

// const LoadingScreen = () => {
//   return (
//       <div
//         className={
//           styles.loadingScreen__container + " m-0 p-0 d-flex flex-column"
//         }
//       >
//         <div className={"w-100 d-flex"}>
//         <HiDatabase className={styles.iconStart + " align-self-end"} />
//         <div className={styles.spans + " flex-grow-1 font-monospace"}>
//           <BsFileEarmarkCodeFill style={{ "--i": 0 }} className={styles.file} />
//           <BsFileEarmarkCodeFill style={{ "--i": 1 }} className={styles.file} />
//           <BsFileEarmarkCodeFill style={{ "--i": 2 }} className={styles.file} />
//         </div>
//         <RiPagesLine className={styles.iconEnd} />
//         </div>
//       <p className="m-0 p-0 text-center">Va rugam asteptati....</p>
//       </div>
//   );
// };
