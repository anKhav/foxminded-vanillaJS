import Home from "./pages/Home/index.js";
import About from "./pages/About/index.js";
import Shop from "./pages/Shop/index.js";


const routes = {
    "/": () => Home(),
    "/about": () => About(),
    "/shop": () => Shop(),
};


export const handleRouteChange = () => {
    const route = location.pathname;
    const handler = routes[route];
    return handler()
};