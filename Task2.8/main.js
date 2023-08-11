import {Home} from "./pages/Home.js";
import {About} from "./pages/About.js";
import {Shop} from "./pages/Shop.js";
import {Range} from "./range.js";


const root = document.querySelector('#app')
if (location.pathname === '/'){
    root.insertAdjacentHTML('afterbegin', Home())
} else if (location.pathname === '/about'){
    root.insertAdjacentHTML('afterbegin', About())
} else if (location.pathname === '/shop'){
    root.insertAdjacentHTML('afterbegin', Shop())
    Range()
}
    // .insertAdjacentHTML('afterbegin', Home())

