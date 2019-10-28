import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAll } from "../../actions/year";
import Table from "../layout/Table";

const Dashboard = () => {
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary" to="/addYear">
                    Add new year
        </Link>
            </div>
            <Table></Table>
        </div>
    );
};
const mapStateToProps = state => ({
    allocation: state.year,
    loading: state.year
});

export default connect(
    mapStateToProps,
    { fetchAll }
)(Dashboard);
