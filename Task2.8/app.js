import Header from "./components/Header/Header.js";
import Footer from './components/Footer/Footer.js'
import Main from "./components/Main/Main.js";

const appElement = document.getElementById('app');

const renderComponent = (component) => {
    appElement.appendChild(component());
};

renderComponent(Header);
renderComponent(Main)
renderComponent(Footer);
