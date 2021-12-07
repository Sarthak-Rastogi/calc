window.addEventListener("load",initEvents);
var resultBox;
var tempValue;
var calculate;
var expression;
function initEvents() {
    var numbers = document.querySelectorAll(".num");
    var operators = document.querySelectorAll(".opr");
    resultBox = document.querySelector("input[type='text']");
    var result=document.querySelector(".calc");
    var  reset=document.querySelector(".reset");
    var clear=document.querySelector(".clear");
    for(var i = 0; i < numbers.length; i++) {   
        numbers[i].addEventListener("click",appendNum);
    }
    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click",appendOpr);
    }
result.addEventListener("click",calc);
reset.addEventListener("click",res);
clear.addEventListener("click",clean); 
var sign=document.querySelector(".btn_1");
sign.addEventListener("click",sign_chng);
}

function appendNum() {
 
    var btn_value = event.target.innerHTML;
    if(resultBox.value==0)
    {resultBox.value=btn_value;}
else{
    resultBox.value += btn_value;}
    tempValue = resultBox.value;
}

function appendOpr() {
    var btn_value = event.target.innerHTML;
    resultBox.value = tempValue + btn_value;
   
}

function calc(){
 tempValue=resultBox.value;

resultBox.value=eval(tempValue);
}

function res(){
    resultBox.value=0;
    tempValue=null;
}

function clean(){
resultBox.value=0;
}

function sign_chng(){
data=-(resultBox.value);
resultBox.value=data;

tempValue=resultBox.value;
}