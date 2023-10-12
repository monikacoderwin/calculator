let input=document.getElementById('text');
let buttons= document.querySelectorAll('button');

let string="";
let arr=Array.from(button);
arr.forEach((button)=>{
    button.addEventlistener('click',(e)=>{
        switch(string)
        {
        case1:
         e.target.innerHTML== '='
        string = eval(string);
        input.value= string;
        break;
        case2:
         string+= e.target.innerHTML;
        input.value=string;
        break;
        case3:
         e.target.innerHTML=="AC"
        string="";
        input.value= string;
        break;
        case4:
         e.target.innerHTML='Del'
        string=string.substring(0, string.length-1);
        text.value=string;
        break;
        default:
            console.log("invalid");

    })
});