console.log("Hello Strivers, this time from index.js")

function test() {
    let list = document.querySelector("#myList")  //get from the DOM a reference from the element with ID myList
    let myTask = document.querySelector("#myTask") //get from the DOM a reference from the element with ID myTask
    //take the text value from inside the input

    list.innerHTML += "<li>" + myTask.value + "</li>" //create a new li with the value inside!
    myTask.value = "";
    //console.log("this is test function")
}

let test2 = () => { 
    //console.log("this is an arrow function")
    let list = document.querySelector("#myList") //get from the DOM a reference from the element with ID myList

    let random1 = Math.round(Math.random() * 50);
    let random2 = Math.round(Math.random() * 50);
    let result = sum(random1, random2)

    // adds, since we're using +=, the content of the string as HTML in the page
    list.innerHTML += "<li>Element from arrow function!" + result + " </li>"
}

function callback(result) {
    console.log("Hey, I'm callback, the result is: ", result)
}

function veryLongTask(toBeExecutedAtTheEnd) {
    let name = "Diego";
    let email = "diego@strive.school"
    toBeExecutedAtTheEnd(name + email)
}

function sum(number1, number2) {
    return number1 + number2
}

function withParams(p1,p2,p3){
    console.log(p1,p2,p3)
    console.log("hello")
    console.log("the result is", p1 + p2 + p3)
}

function withConstant(p1) {
    console.log("Hey, I'm here!")
    let result = p1 * 3.1415;
    return result;
}

