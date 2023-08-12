import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Shop } from "./pages/Shop.js";
import { Range } from "./range.js";
import { filter } from "./utils/filter.js";
import { ProductList } from "./components/ProductList.js";

const products = [
    {
        title:'Title',
        price:12,
        topic:'Al',
        image:'../public/fox.jpg',
        rating:2
    },
    {
        title:'Title',
        price:23,
        topic:'her',
        image:'https://wallpapercrafter.com/th800/128829-fox-grass-photography.jpg',
        rating:2
    },
    {
        title:'Dog',
        price:10,
        topic:'Forest',
        image:'https://wallpapercrafter.com/th800/128829-fox-grass-photography.jpg',
        rating:3
    },
    {
        title:'Dog',
        price:100,
        topic:'Fox Kids',
        image:'https://wallpapercrafter.com/th800/128829-fox-grass-photography.jpg',
        rating:3
    },
    {
        title:'Dog',
        price:1,
        topic:'Cats',
        image:'https://wallpapercrafter.com/th800/128829-fox-grass-photography.jpg',
        rating:3
    },
    {
        title:'Fox',
        price:90,
        topic:'Forest',
        image:'https://wallpapercrafter.com/th800/128829-fox-grass-photography.jpg',
        rating:1
    }
]

const root = document.querySelector("#app");

const renderContent = (content) => {
    root.innerHTML = Shop(content);

    const contentBox = root.querySelector(".shop__content");
    Range();

    const input = document.querySelector("#search_input");
    const range = document.querySelector("#slider");
    const labels = [...document.querySelectorAll('#label')].map(label => label.innerText)

    const filterOptions = {
        title: null,
        topic: "All",
        price: range.value,
    };

    const applyFilters = () => {
        let res = filter(content, filterOptions);

        if (filterOptions.topic === 'All') {
            filterOptions.topic = null
            res = filter(content, filterOptions);
        } else if (filterOptions.topic === 'Other') {
            res = filter(content, filterOptions)
            res = res.filter(product => !labels.includes(product.topic))
        }
        contentBox.innerHTML = ProductList(res);
    };

    input.addEventListener("input", (e) => {
        filterOptions.title = e.target.value;
        applyFilters();
    });

    document.querySelector(".shop__filter").addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target.dataset.filter === "topic") {
            filterOptions.topic = e.target.innerText; // Use value instead of innerText
            applyFilters();
        }
    });

    range.addEventListener("change", (e) => {
        filterOptions.price = e.target.value;
        console.log(filterOptions)
        applyFilters();
    });

    applyFilters();
};

const routes = {
    "/": Home,
    "/about": About,
    "/shop": () => renderContent(products),
};

const handleRouteChange = () => {
    const route = location.pathname;
    const handler = routes[route];
    if (handler) {
        handler();
    }
};

window.addEventListener("popstate", handleRouteChange);
handleRouteChange();

