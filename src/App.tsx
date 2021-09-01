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
import SmartYoutuberHero from "./components/LandingPageComponents/SmartYoutuberHero";
import LandingPage from "./components/LandingPageComponents/SmartYoutuberHero";

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
            {/*<PrivateRoute path="/app" component={Layout} />*/}
            <Route path="/app" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default App;
