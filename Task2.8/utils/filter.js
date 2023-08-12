export const filter = (arr, options) => {
    return arr.filter(item =>
        (!options.title || item.title.includes(options.title)) &&
        ((!options.topic || options.topic === 'Other') || item.topic === options.topic) &&
        (!options.price || item.price <= options.price)
    );
};