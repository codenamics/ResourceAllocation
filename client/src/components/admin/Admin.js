import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchYear } from "../../actions/admin";
import AdminTables from "./AdminTables";
const DashAdmin = ({ admin: { loading, years }, fetchYear }) => {
  useEffect(() => {
    fetchYear();
  }, [fetchYear]);

  return (
    <>
      {!loading && years ? (
        years.map(year => (
          <AdminTables key={year._id} year={year.year}></AdminTables>
        ))
      ) : (
        <h4>Loading</h4>
      )}
    </>
  );
};

DashAdmin.propTypes = {
  fetchYear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { fetchYear }
)(DashAdmin);
