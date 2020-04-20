console.log("Hello Strivers, this time from index.js")

function test() {
    let list = document.querySelector("#myList")  //get from the DOM a reference from the element with ID myList
    let myTask = document.querySelector("#myTask") //get from the DOM a reference from the element with ID myTask
    let error = document.querySelector("#error")
    //take the text value from inside the input

    if (myTask.value === "") {
        error.innerText = "You cannot add empty elements"
        return;
    }

    //if we dont' have @ sign
    // if (myTask.value.indexOf("@") == -1) {
    //     error.innerText = "Sorry, email not valid!"
    //     return;
    // }

    list.innerHTML += "<li>" + myTask.value + "</li>" //create a new li with the value inside!
    myTask.value = "";
    error.innerHTML = ""
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

function withParams(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log("hello")
    console.log("the result is", p1 + p2 + p3)
}

function withConstant(p1) {
    console.log("Hey, I'm here!")
    let result = p1 * 3.1415;
    return result;
}

function whoIsBigger(n1, n2) {
    return n1 > n2 ? n1 : n2;

    if (n1 > n2)
        return n1
    else
        return n2
}

function crazyBehaviour(p1) {
    let list = document.querySelector("#myList")
    if (p1 > 100) {
        list.innerHTML = "";
    }
    else {
        list.innerHTML += "<li>" + p1 + "</li>"
    }
}

function withAnd(x) {
    //if one of the condition is falsy, the others are not executed
    if (x > 5 && x < 10)
        return "you are in the range!"
    else
        return "you are NOT in the range!"
}

function withOr(x) {
    if (x === 10 || x === 1)
        return "you are in the range!"
    else
        return "you are NOT in the range!"
}