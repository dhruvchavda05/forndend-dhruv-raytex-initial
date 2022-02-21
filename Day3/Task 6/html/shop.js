function cart(){
    var temp=0;
    temp=document.getElementById("addtocart").innerHTML;
    num=parseInt(temp);
    num+=1;
    document.getElementById("addtocart").innerHTML=num;
    console.log(num);
}