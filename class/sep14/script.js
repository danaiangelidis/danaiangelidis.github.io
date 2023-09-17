console.log("Danai"); // only appears in the console for fun :)

const add = (a, d) => a+d; // no need to return, BUT if there is a return you need curly braces

console.log(add(5, 6));

const square = a => a*a;

console.log(square(5));

const hello = () => console.log("Hello me!");

hello();

const helloSpecific = userName => console.log("Hello " + userName + "!");

helloSpecific("Danaiagg");

const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log()
};

const animate = () => {
    document.getElementById("sun").classList.add("moving");
}

const stopAnimate = () => {
    document.getElementById("sun").classList.remove("moving");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("animate-button").onclick = animate;
    document.getElementById("stop-animate-button").onclick = stopAnimate;
    document.getElementById("button-show-name").onclick = displayName;
};

/* Toggle - figure it out!
functionbtntog()
{
var t = document.getElementById("js");
if(t.innerHTML=="Welcome to Linuxhint"){
      t.innerHTML="JavaScript World";}
else{
      t.innerHTML="Welcome to Linuxhint";}
}
*/