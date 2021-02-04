import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getbuses } from "../../actions/getbuses";
import BusItem from "./BusItem";
const Buses = ({ buses, getbuses }) => {
  useEffect(() => {
    getbuses();
  }, [getbuses]);
  return (
    <Fragment>
      <div className="bus_items">
        {buses != null && buses.length > 0 ? (
          buses.map((bus) => <BusItem key={bus._id} bus={bus} />)
        ) : (
          <h4>No buses found</h4>
        )}
      </div>
    </Fragment>
  );
};

Buses.propTypes = {
  buses: PropTypes.object.isRequired,
  getbuses: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  buses: state.getbuses.buses,
});
export default connect(mapStateToProps, { getbuses })(Buses);
