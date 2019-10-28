import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Admin = ({
    component: Component,
    auth: { isAuthenticated, admin },
    ...rest
}) => {

    return (
        <Route
            {...rest}
            render={props =>
                (isAuthenticated && admin && localStorage.getItem('token')) ? (
                    <Component {...props} />
                ) : (
                        <Redirect to='/' />
                    )
            }
        />
    )
};

Admin.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Admin);
