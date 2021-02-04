import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Addbus_action } from "../actions/Addbus_action";

import Addbus_comp from "../components/AddBus";

const Addbus = ({ Addbus_action, isAuthenticated }) => {
  console.log("entering");
  const [formData, setFormData] = useState({
    bus_id: "",
    from: "",
    to: "",
    start_time: "",
    end_time: "",
    date: "",
  });

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    const { bus_id, from, to, start_time, end_time, date } = formData;
    console.log("calling add bus action");
    Addbus_action({
      bus_id: bus_id,
      from: from,
      to: to,
      start_time: start_time,
      end_time: end_time,
      date: date,
    });
    console.log("Successful bus added");
  };

  return (
    <Addbus_comp formData={formData} onChange={onChange} onSubmit={onSubmit} />
  );
};
Addbus.propTypes = {
  Addbus_action: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { Addbus_action })(Addbus);
