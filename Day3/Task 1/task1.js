function checkprime(){
    var number=document.getElementById("prime").value;
    var flag=0;

    if(number == 1){
        document.getElementById("answer").innerHTML="Prime";
    }else if(number == 2){
        document.getElementById("answer").innerHTML="Prime";
    }
    else{
    for(i=2;i<number;i++){
        console.log(number%i==0);
        if(number % i==0){
            document.getElementById("answer").innerHTML="Non-Prime";
            flag=1;
            break;
        }
        if(flag==0){
            document.getElementById("answer").innerHTML="Prime";
        }
    }
}


}