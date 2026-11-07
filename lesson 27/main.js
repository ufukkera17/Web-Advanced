// function showmessage(){
//     alert("This message is inside of the function")
// }


function sum(number1,number2){
    return  number1 + number2
}

console.log(25+5);

function toCelsius(f){
  return  (5/9) * (f-32)
}

console.log("54 fahreneit is equal to" + toCelsius(54) + "celcius")

function dsFunction(){
    var localVar = "Digitalschool"
    alert(localVar)
}

dsFunction()

function toSeconds(minutes){
    return minutes * 60
}

console.log(toSeconds(5))


//Objects

var car = {
    name : "Mercedes",
    color : "Black",
    year : 2012,
    kilometers : 140000

    startengine : function(){
        alert("Vroom!")
    },

    get getKilometers (){
        return this.kilometers;
    },

    set setKilometer(km){
        this.kilometers = km;
    },

    get getColor(){
        return this.color;
    },

    set setColor(newColor){
        this.color = newColor
    }
}

console.log(car.getKilometers)

car.setKilometers =150000;

console.log(car.getKilometers);