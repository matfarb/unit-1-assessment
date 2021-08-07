let showNum = document.querySelector("#big-num");
let inputValue = document.querySelector("input");
let bigNum = 0;

$("#plus").on("click", function() {
    bigNum += parseInt(inputValue.value);
    showNum.innerHTML = bigNum;
    if(bigNum >= 0){
        $("#big-num").css("color", "black");
    }
});

$("#minus").on("click", function() {
    bigNum -= parseInt(inputValue.value);
    showNum.innerHTML = bigNum;
    if(bigNum < 0){
        $("#big-num").css("color", "red");
    }
});