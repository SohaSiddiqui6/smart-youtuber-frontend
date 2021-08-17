import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import { PrivateRoute } from "./Authentication";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./Authentication/view/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />

            {/* Place new routes over this */}
            <PrivateRoute path="/app" component={Layout} />
            <Redirect path="/" to="/app/dashboard" />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
