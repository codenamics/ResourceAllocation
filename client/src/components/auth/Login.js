import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, ClearError } from "../../actions/auth";

const Login = ({ login, isAuthenticated, error, ClearError }) => {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const { name, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error.length !== 0) {
        setTimeout(() => {
            ClearError()
        }, 4000);
    }
    const onSubmit = async e => {
        e.preventDefault();
        login(name, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="form-container">
            {error.length !== 0 ? (<div class="alert alert-dismissible alert-danger">

                <strong>{error.msg}</strong>
            </div>) : null}

            <h1 className="text-center mb-4">Login</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Login" />
            </form>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.array
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.errors
});

export default connect(
    mapStateToProps,
    { login, ClearError }
)(Login);
