const textbox=document.getElementById("textbox");
const tofaren=document.getElementById("tofaren");
const tocelcius=document.getElementById("tocelcius");
const result=document.getElementById("result");
let temp;

function  convert(){

    if(tofaren.checked){


        temp=Number(textbox.value);
        temp=(9/5*temp)+32;

        //tofixed for precision
        result.textContent=temp.toFixed(1)+" F";

    }
    else if(tocelcius.checked){

        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);

        //tofixed for precision
        result.textContent=temp.toFixed(1)+" C";

    }
    else{
        result.textContent="select a unit";
    }

}