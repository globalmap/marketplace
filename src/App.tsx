import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './scenes/Auth/Auth';
import MainPage from './scenes/MainPage/MainPage';

function App() {
  return (
    <div style={{background: "#DEDEE0", minHeight: "100vh"}}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login">
          <Auth authType="login" />
        </Route>
        <Route path="/register">
          <Auth authType="register" />
        </Route>
        <Route path="/restore">
          <Auth authType="restore" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
