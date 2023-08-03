// import Users from "admin/users";
import Users from "admin/users";
import Index from "views/Index.js";
import Alerts from "views/examples/Alerts";
import Maps from "views/examples/Maps.js";
// import Weather from "views/weather/weather";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/admin",
  // },
  {
    path: "/weather",
    name: "Weather",
    icon: "ni ni-umbrella-13",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/alerts",
    name: "Alerts",
    icon: "ni ni-sound-wave",
    component: <Alerts />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-umbrella-13",
    component: <Users />,
    layout: "/admin",
  }
];
export default routes;
