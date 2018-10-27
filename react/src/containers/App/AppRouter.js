import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";

const routes = [
  {
    path: "dashboard",
    component: asyncComponent(() => import("../dashboard"))
  },
  {
    path: "helpdocument",
    component: asyncComponent(() => import("../helpdocument"))
  },
  {
    path: "uplodyourfile",
    component: asyncComponent(() => import("../uplodyourfile"))
  },
  {
    path: "downloadyourresult",
    component: asyncComponent(() => import("../downloadyourresult"))
  },
  {
    path: "single_email_validator",
    component: asyncComponent(() => import("../single_email_validator"))
  },
  {
    path: "zb_Integrations",
    component: asyncComponent(() => import("../zb_Integrations"))
  },
  {
    path: "bay_credits",
    component: asyncComponent(() => import("../bay_credits"))
  },
  {
    path: "auto_pay",
    component: asyncComponent(() => import("../auto_pay"))
  },
  {
    path: "invoices",
    component: asyncComponent(() => import("../invoices"))
  },
  {
    path: "GDPR_information",
    component: asyncComponent(() => import("../GDPR_information"))
  },
  {
    path: "account_opstions",
    component: asyncComponent(() => import("../account_opstions"))
  },
  {
    path: "Api_key_info",
    component: asyncComponent(() => import("../Api_key_info"))
  },
  {
    path: "Api-deshbord",
    component: asyncComponent(() => import("../Api-deshbord"))
  },

  
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
