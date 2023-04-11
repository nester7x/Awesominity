import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Logo from "assets/Images/logo_icon.png";
import Layout from "components/Layout";
import NavigationScroll from "./components/NavigationScroll";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Awesominity</title>
        <link rel="icon" type="image/png" href={Logo} />
      </Helmet>
      <NavigationScroll>
        <Layout>{AppRoutes()}</Layout>
      </NavigationScroll>
    </Router>
  );
};

export default App;
