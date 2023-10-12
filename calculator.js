let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value=result.value+number;
}
Result=()=>{
    try{
      result.value=eval(result.value);
    }
    catch(err){
        alert("Please enter valid input");
    }
}
function clr(){
    result.value='';
}
function del(){
    result.value=result.value.slice(0,-1);
}