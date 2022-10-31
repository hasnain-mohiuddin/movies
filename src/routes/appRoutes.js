import { Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import DetailsPage from "../components/DetailsPage";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import urls from "../constants/urls";
import RequireAuth from "./RequireAuth";

const appRoutes = [
  {
    path: urls.signin,
    component: <Signin />,
  },
  {
    path: urls.signup,
    component: <Signup />,
  },
  {
    path: urls.dashboard,
    component: <Dashboard />,
  },
  {
    path: urls.tvDetails,
    component: <DetailsPage />,
  },
  {
    path: urls.movieDetails,
    component: <DetailsPage />,
  },
];

export const switchRoutes = () =>
  appRoutes.map((route) => {
    if (route.isAuth)
      return (
        <Route element={<RequireAuth />} key={route.path}>
          <Route path={route.path} element={route.component} />
        </Route>
      );

    return <Route path={route.path} key={route.path} element={route.component} />;
  });
