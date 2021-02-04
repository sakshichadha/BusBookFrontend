import PropTypes from "prop-types";
import ModelBooking from "./ModelBooking";
import ModelAdmin from "./ModelAdmin";

import { connect } from "react-redux";
import React, { Fragment, useEffect, useState } from "react";
import "./bus.css";
import { Link } from "react-router-dom";
import bookbus from "../actions/bookbus";
import details from "../actions/details";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventSeatIcon from "@material-ui/icons/EventSeat";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

let booked = 0;
const ViewSeats = ({
  seats,
  id,
  bookbus,
  user,
  bus,
  details,
  details_state,
  auth,
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [modal, setModal] = useState({ isModalOpen: false, seatNumber: 0 });

  const toggleModal = () => {
    setModal({ isModalOpen: !modal.isModalOpen, seatNumber: 0 });
  };

  const handleClickAvailable = (seatNumber) => {
    if (auth.user.category === "customer") {
      setModal({ isModalOpen: !modal.isModalOpen, seatNumber: seatNumber });
      console.log(modal);
      console.log("done booking");
      booked = booked + 1;
    }
  };
  const handleClickReserved = (seatNumber) => {
    if (auth.user.category === "admin") {
      details(seatNumber, id);
      setModal({ isModalOpen: !modal.isModalOpen, seatNumber: seatNumber });
      console.log(modal);
      console.log("done details");
    }
  };

  return (
    <Fragment>
      <p>
        {auth.user.category == "customer" ? (
          <Fragment>
            {modal.isModalOpen && (
              <ModelBooking
                onRequestClose={toggleModal}
                seatNumber={modal.seatNumber}
                bus={bus}
                bookBus={bookbus}
                booked={booked}
              />
            )}
            <br />
            <h2 className="large">{bus.bus_id}</h2>

            {"    "}

            <i>Black colored seats are reserved.</i>
          </Fragment>
        ) : (
          <Fragment>
            {modal.isModalOpen && (
              <ModelAdmin
                onRequestClose={toggleModal}
                seatNumber={modal.seatNumber}
                details={details_state}
              />
            )}
            <h2 className="large">{bus.bus_id}</h2>
            <i>Black colored seats are Reserved</i>
          </Fragment>
        )}
      </p>
      <div className="tableContainer">
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seat, seatNumber) => {
                if (seat === null) {
                  return (
                    <td
                      className="available"
                      onClick={() => handleClickAvailable(seatNumber)}
                    >
                      {" "}
                      <EventSeatIcon />
                      <br />
                      {seatNumber + 1}
                      <br />
                    </td>
                  );
                } else {
                  return (
                    <td
                      className="reserved"
                      onClick={() => {
                        console.log(seatNumber);
                        handleClickReserved(seatNumber);
                      }}
                    >
                      <EventSeatIcon />
                      <br />
                      {seatNumber + 1}
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

ViewSeats.propTypes = {
  seats: PropTypes.object.isRequired,
  bookbus: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  details: PropTypes.func.isRequired,
  details_state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth,
  auth: state.auth,
  details_state: state.Addbus_reducer.details_state,
  bus: state.Addbus_reducer.bus,
});
export default connect(mapStateToProps, { bookbus, details })(ViewSeats);
