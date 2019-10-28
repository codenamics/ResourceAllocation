import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register, ClearError } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ register, isAuthenticated, error, ClearError }) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const { name, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        register({ name, password });

    };
    if (error.length !== 0) {
        setTimeout(() => {
            ClearError()
        }, 4000);
    }
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <div className="form-container">
            {error.length !== 0 ? (<div className="alert alert-dismissible alert-danger">

                <strong>{error.msg}</strong>
            </div>) : null}
            <h1 className="text-center mb-4">Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input className="form-control"

                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input className="form-control" type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6' />
                </div>

                <input type='submit' className='btn btn-primary btn-lg btn-block' value='Register' />

            </form>


        </div>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.errors
});

export default connect(
    mapStateToProps,
    { register, ClearError }
)(Register);
