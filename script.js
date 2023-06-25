

var input=document.getElementById("input");
var result=document.getElementById("result");
var inputType=document.getElementById("inputType");
var resultType=document.getElementById("resultType");
var inputTypeValue,resultTypeValue;

input.addEventListener("change",myResult);
input.addEventListener("keyup",myResult);
result.addEventListener("keydown",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;
function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;
     
    if(inputTypeValue==="meter" && resultTypeValue==="kilometer"){
        result.value=input.value*0.001;
     }else if(inputTypeValue==="meter" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*100;
     }
     else if(inputTypeValue==="meter" && resultTypeValue==="meter"){
        result.value=input.value;
     }
     else if(inputTypeValue==="meter" && resultTypeValue==="millimeter"){
        result.value=Number(input.value)*1000;
     }
     else if(inputTypeValue==="meter" && resultTypeValue==="feet"){
        result.value=Number(input.value)*3.328084;
     }else if(inputTypeValue==="meter" && resultTypeValue==="inch"){
        result.value=Number(input.value)*39.3701;
     }


     if(inputTypeValue==="kilometer" && resultTypeValue==="kilometer"){
        result.value=Number(input.value);
     }else if(inputTypeValue==="kilometer" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*100000;
     }
     else if(inputTypeValue==="kilometer" && resultTypeValue==="meter"){
        result.value=Number(input.value)*1000;
     }
     else if(inputTypeValue==="kilometer" && resultTypeValue==="millimeter"){
        result.value=Number(input.value)*1000000;
     }
     else if(inputTypeValue==="kilometer" && resultTypeValue==="feet"){
        result.value=Number(input.value)*3280.84;
     }else if(inputTypeValue==="kilometer" && resultTypeValue==="inch"){
        result.value=Number(input.value)*39370.1;
     }


     if(inputTypeValue==="centimeter" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)*0.00001;
     }else if(inputTypeValue==="centimeter" && resultTypeValue==="centimeter"){
        result.value=Number(input.value);
     }
     else if(inputTypeValue==="centimeter" && resultTypeValue==="meter"){
        result.value=Number(input.value)*0.01;
     }
     else if(inputTypeValue==="centimeter" && resultTypeValue==="millimeter"){
        result.value=Number(input.value)*10;
     }
     else if(inputTypeValue==="centimeter" && resultTypeValue==="feet"){
        result.value=Number(input.value)*0.0328084;
     }else if(inputTypeValue==="centimeter" && resultTypeValue==="inch"){
        result.value=Number(input.value)*0.393701;
     }


     if(inputTypeValue==="feet" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)*0.0003048;
     }else if(inputTypeValue==="feet" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*30.48;
     }
     else if(inputTypeValue==="feet" && resultTypeValue==="meter"){
        result.value=Number(input.value)*0.3048;
     }
     else if(inputTypeValue==="feet" && resultTypeValue==="millimeter"){
        result.value=Number(input.value)*304.8;
     }
     else if(inputTypeValue==="feet" && resultTypeValue==="feet"){
        result.value=Number(input.value);
     }else if(inputTypeValue==="feet" && resultTypeValue==="inch"){
        result.value=Number(input.value)*12;
     }


     if(inputTypeValue==="inch" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)/39370;
     }else if(inputTypeValue==="inch" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*2.54;
     }
     else if(inputTypeValue==="inch" && resultTypeValue==="meter"){
        result.value=Number(input.value)*0.0254;
     }
     else if(inputTypeValue==="inch" && resultTypeValue==="millimeter"){
        result.value=Number(input.value)*25.4;
     }
     else if(inputTypeValue==="inch" && resultTypeValue==="feet"){
        result.value=Number(input.value)*0.0833333;
     }else if(inputTypeValue==="inch" && resultTypeValue==="inch"){
        result.value=Number(input.value);
     }


}