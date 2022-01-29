import { BrowserRouter, Route, Switch } from "react-router-dom";

import { BadComponents, Home, Login, PageNotFound } from "pages";

// Source: https://reactrouter.com/web/guides/quick-start

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/bad-components">
        <BadComponents />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default routes;
