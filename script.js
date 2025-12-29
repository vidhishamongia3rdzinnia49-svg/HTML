function calculatesquare(){
    var number=parseInt(document.getElementById('numberinput').value);
    var square= number*number;
    document.getElementById("result").innerHTML="The square of         "+ number +"     is:"+ square
}