import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Movies } from './routes';

const AppRouter = () => {
    return (
        <Switch>            
            <Route path="/movies" component={Movies} />
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default AppRouter;
