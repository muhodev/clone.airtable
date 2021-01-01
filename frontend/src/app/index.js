import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Loading } from "@/components";
import "@/sass/index.scss";
import "./style.css";

const TableId = lazy(() => import("@/pages/table/tableId"));
const Home = lazy(() => import("@/pages/home"));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/w/:workspaceId/:tableId" component={TableId} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}
