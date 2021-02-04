import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },

  add: {
    width: 300,
    backgroundColor: "black",
    color: "white",
  },
});
const Addbus_comp = ({ formData, onChange, onSubmit }) => {
  const { bus_id, from, to, start_time, end_time, date } = formData;
  const classes = useStyles();
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <center>
        <div className="border1">
          <br />
          <br />
          <br />
          <h1 className="large text-dark">
            <AddCircleOutlineIcon fontSize="large" />
            Add bus
          </h1>

          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="bus_id"
                value={bus_id}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
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
            <div className="form-group">
              <input
                type="text"
                placeholder="Start"
                name="start_time"
                value={start_time}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="End"
                name="end_time"
                value={end_time}
                onChange={(e) => onChange(e)}
                required
              />
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

            <Button
              type="submit"
              variant="contained"
              value="login"
              className={classes.add}
            >
              Add
            </Button>
            <br />
            <br />
            <br />
          </form>
        </div>
      </center>
    </Fragment>
  );
};

Addbus_comp.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Addbus_comp;
