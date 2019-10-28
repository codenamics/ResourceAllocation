import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, user, admin }, logout }) => {
    let nav;
    if (isAuthenticated && user) {
        nav = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3 d-flex  align-items-center">
                    {user.user.name}
                </li>

                <li className="nav-item">
                    <button onClick={logout} type="button" className="btn btn-primary">
                        Logout
          </button>
                </li>
            </ul>
        );
    }
    if (isAuthenticated && user && admin) {
        nav = (
            <ul className="navbar-nav ml-auto">
                <Link
                    to="/dashboard"
                    className="nav-item mr-3 d-flex  align-items-center btn btn-primary"
                >
                    Dashboard
        </Link>
                <Link
                    to="/admin"
                    className="nav-item mr-3 d-flex  align-items-center btn btn-primary"
                >
                    Admin
        </Link>
                <li className="nav-item mr-3 d-flex  align-items-center">
                    {user.user.name}
                </li>

                <li className="nav-item">
                    <button onClick={logout} type="button" className="btn btn-primary">
                        Logout
          </button>
                </li>
            </ul>
        );
    }

    if (!isAuthenticated && !user) {
        nav = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <button type="button" className="btn btn-primary">
                        {" "}
                        <Link to="/register">Register</Link>
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-primary">
                        {" "}
                        <Link to="/">Login</Link>
                    </button>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">{nav}</nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);
