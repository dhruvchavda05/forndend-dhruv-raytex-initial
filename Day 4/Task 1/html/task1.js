function showdata() {
    var email = document.getElementById("exampleInputEmail11").value;
    var phone = document.getElementById("exampleInputEmail1").value;
    
    console.log(email);
    console.log(phone);
    document.getElementById("answer").innerHTML = email;
    
}