
// variables  

// container to store data to reuse it again

// JS is loosly typed

// var x = 5;
// var y = 7;
// var z = "hello";

// console.log(x + y);

// naming convention for variables
// variables cannot start with number 
// variables cannot start with special charcter 
// variables can start with _ $
// its a good practice to follow camel case naming convention





// data types

// premitive data types

// to know  data type use type of

// number 


// var x = document.getElementById("aykalm")
// console.log(x);



// + operator

// string concatination

// var x = "ahmed"
// var y = "mohamed"

// console.log(x + " " + y);

// number add

// var x = 5
// var y = 7

// console.log(x + y);


// var x = 24524
// var y = "1"

// console.log(x - y);


// coersion (( change data type due to operator ))


// arithmatic operators
//  + - * / % ++ -- 

// var x = 5
// var y = 15


// prefix ++x
// postfix x++
// console.log(x--);
// console.log(x);


// assignment operators
// = += -= *= /= %=


// var x = 5;

// x += 5; // x=x+5
// x -= 5; // x=x-5
// x %= 5; // x=x*5
// console.log(x);

// logical operators

// &&((search for false))  || ((search for true)) !


// comparison operators
// > < >= <= == === != !==

// var x = "5"

// x == 5

// 1 != "1"  //false

// 1 !== "1" //true

// var x = Number(prompt("please enter a number"))



// if - switch  //conditional statements

// if (x > 5) {
//     console.log("greater");
// } else if (x > 0) {
//     console.log("positive");
// } else {
//     console.log("negative");
// }

// switch (x) {
//     case 10:
//         console.log("value is: 10");
//         break;
//     case 5:
//         console.log("value is: 5");
//         break;

//     default:
//         console.log("please try another number");
//         break;
// }


// console.log("hello from outside");

// NaN not a number


// for while dowhile  // loops
// var x;
// do {
//     console.log("hello from code block");
//     x = prompt("please a valid name")
// }
// while (x != "sayed")

// var x = prompt("please a valid name")
// while (x != "sayed") {
//     console.log("hello from code block");
//     x = prompt("please a valid name")
// }


// for loop

// i = 5

// var x = Number(prompt("enter a value"))
// var sum = 0;
// for (var i = 0; i <= x; i++) {
//     sum += i;
// }
// console.log(sum);




// ! unary operator
// + binary operator
// 


// ternary operator
// boolean?true value:false value

// var y = Number(prompt("enter a value"))

// var x = (y > 10) ? "greater" : "smaller"

// console.log(x);


// communication with user

// input ((prompt -- confirm))

// var x = confirm("do you live in Egypt")
// console.log(x);

// output ((console.log -- alert))

// if (x) {
//     // alert("you are Egyptian")

//     document.write("<h1>you are Egyptian</h1>")
// } else {
//     // alert("you are not Egyptian")
// }

// var x;
// do {
//     x = Number(prompt("please enter a valid number"));
// }
// while (isNaN(x))



// ***********************
// ********  Day2  *******
// ***********************

// Math object
// (pI sqrt sin cos tan abs pow floor ceil round random )
// tofixed



// rounding

// 10.754578742  == 11
// 10.554578742  == 11
// 10.454578742  == 10

// ceil

// 10.754578742  == 11
// 10.554578742  == 11
// 10.454578742  == 11

// floor

// 10.754578742  == 10
// 10.554578742  == 10
// 10.454578742  == 10




//functions (builtin userdefined selfinvoked returnof functions statement expression callbacks)




// ((side Effect function)) vrs ((return function))

// var userName;

// (function () {
//     userName = "menna";
// })()



// test()

// // function statemnet
// function test() {
//     console.log("hello");
// }

// test1()
// function expression
// var test1 = function () {
//     console.log("hello");
// }





// function first(x, y, z) {
//     x(y, z)
// }

// function second(first, second) {
//     console.log("sum is " + (first + second));
// }


// first(second, 5, 7)
// console.log("hello");













// function hoisting






// lexical scope

// var x = 5;
// var y = 7;

// function test() {
//     var x = 10
//     function test2() {
//         var x = 3
//         var z = 300
//         console.log(x)
//     }
//     test2()


//     console.log(x);
// }

// test()

// console.log(x);
// console.log("y outside " + y);













// array methods (push pop shift unshift slice splice reverse join)

// var names = ["manar", "ziad", "mazen", "menna"]

// console.log(names);

// var x = names.reverse()

// console.log(names);

// // string methods (charAt concat includes slice split subStr subString indexof lastindexof)

// var myStr = "helol"
// myStrSplit = myStr.split("")
// myStrSplit.reverse()
// var myNewStr = myStrSplit.join("")
// console.log(myNewStr);


// Date ((self study))


// *************************************************

// what is object

// var person1 = {
//     fName: "ahmed", //property
//     lName: "samir",
//     age: 25,
//     display: function () { //method
//         console.log("hello my name is " + this.fName + " " + this.lName);
//     }

// }


// person1.display()


// var x = "fName"

// dot and bracket notation

// console.log(person1["fName"]);

// add and delete properties

// console.log(person1);
// person1.address = "24 st 200"
// console.log(person1);
// person1.address = "0 st 200"
// console.log(person1);
// delete person1.address
// console.log(person1);


// overwrite property value


// DOM ((meaning)) document object model


// access element using ((id -- query -- queryAll -- class -- name -- tag))




// var x = document.getElementsByTagName("input")[2]




// change content ((innerHTML -- innerText -- textContent -- value))

// var myInput = document.getElementsByTagName("input")
// function getValue() {
//     console.log(myInput[0].value);
//     console.log(myInput[1].value);
// }




// console.log(myForm.innerHTML);

// console.log(myForm.innerText);
// console.log(myForm.textContent);



// change Style ((style -- className -- classList (add - remove - toggle)))

// myInput[0].style.backgroundColor = "red"
// myInput[1].style.backgroundColor = "green"


// myInput[0].className = "class3"



// function testFun() {
//     var myForm = document.getElementById("myForm")
//     myForm.classList.toggle("bg-green")
// }

// setAttribute -- getAttribute -- toggleAttribute -- removeAttribute
// createElement -- createTextNode -- createCommentNode
// appendChild -- append


// ********************************
// ************ day4 **************
// ********************************

// setAttribute -- getAttribute -- toggleAttribute -- removeAttribute
// var myInput = document.getElementsByTagName("input")[0]
// var myInput2 = document.getElementsByTagName("input")[2]
// myInput.setAttribute("placeholder", "new value")
// console.log(myInput2.getAttribute("type"));



// function testFun() {
//     var myDiv = document.getElementsByClassName("testClass")[1]
//     myDiv.removeAttribute("hidden")
// }
// createElement -- createTextNode -- createCommentNode



// function testFun() {
//     // get data from inputs
//     var userName = document.getElementsByTagName("input")[0]
//     var userEmail = document.getElementsByTagName("input")[1]
//     // create new row
//     var newRow = document.createElement("tr")
//     // create 2 cells
//     var cell1 = document.createElement("td")
//     var cell2 = document.createElement("td")
//     // insert data inside the two cells
//     cell1.innerHTML = userName.value
//     cell2.innerHTML = userEmail.value
//     // append cells to the row
//     newRow.append(cell1, cell2)
//     // append row to the table
//     myTable.append(newRow)
// }


// append




// BoM meaning  ((browser object model))


// window (open -close - move - print - resize)


// history (length - forward - back - go)




// navigator (appVersion - platform - language - cookieEnabled)



// pageOffset (scrollX , scrollY)



// setTimeout vrs setInterval

// setTimeout(function () {
//     console.log("hello");
// }, 5000)

// var myInterval = setInterval(function () {
//     console.log("hello");
// }, 2000)

// function testFun() {
//     clearInterval(myInterval)
// }




function testFun() {
    // clearInterval(myInterval)
    clearTimeout(myTimeOut)
}

