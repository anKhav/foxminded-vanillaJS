const listBox = document.querySelector('#list-box')
const buttonSort = document.querySelector('#button-sort')
const buttonReset = document.querySelector('#button-reset')

const data = ['Fennec', 'Arctic', 'Kit', 'Red', 'Pet', 'Yellow', 'Wild', 'Angry', 'Pad', 'Angty']

const getTabTemplate = (value) => `<li class="tab">${value}</li>`

const renderList = (arr) => listBox.innerHTML = arr.map(tab => getTabTemplate(tab)).reduce((acc, value) => {
    acc+=value
    return acc
},'')

const sortList = (e) => {
    e.preventDefault()
    const sortedData = [...data]
    sortedData.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    renderList(sortedData)
};
renderList(data)
buttonSort.addEventListener('click', sortList)
