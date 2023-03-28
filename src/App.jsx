import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "components/Layout";
import NavigationScroll from "./components/NavigationScroll";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <NavigationScroll>
        <Layout>{AppRoutes()}</Layout>
      </NavigationScroll>
    </Router>
  );
};

export default App;
