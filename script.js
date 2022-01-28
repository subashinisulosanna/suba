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

function show1()
{
    document.getElementById("head").innerHTML="Billing Management System"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
function show2()
{

    document.getElementById("head").innerHTML="Farm Easy"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
function show3()
{

    document.getElementById("head").innerHTML="Simple Quiz App"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
function show4()
{

   document.getElementById("head").innerHTML="Whats App Clone"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
function show5()
{
document.getElementById("head").innerHTML="Simple Todo App"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
function show6()
{

    document.getElementById("head").innerHTML="Small Shopping Cart"
    document.getElementById("description").innerHTML=`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore culpa est tempora non! Vitae aperiam quisquam repellendus, quaerat rem, laboriosam iure provident quas doloribus porro odio optio corporis pariatur possimus officia adipisci dignissimos sed alias tenetur voluptates consectetur. Hic temporibus minus tenetur aut voluptatibus incidunt fuga eaque, accusamus quas?</p><a href="https://github.com/subashinisulosanna/Billing-Management-System.git" target="_blank">souce code</a></div>`;
}
 function hide()
  {
      document.getElementById("description").innerHTML="This is the Description Box....It shows the Details about the Projects"
  }


