var div = document.createElement("div");
div.textContent = "Display Full Words Here:";
document.body.appendChild(div);

var divDisplay = document.createElement("div");
divDisplay.setAttribute("class", "display");
document.body.appendChild(divDisplay);

var display = document.querySelector(".display");

function wordReformer(word1, word2){
    display.textContent += word1 + word2 + " "
    return word1 + word2;
}