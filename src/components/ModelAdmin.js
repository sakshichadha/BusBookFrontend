import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ onRequestClose, seatNumber, details }) => {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  const book = () => {
    onRequestClose();
  };
  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <h3 className="modal__title"> Customer Details</h3>
        {console.log("hi")}
        <h4 className="modal__content"></h4>
        {details == null ? (
          <Fragment>Loading</Fragment>
        ) : (
          <Fragment>
            {" "}
            <h4 className="modal__content"> Name - {details.name} </h4>
            <h4 className="modal__content"> Email - {details.email} </h4>
            <h4 className="modal__content"> Seat Number - {seatNumber + 1}</h4>
          </Fragment>
        )}

        <br />
        <button type="button" onClick={onRequestClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = { bus: PropTypes.object.isRequired };

export default Modal;
