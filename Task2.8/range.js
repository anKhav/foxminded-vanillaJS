export const Range = () => {
    const rangeThumb = document.getElementById("range-thumb");
    const rangeNumber = document.getElementById("range-number");
    const rangeLine = document.getElementById("range-line");
    const rangeInput = document.getElementById("slider");

    const updateRangeValue = () => {
        rangeNumber.textContent = rangeInput.value;
    };

    const updateRangeVisuals = () => {
        const thumbPosition = rangeInput.value / rangeInput.max;
        const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

        rangeThumb.style.left = thumbPosition * space + "px";

        rangeLine.style.width = rangeInput.value + "%";
    };
    rangeInput.addEventListener("input", () => {
        updateRangeValue();
        updateRangeVisuals();
    });

    const initializeRangeSlider = () => {
        updateRangeValue();
        updateRangeVisuals();
    };

    initializeRangeSlider();
}

