import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Bus_item_customer from "./Bus_item_customer";
import { viewbusc } from "../actions/viewbusc";

const Showbus = ({ buscustomer }) => {
  return (
    <Fragment>
      <h1></h1>
      <div className="bus_items">
        {buscustomer.length > 0 ? (
          buscustomer.map((bus) => (
            <Bus_item_customer key={bus._id} bus={bus} />
          ))
        ) : (
          <h4>No buses found</h4>
        )}
      </div>
    </Fragment>
  );
};

Showbus.propTypes = {
  buscustomer: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  buscustomer: state.Addbus_reducer.buscustomer,
});
export default connect(mapStateToProps, {})(Showbus);
