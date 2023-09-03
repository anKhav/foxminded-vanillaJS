import Header from "./components/Header/index.js";
import Footer from './components/Footer/index.js'
import Main from "./components/Main/index.js";

const appElement = document.getElementById('app');

const renderComponent = (component) => {
    appElement.appendChild(component());
};

renderComponent(Header);
renderComponent(Main)
renderComponent(Footer);
