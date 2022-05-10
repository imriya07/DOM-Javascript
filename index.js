console.log("Working");

//we can DOM manipulation for making dynamic changes.
//we can make changes by accesing an element via: id's,tags and classname.
const element1 = document.getElementById("text");
console.log(element1);

element1.innerHTML = '<div><b>I hope you are fine</b></div>'
console.log(element1);
//document.getElementById("text").innerHTML = "Your buddy!!"

//element1.innerHTML = "Good to hear that you are fine";
//console.log(element1.innerHTML);

const element2 = document.getElementsByClassName("trip");
console.log(element2[0].innerText);
element2[0].innerText = "SIGNIN"
console.log(element2[0].innerText);

const element3 = document.getElementsByTagName("h1");
console.log(element3);
element3[0].style.color = "orange" 
//element3[1].style.color = "blue" 
//element3[2].style.color = "purple" 

function changeText(){
    const trying1 = document.getElementsByClassName("trip");
    trying1[0].innerText = "Welcome to home";
    console.log(trying1);
    let image = document.getElementById("image")
    image.src = "tea.jpg";
}
//[access the img tag].src = "tea.jpg";


//How to create an element-----------------------------------------------


let element4 = document.createElement("img");//create element
element4.className = "newDiv";
element4.id = "newDiv";
element4.setAttribute("name","myDiv");
element4.setAttribute("src","./coffee.jpg")

let element5 = document.querySelector("div.trip");//it finds out the element  where we want to add a created element
element5.appendChild(element4);//this helps you adding the child element hear the one we created reacently
console.log(element5);

element5.removeChild(element4);// helps to remove the child 

    