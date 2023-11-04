import React from "react";
import BackButton from "../components/BackButton";
import {
  Container,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";

const Maps = ({ location }) => {
  return (
    <Container>
      {location.judet ? (
        <>
          <BackButton
            url={`/servicii/${location.judet}/${location.id}`}
            text="Inapoi"
          />
          <div className="m-0 p-0 mx-2 d-flex justify-content-center">
            <h4
              className="text-white m-0 p-0 pe-4 w-auto d-flex align-items-center "
              style={{ fontWeight: "200", fontSize: ".8rem" }}
            >
              {location.judet}, {location.oras}
            </h4>
          </div>
        </>
      ) : (
        <BackButton url={`/servicii`} text="Inapoi" />
      )}

      <div className="row col-12 m-0 p-0 flex-grow-1 px-3 pt-3 pb-2 mt-2">
        {location.id ? (
          <iframe
            className="shadow border border-dark m-0 p-0 rounded-3"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCvRlnPDLBHBezVYpZIQOmoJXqNJD5SCkM&q=Romania,${location.judet},${location.oras}&zoom=14`}
            // src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCvRlnPDLBHBezVYpZIQOmoJXqNJD5SCkM&center=46.07,23.57&zoom=14`}
          ></iframe>
        ) : (
          <iframe
            className="shadow border border-dark m-0 p-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCvRlnPDLBHBezVYpZIQOmoJXqNJD5SCkM&q=Romania`}
            // src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCvRlnPDLBHBezVYpZIQOmoJXqNJD5SCkM&center=46.07,23.57&zoom=14`}
          ></iframe>
        )}
      </div>
    </Container>
  );
};

export default Maps;
