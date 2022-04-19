let sizeOfCanvas = 16;

const canvas = document.querySelector("#canvas");

for(let i = 0; i < sizeOfCanvas * sizeOfCanvas; ++i) {
    const pixel = document.createElement("div");
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}

const pixels = document.querySelectorAll('.pixel');

console.log(canvas.style);

const canvasStyles = window.getComputedStyle(canvas);

console.log(canvasStyles);

const canvasWidth = canvas.clientWidth - (parseFloat(canvasStyles.paddingTop) + parseFloat(canvasStyles.paddingBottom));
const canvasHeight = canvas.clientHeight - (parseFloat(canvasStyles.paddingLeft) + parseFloat(canvasStyles.paddingRight));

Array.from(pixels).forEach((pixel) => {
    // pixel.style.width = `${+canvas.style['width'] / sizeOfCanvas}px`;
    // pixel.style.height = `${+canvas.style['height'] / sizeOfCanvas}px`;
    pixel.style.width = `${canvasWidth / sizeOfCanvas}px`;
    pixel.style.height = `${canvasHeight / sizeOfCanvas}px`;
});

Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('mousedown', (e) => {
        pixel.style['background-color'] = 'black';
    });
});