function fibbo(){
    let n1=0,n2=1;
    var number = document.getElementById("fibbo").value;
    console.log(number);
    var arr=[];
    for (let i = 1; i <= number; i++) {
        console.log(n1);
        arr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    document.getElementById("answer").innerHTML =arr;
}