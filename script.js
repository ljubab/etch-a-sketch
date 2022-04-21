let sizeOfCanvas = 16;

let pixels = null;
const canvas = document.querySelector("#canvas");

function createCanvas() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    if(pixels) {
        Array.from(pixels).forEach((pixel) => {
            pixel.removeEventListener('mousedown', (e) => {
                console.log("click");
                let newSizeOfCanvas = +document.querySelector("#sizeOfCanvas").value;
                pixel.style['background-color'] = document.querySelector("#inputColorPicker").value;
            });
        });
    }

    for(let i = 0; i < sizeOfCanvas * sizeOfCanvas; ++i) {
        const pixel = document.createElement("div");
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }

    const canvasStyles = window.getComputedStyle(canvas);
    const canvasWidth = canvas.clientWidth - (parseFloat(canvasStyles.paddingTop) + parseFloat(canvasStyles.paddingBottom));
    const canvasHeight = canvas.clientHeight - (parseFloat(canvasStyles.paddingLeft) + parseFloat(canvasStyles.paddingRight));

    pixels = document.querySelectorAll('.pixel');
    console.dir(pixels);

    Array.from(pixels).forEach((pixel) => {
        pixel.style.width = `${canvasWidth / sizeOfCanvas}px`;
        pixel.style.height = `${canvasHeight / sizeOfCanvas}px`;
    });

    Array.from(pixels).forEach((pixel) => {
        pixel.addEventListener('mousedown', (e) => {
            console.log("click");
            let newSizeOfCanvas = +document.querySelector("#sizeOfCanvas").value;
            pixel.style['background-color'] = document.querySelector("#inputColorPicker").value;
        });
    });
}

createCanvas();

let canvasSizeSlider = document.querySelector("#sizeOfCanvas");

canvasSizeSlider.addEventListener('change', () => {
    if(canvasSizeSlider.value !== sizeOfCanvas) {
        sizeOfCanvas = +canvasSizeSlider.value;
        createCanvas();
    }
});

function clearCanvas() {
    Array.from(pixels).forEach((pixel) => {
        pixel.style['background-color'] = `white`;
    });
}

document.querySelector("#clear").addEventListener('click', clearCanvas);