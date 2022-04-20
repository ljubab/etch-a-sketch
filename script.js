let sizeOfCanvas = 16;

const canvas = document.querySelector("#canvas");

for(let i = 0; i < sizeOfCanvas * sizeOfCanvas; ++i) {
    const pixel = document.createElement("div");
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}

const canvasStyles = window.getComputedStyle(canvas);
const canvasWidth = canvas.clientWidth - (parseFloat(canvasStyles.paddingTop) + parseFloat(canvasStyles.paddingBottom));
const canvasHeight = canvas.clientHeight - (parseFloat(canvasStyles.paddingLeft) + parseFloat(canvasStyles.paddingRight));

const pixels = document.querySelectorAll('.pixel');

Array.from(pixels).forEach((pixel) => {
    // pixel.style.width = `${+canvas.style['width'] / sizeOfCanvas}px`;
    // pixel.style.height = `${+canvas.style['height'] / sizeOfCanvas}px`;
    pixel.style.width = `${canvasWidth / sizeOfCanvas}px`;
    pixel.style.height = `${canvasHeight / sizeOfCanvas}px`;
});

const currentColor = 'red';

Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('mousedown', (e) => {
        pixel.style['background-color'] = document.querySelector("#inputColorPicker").value;
    });
});