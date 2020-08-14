import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import AdminPanel from './pages/AdminPanel';
import AddPanel from './pages/AddPanel';

const useRoutes = (userData) => {
    if (userData && userData.isAdmin) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <Home />
                </Route>
                <Route path='/news' exact>
                    <AdminPanel />
                </Route>
                <Redirect to='/home' />
            </Switch>
        );
    } else if (!userData.guest) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <Home />
                </Route>
                <Route path='/news' exact>
                    <AddPanel />
                    <News />
                </Route>
                <Redirect to='/home' />
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path='/home' exact>
                <Home />
            </Route>
            <Route path='/news' exact>
                <News />
            </Route>
            <Redirect to='/home' />
        </Switch>
    );
};

export default useRoutes;