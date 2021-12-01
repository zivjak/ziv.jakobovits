var txt = "abcdefg";
var txt1 = txt.length;
var txt2 = txt.slice(0,4);
console.log(txt2);
var txt3 = "come vist microsoft";
var txt4 = txt3.replace("microsoft", "bgu");
console.log(txt4);

const d = new Date();
console.log(d);
var h = d.getHours();
console.log(h)

if (h<12){
    greeting = "good morning";
} else if (h < 17){
    greeting = "good afternon"
}
 else{
    greeting = "good evening";
}
console.log(greeting);

function greet(){
    document.getElementById("p").innerHTML = greeting;
}

var cars = ["toyota", "Honda", "Ford"];
var i;
for(i=0; i<cars.length; i++) {
    console.log(cars[i])
}