import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

const CheckAuth: FC = ({ children }) => {
  return <div>{children}</div>;
};

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/'
          render={() => {
            return (
              <CheckAuth>
                <Dashboard />
              </CheckAuth>
            );
          }}
        />
        <Route path='/404' component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
