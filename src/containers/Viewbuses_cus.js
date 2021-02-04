//fetch all data using action and pass it on to other componenets
import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { viewbusc } from "../actions/viewbusc";
import Viewbus_comp from "../components/Viewbus_comp";

const Viewbuses_cus = ({ viewbusc, buscustomer }) => {
  console.log("entering the viewbusc container");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    temp: false,
  });
  if (formData.temp) {
    return <Redirect to="/showbus" />;
  }
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    {
      console.log(buscustomer);
    }
    const { from, to, date } = formData;
    console.log("calling view bus action");
    viewbusc({
      from: from,
      to: to,
      date: date,
    });
    setFormData({ ...formData, temp: true });
  };

  return (
    <Viewbus_comp
      buscustomer={buscustomer}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
Viewbuses_cus.propTypes = {
  viewbusc: PropTypes.func.isRequired,
  buscustomer: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  buscustomer: state.Addbus_reducer.buscustomer,
});
export default connect(mapStateToProps, { viewbusc })(Viewbuses_cus);
