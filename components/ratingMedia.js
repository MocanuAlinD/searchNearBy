import React from "react";
import { FaStar } from "react-icons/fa";

const RagingMedia = ({ md }) => {
  return (
    <div>
      <h4>{md}</h4>
      <div>
        {[...Array(5)].map((_, i) => {
          const newI = i + 1;
          return (
            <div key={newI} className="w-100 m-0 p-0">
              <h4
                //   className={styles.rat + " text-center m-0 p-0 fs-6"}
                style={{
                  color: `${
                    newI <= md ? "var(--color-yellow)" : "var(--color-light)"
                  }`,
                }}
              >
                {newI}
              </h4>
              <input
                type="radio"
                checked={newI <= md}
                value={newI}
                //   className={styles.input}
                readOnly
              />
              <FaStar
                color={
                  newI <= md ? "var(--color-yellow)" : "var(--color-light)"
                }
                size="30"
                //   className={styles.star}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RagingMedia;
