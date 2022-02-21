function auth(){
    var name= document.getElementById("name").value;
    var pass= document.getElementById("pass").value;
    if(name=="DBC"&&pass=="DBC"){
        document.getElementById("answer").innerHTML="Successful";
    }else{
        document.getElementById("answer").innerHTML="Unsuccessful";
    }
}