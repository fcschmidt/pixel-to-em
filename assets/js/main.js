var convertOptions = document.getElementById("convertOptions");
var result = document.getElementById("result");
var error = document.getElementById("error");
var convertButton = document.getElementById("convertButton");
var cleanButton = document.getElementById("clearButton");


// Reset function
function reset(e){
    inputValue.value='';
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
function calc(e){    
    var inputValue = Number(document.getElementById("inputValue").value);
    var pixelBase = Number(document.getElementById("pixelBase").value);

    if (e == "default"){
        errorOptions();
    } else if (inputValue == ''){
        errorInput();
    } else if(pixelBase == ''){
        errorPixel();
    } else {
        if (e == "0"){// Pixel to EM
            result.textContent = String(inputValue / pixelBase)+" em";
            input.textContent = String(inputValue +" pixel");
        }else if (e == "1"){// Pixel to %
            result.textContent = String(inputValue / pixelBase * 100)+" %";
            input.textContent = String(inputValue +" pixel");
        }else if (e == "2"){// Pixel to PT
            result.textContent = String(inputValue * (72/96))+" pt";
            input.textContent = String(inputValue +" pixel");
        }else if (e == "3"){// EM to Pixel
            result.textContent = String(inputValue * pixelBase)+" px";
            input.textContent = String(inputValue +" em");
        }else if (e == "4"){// EM to %
            result.textContent = String(inputValue * 100)+" %";
            input.textContent = String(inputValue +" em");
        }else if(e == "5"){//EM to PT
            result.textContent = String((72/96) / inputValue * pixelBase+" pt");
            input.textContent = String(inputValue +" em");
        }else if(e == "6"){//Percent % to Pixel
            result.textContent = String((inputValue * pixelBase) / 100+" px");
            input.textContent = String(inputValue +" %");
        }else if(e == "7"){//Percent % to EM
            result.textContent = String(inputValue / 100+ "em");
            input.textContent = String(inputValue +" %");
        }else if(e == "8"){//Percent % to PT
            result.textContent = String(((72/96) * inputValue) * pixelBase / 100+" pt");
            input.textContent = String(inputValue +" %");
        }else if(e == "9"){//Points to PX
            result.textContent = String((96/72) * inputValue+ "px");
            input.textContent = String(inputValue +" points");
        }else if(e == "10"){//Points to EM
            result.textContent = String(((96/72) * inputValue) / pixelBase+" em");
            input.textContent = String(inputValue +" points");
        }else if(e == "11"){//Points to %
            result.textContent = String(((96/72) * inputValue) / pixelBase * 100+" %");
            input.textContent = String(inputValue +" points");
        }
        reset();
    }
} 


// Convert Button event
convertButton.addEventListener('click', function handleClick(){  
    var e = convertOptions;
    var op = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;      
    calc(op);
});