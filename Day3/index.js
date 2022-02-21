var name = "Dhruv";
var num1=10;
var num2=20;
var verify =true;

//object

const student={name:"Dhruv", age:30}

function displayobjectnew(){
    document.getElementById("valobject").innerHTML=student.name + " " +student.age;
    
}


function checkeven(){
    var picknumb= document.getElementById("readnum").value;
    console.log(picknumb);
    if(picknumb %2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

function addition(){
    var sum= num1 + num2; 
    var mul=num1*num2;
    
document.getElementById("new").innerText="New";
document.getElementById("sum").innerHTML=sum;
document.getElementById("mul").innerHTML=mul;
console.log(sum);
console.log(mul);
return sum;

}