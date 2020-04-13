function getHistory(){
    return document.getElementById("history_value").innerText;
}

function printHistory(num){
    document.getElementById("history_value").innerText=num;
}

function getOutput(){
    return document.getElementById("output_value").innerText;
}

function printOutput(num){
    if (num==""){
        document.getElementById("output_value").innerText=num;
    }
    else{
        document.getElementById("output_value").innerText=getFormattedNn(num);
    }
}

function getFormattedNn(num){
    if (num=='')
        return "";
    
    let n= Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNo (num){
    return Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++)
{
    operator[i].addEventListener("click",function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if (this.id=="backspace"){
            let output =reverseNo(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output==""&&history!=="")
            {
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if (output != "" || history != ""){
                output= output==""?
                output: reverseNo(output);
                history=history+output;
            
                if(this.id=="equal"){
                    let result = eval(history)   
                    printOutput(result);
                    printHistory('');
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput('');

                }

            }

        }
    })   
}

var numbers = document.getElementsByClassName("number");
for(let i=0; i<numbers.length; i++)
{
    numbers[i].addEventListener("click",function(){
        let output = reverseNo(getOutput());
        if (output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
}





