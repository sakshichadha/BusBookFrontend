import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 20,
    maxHeight: 600,
  },
  a: {
    height: 50,
    fontSize: 30,
    width: 250,
    backgroundColor: "black",
    color: "white",
  },
  home: {
    width: 150,
    height: 30,
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
  },
});

const Viewbus_comp = ({ buscustomer, formData, onChange, onSubmit }) => {
  const { from, to, date } = formData;
  const classes = useStyles();

  return (
    <Fragment>
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="border1">
          <br />
          <br />
          <br />
          <h1 className="large text-dark">
            <SearchIcon fontSize="large" /> Search Bus
          </h1>

          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="From"
                  name="from"
                  value={from}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="To"
                  name="to"
                  value={to}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={date}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            {/* <input
                  type="submit"
                  className="btn btn-light"
                  value="Search Buses"
                /> */}
            <Button
              type="submit"
              variant="contained"
              className={classes.home}
              value="login"
            >
              View Bus
            </Button>
            <br />
            <br />
          </form>
        </div>
      </center>
    </Fragment>
  );
};

Viewbus_comp.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buscustomer: PropTypes.object.isRequired,
};

export default Viewbus_comp;
