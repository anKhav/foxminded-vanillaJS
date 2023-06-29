const incomeInput = document.querySelector("#income");
const income = document.querySelector("#income-value");
incomeInput.addEventListener(
    "input",
    () => {
        income.innerHTML = incomeInput.value;
    },
    false
);

const bar = document.querySelector("#over")
const setRange = () => {
    const percents = (incomeInput.value * 100) / incomeInput.max
    const width = incomeInput.clientWidth * percents / 100
    bar.style.width = `${width}px`
}
setRange()
incomeInput.addEventListener("input", setRange)