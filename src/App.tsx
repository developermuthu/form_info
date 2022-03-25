import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppointmentInfo from './page/AppointmentInfo';


function App() {
  const routes = [
    {
      path: '/appointment-call',
      component: <AppointmentInfo/>
    },
    {
      path: '/',
      component: <AppointmentInfo/>
    }
  ]
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Switch>
          {routes.map((route, key) =>

            <Route key={key} path={`${route.path}`} render={() => route.component} exact />

          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
