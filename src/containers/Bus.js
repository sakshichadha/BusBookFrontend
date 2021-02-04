import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ViewSeats from "../components/ViewSeats";
import { getBusById } from "../actions/getBusById";
import { resetbus } from "../actions/resetbus";
import { logout } from "../actions/auth";
import DetailsIcon from "@material-ui/icons/Details";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import "../components/model.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    color: "white",

    paddingLeft: 70,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  home: {
    width: 90,
    height: 30,
    fontSize: 15,
    backgroundColor: "black",
    color: "white",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
let booked = 0;
const Bus = ({
  getBusById,
  resetbus,
  Addbus_reducer: { bus, details_state },
  auth: { user },
  match,
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log("inside bus babe");
  useEffect(() => {
    getBusById(match.params.id);
  }, []);
  return (
    <Fragment>
      <div class="flex-container">
        <div>
          <p>
            {user.category == "customer" ? (
              <Fragment>
                <center>
                  <br />
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <br /> <br />
                  {bus != null ? (
                    <Fragment>
                      <div className={classes.root}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              <DetailsIcon /> Details of Bus
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails class="typ">
                            <Typography>
                              Name:{bus.bus_id}
                              <br />
                              Origin:{bus.from}
                              <br />
                              Destination:{bus.to}
                              <br />
                              Arrival:{bus.start_time}
                              <br />
                              Departure:{bus.end_time}
                              <br />
                              Fare:250
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography className={classes.heading}>
                              <SearchIcon /> Find More Buses
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <Link to="/Buses">
                                <Button
                                  type="submit"
                                  variant="contained"
                                  className={classes.home}
                                  value="login"
                                >
                                  Buses
                                </Button>
                              </Link>
                              <br />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </Fragment>
                  ) : (
                    <h4>No buses found</h4>
                  )}
                </center>
                {bus === null ? (
                  <h4> Loading... </h4>
                ) : (
                  <Fragment>
                    <center>
                      <br />
                    </center>
                  </Fragment>
                )}
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <center>
                  <center>
                    <br />
                    <br />
                    <br />
                    <br /> <br />
                    <br />
                    <br /> <br />
                    {bus == null ? (
                      <Fragment>Loading</Fragment>
                    ) : (
                      <Fragment>
                        <div className={classes.root}>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography className={classes.heading}>
                                <DetailsIcon /> Details Of Bus
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Name:{bus.bus_id}
                                <br />
                                Origin:{bus.from}
                                <br />
                                Destination:{bus.to}
                                <br />
                                Arrival:{bus.start_time}
                                <br />
                                Departure:{bus.end_time}
                                <br />
                                Fare:250
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2a-content"
                              id="panel2a-header"
                            >
                              <Typography className={classes.heading}>
                                <SearchIcon /> Find More Buses
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <Link to="/Buses">
                                  <Button className={classes.home}>
                                    Buses
                                  </Button>
                                </Link>
                                <br />
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2a-content"
                              id="panel2a-header"
                            >
                              <Typography className={classes.heading}>
                                <RefreshIcon /> Reset Bus
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <Link>
                                  <Button>
                                    <button
                                      onClick={() => {
                                        resetbus(bus._id);
                                      }}
                                    >
                                      Reset
                                    </button>
                                  </Button>
                                </Link>
                                <br />
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </Fragment>
                    )}
                  </center>
                  {bus == null ? (
                    <Fragment>Loading</Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </center>
              </Fragment>
            )}
          </p>
        </div>

        <div>
          {bus === null ? (
            <h4> Loading... </h4>
          ) : (
            <Fragment>
              <center>
                <div className="border1">
                  <ViewSeats seats={bus.seats} id={bus._id} />
                  <br />
                  <br />
                </div>
              </center>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
Bus.propTypes = {
  getBusById: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  resetbus: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  Addbus_reducer: state.Addbus_reducer,
  auth: state.auth,
});
export default connect(mapStateToProps, { getBusById, resetbus })(Bus);
