var convertOptions = document.querySelector("#convertOptions");

var result = document.querySelector(".result");
var input = result.querySelector(".input");
var output = result.querySelector(".output");

var error = document.querySelector("#error");
var convertButton = document.getElementById("convertButton");


// Reset function
function reset(e){
    e.value='';
    error.textContent='';
}

// No select options
function errorOptions(){
    error.textContent = "Choose one of the options!";
}

// No input value
function errorInput(){
    error.textContent = "Enter the value to be converted!";
}

// No pixel value
function errorPixel(){
    error.textContent = "Necessary enter the value base!"
}

// Calculation method function
function  calc(e){
    var inputValue = Number(document.querySelector("#inputValue").value);
    var pixelBase = Number(document.querySelector("#pixelBase").value);
    var out = " ";
    var outPrecision = " ";

    switch (e){
        case "0"://Pixel to EM
            input.textContent = inputValue + " pixel";
            output.textContent = String(inputValue / pixelBase) + " em";
            break;
        case "1":// Pixel to %
            input.textContent = String(inputValue + " pixel");
            output.textContent = String(inputValue / pixelBase * 100) + " %";
            break;
        case "2":// Pixel to PT
            input.textContent = String(inputValue + " pixel");
            output.textContent = String(inputValue * (72 / 96)) + " pt";
            break;
        case "3":// EM to Pixel
            input.textContent = String(inputValue + " em");
            output.textContent = String(inputValue * pixelBase) + " px";
            break;
        case "4":// EM to %
            input.textContent = String(inputValue + " em");
            output.textContent = String(inputValue * 100) + " %";
            break;
        case "5"://EM to PT
            input.textContent = String(inputValue + " em");
            output.textContent = String((72 / 96) / inputValue * pixelBase + " pt");
            break;
        case "6"://Percent % to Pixel
            input.textContent = String(inputValue + " %");
            output.textContent = String((inputValue * pixelBase) / 100 + " px");
            break;
        case "7"://Percent % to EM
            input.textContent = String(inputValue + " %");
            output.textContent = String(inputValue / 100 + "em");
            break;
        case "8"://Percent % to PT
            input.textContent = String(inputValue + " %");
            output.textContent = String(((72 / 96) * inputValue) * pixelBase / 100 + " pt");
            break;
        case "9"://Points to PX
            input.textContent = String(inputValue + " points");
            out = ((96 / 72) * inputValue);
            outPrecision = out.toPrecision(4);
            output.textContent = String(outPrecision + " px");
            break;
        case "10"://Points to EM
            input.textContent = String(inputValue + " points");
            out = (((96 / 72) * inputValue) / pixelBase);
            outPrecision = out.toPrecision(4);
            output.textContent = String(outPrecision + " em");
            break;
        case "11"://Points to %
            input.textContent = String(inputValue + " points");
            out = (((96 / 72) * inputValue) / pixelBase * 100);
            outPrecision = out.toPrecision(4);
            output.textContent = String(outPrecision + " %");
        default:
            break;
    }
    reset(inputValue);
}


// Convert Button event
convertButton.addEventListener('click', function handleClick(){
    var e = convertOptions;
    var opt = e.options[e.selectedIndex].value;
    calc(opt);
});