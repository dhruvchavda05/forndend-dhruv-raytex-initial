function calc(){
    var old=document.getElementById("birth").value;
    var d=new Date();
    var age = new Date() - new Date(old);
    return Math.floor(age/1000/60/60/24/365);
    age.getFullYear();
    var ans=d.getFullYear()-old;
    console.log(ans);
}