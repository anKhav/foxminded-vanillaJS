import data from "../data.js";

const filter = (arr, options) => {
    return arr.filter(item =>
        (!options.title || item.title.toLowerCase().includes(options.title.toLowerCase())) &&
        ((!options.topic || options.topic === 'Other') || item.topic === options.topic) &&
        (!options.price || item.price <= options.price)
    );
};

export const applyFilters = (data,labels,options) => {
    return function () {
        let res = filter(data, options);

        if (options.topic === 'All') {
            options.topic = null
            res = filter(data, options);
        } else if (options.topic === 'Other') {
            res = filter(data, options)
            res = res.filter(product => !labels.includes(product.topic))
        }
        return res
    }
};