import React from 'react'
import styles from "../styles/reclamatii.module.css"
import BackButton from '../components/BackButton'

const Reclamatii = () => {
  return (
    <div
      className={
        styles.container +
        " d-flex flex-column m-0 p-0 flex-grow-1 min-vh-100"
      }
    >
      <div className="row col-12 m-0 p-0 ps-1 ms-2 mt-2 w-auto">
        <BackButton url="/" text="Pagina principala" />
      </div>
      <div
        className={
          styles.contentContainer +
          " m-0 p-0 d-flex flex-grow-1 justify-content-center align-items-start pt-5"
        }
      >
        <h2 className={styles.title}>Pagina reclamatii in constructie. Va rugam reveniti.</h2>
        <hr />
      </div>
    </div>
  )
}

export default Reclamatii
