function FillAddressInput()
{
    var checkBox= document.getElementById('checkBox');

    var pAddressLine1 = document.getElementById("pAddressLine1");
    var pZipcode = document.getElementById("pZipcode");
    var pCity = document.getElementById("pCity");
    var pState = document.getElementById("pState");
    var pCountry = document.getElementById("pCountry");

    var curAddressLine1 = document.getElementById("curAddressLine1");
    var curZipcode = document.getElementById("curZipcode");
    var curCity = document.getElementById("curCity");
    var curState = document.getElementById("curState");
    var curCountry = document.getElementById("curCountry");

    if (checkBox.checked == true)
    {     
        var pAddressLine1Value = pAddressLine1.value;
        var pZipcodeValue      = pZipcode.value;
        var pCityValue         = pCity.value;
        var pStateValue        = pState.value;
        var pCountryValue      = pCountry.value;

        curAddressLine1.value = pAddressLine1Value; 
        curZipcode.value      = pZipcodeValue;     
        curCity.value         = pCityValue;     
        curState.value        = pStateValue;       
        curCountry.value      = pCountryValue;      
    }
    else
    {
        curAddressLine1.value = "";
        curZipcode.value      = "";     
        curCity.value         = "";         
        curState.value        = "";       
        curCountry.value      = "";          
    }
}

