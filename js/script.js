var inputUnit = document.getElementById("inputUnit");
var inputValue = document.getElementById("inputValue");

var lblUnitInput = document.getElementById("lblUnitInput");
var lblResult = document.getElementById("result");
var lblUnitOutput = document.getElementById("lblUnitOutput");

var savedList = document.getElementById("listItem");

var heartIcon = document.getElementById("heartIcon"); 
var changeIcon = document.getElementById("changeIcon");
var xIcons = document.getElementsByClassName(".fa-x");


function Result(event){
    
    if(inputUnit.value == "km-miles"){
        lblResult.textContent = (inputValue.value / 1.60934).toFixed(2);
        lblUnitInput.textContent = "km";
        lblUnitOutput.textContent = "miles";
    } else if (inputUnit.value == "miles-km"){
        lblResult.textContent = (inputValue.value * 1.60934).toFixed(2);
        lblUnitInput.textContent = "miles";
        lblUnitOutput.textContent = "km";
    } else if (inputUnit.value == "feet-metres"){
        lblResult.textContent = (inputValue.value * 0.3048).toFixed(2);
        lblUnitInput.textContent = "feet";
        lblUnitOutput.textContent = "metres";
    } else if (inputUnit.value == "metres-feet"){
        lblResult.textContent = (inputValue.value / 0.3048).toFixed(2);
        lblUnitInput.textContent = "metres";
        lblUnitOutput.textContent = "feet";
    } else if (inputUnit.value == "cm-inches"){
        lblResult.textContent = (inputValue.value * 2.54).toFixed(2);
        lblUnitInput.textContent = "cm";
        lblUnitOutput.textContent = "inches";
    } else if (inputUnit.value == "inches-cm"){
        lblResult.textContent = (inputValue.value / 2.54).toFixed(2);
        lblUnitInput.textContent = "inches";
        lblUnitOutput.textContent = "cm";
    }
}

inputValue.addEventListener('input', Result);
inputUnit.addEventListener('input', Result);

heartIcon.addEventListener("click", function(){

    var listItem = document.createElement('li');
    var icon = document.createElement('i');

    icon.classList.add("fa-solid", "fa-x");
    listItem.textContent = `${inputValue.value} ${lblUnitInput.textContent} -> ${lblResult.textContent} ${lblUnitOutput.textContent}`; 

    if(inputValue.value != ""){

        savedList.appendChild(listItem);
        inputValue.value = "";
        lblResult.textContent = "";
        lblUnitOutput.textContent = "";

        listItem.appendChild(icon);
    }

});
