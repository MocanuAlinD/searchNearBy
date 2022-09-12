import React, { useState } from "react";
import styles from "../styles/cardCautare.module.scss";
import { FcExpand, FcCollapse } from "react-icons/fc";

const CardCautare = ({ data, idx }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container + " mb-4"}>
      <table className="table">
        {!open && (
          <thead>
            <tr>
              <th>{idx + 1}.&nbsp;Oras</th>
              <th>Tip serviciu</th>
              <th>Detalii</th>
            </tr>
          </thead>
        )}

        {open && (
          <thead>
            <tr>
              <th>&nbsp;</th>
            </tr>
          </thead>
        )}

        <tbody>
          <tr>
            {!open && <td>{data.oras}</td>}
            {!open ? (
              <td className="w-75">{data.tipjob}</td>
            ) : (
              <td>{idx + 1}.</td>
            )}
            <td className="m-0 p-0 text-end" colSpan="2">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className={styles.button}
              >
                {!open ? <FcExpand /> : <FcCollapse />}
              </button>
            </td>
          </tr>
          {open && (
            <>
              <tr>
                <td>Serviciu</td>
                <td colSpan="2">{data.tipjob}</td>
              </tr>
              <tr>
                <td>Oras</td>
                <td colSpan="2">{data.oras}</td>
              </tr>
              <tr>
                <td>Nume/companie</td>
                <td colSpan="2">{data.fullname}</td>
              </tr>
              <tr>
                <td>Telefon</td>
                <td colSpan="2">{data.contact.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td colSpan="2">{data.contact.email}</td>
              </tr>
              <tr>
                <td>Program</td>
                <td colSpan="2">
                  {data.ziinceput} - {data.zisfarsit} <br /> {data.orainceput} -{" "}
                  {data.orasfarsit}
                </td>
              </tr>
              <tr>
                <td>Tarif</td>
                <td colSpan="2">
                  Min: {data.pretMin} lei <br /> Max: {data.pretMax} lei
                </td>
              </tr>

              <tr>
                <td>Disponibilitate in afara orelor de lucru:</td>
                <td colSpan="2">{data.urgente ? "Da" : "Nu"}</td>
              </tr>

              <tr>
                <td>Urgente timp noapte:</td>
                <td colSpan="2">{data.urgenteNoapte ? "Da" : "Nu"}</td>
              </tr>

              <tr>
                  <td colSpan="2">Descriere: <br /><br /><span>{data.detalii}</span></td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardCautare;
