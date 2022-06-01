/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Icons from "views/examples/Icons.js";
import Alimentos from "views/examples/Alimentos.js";
import Refeicao from "views/examples/Refeicao.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa fa-home text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/alimentos",
    name: "Alimentos",
    icon: "ni ni-single-02 text-yellow",
    component: Alimentos,
    layout: "/admin",
  },
  {
    path: "/refeicao",
    name: "Refeição",
    icon: "ni ni-single-02 text-yellow",
    component: Refeicao,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
