var a = 1;

function show()
{
    if (a === 1)
    {
        document.getElementById("pnav__about").style.marginLeft = "25px";
        a = 0;
    }
    else {
        document.getElementById("pnav__about").style.marginLeft = "600px";
        a = 1;
    }
    
}
function OnMouseDown() {
    // this object was clicked - do something
    document.getElementById("pnav__about").style.marginLeft = "700px";
}
function backchange(){
    document.getElementById("pbutton").style.backgroundColor = "white"
    document.getElementById("pbutton").style.color = "orangered"
    
}
function backnotchange()
{
    document.getElementById("pbutton").style.backgroundColor = "orangered"
     document.getElementById("pbutton").style.color = "white"
}
var s1=<div><h1>Banking Management System</h1><a href="https://github.com/subashinisulosanna/Billing-Management-System.git">link</a></div>
function show1()
{

    document.getElementById("hi").innerHTML="hrllo";
}




