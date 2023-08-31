import {handleRouteChange} from "../../routes.js";

const Main = () => {
    const mainDOM = document.createElement('main')
    mainDOM.appendChild(handleRouteChange(mainDOM))
    return mainDOM
}
export default Main