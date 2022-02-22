function show(){
    var name = document.getElementById("fname").value;
    var city = document.getElementById("city").value;
    document.getElementById("answer").innerHTML=name;
    document.getElementById("answer2").innerHTML=city;
    let table = document.getElementById("tablebody");
    
    table.innerHTML = table.innerHTML + "<tr><td>" + name +"</td></tr>" +"<tr><td>" + city +"</td></tr>";
}
