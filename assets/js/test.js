$(function (){
    var pixelBase = window.base || 16,
        selected = window.selected.base || 16;
    

    (function (){
        var e = document.getElementById("mySelect"),
        var userValue = e.options[e.selectedIndex].value;
        // var userValue = document.getElementById("value").value;
        var result = document.getElementById("res").value;
        var convertButton = document.getElementById("converter").value;
        var cleanButton = document.getElementById("clean").value;
    
        function calcular(e){
        }
        $convertButton.on('click', function(e){
            calcular();
        });
    });
});