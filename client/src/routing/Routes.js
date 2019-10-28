import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import PrivateAdmin from '../routing/PrivateAdmin'
import addYear from '../components/layout/addYear';
import Admin from '../components/admin/Admin'

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/addYear' component={addYear} />
        <PrivateAdmin exact path='/admin' component={Admin} />
      </Switch>
    </section>
  );
};

export default Routes;
