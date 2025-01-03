//declaring all of the buttons as variables 

let button_0 = document.querySelector('#zero');
let button_1 = document.querySelector('#one');
let button_2 = document.querySelector('#two');
let button_3 = document.querySelector('#three');
let button_4 = document.querySelector('#four');
let button_5 = document.querySelector('#five');
let button_6 = document.querySelector('#six');
let button_7 = document.querySelector('#seven');
let button_8 = document.querySelector('#eight');
let button_9 = document.querySelector('#nine');
let subtract = document.querySelector('#subtract');
let add = document.querySelector('#add');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let clear = document.querySelector("#clear");
let screen = document.querySelector(".screen");
let enter = document.querySelector("#enter");


//declaring temp variables for value 1 and value two of the mathmatical calculation
let value1;
let value2;

//declaring variable for operator choice
let operator;



//adding in event listeners to all buttons 
button_0.addEventListener('click', ()=> {
    let old = screen.value;
    screen.value = old + button_0.textContent;
})

button_1.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_1.textContent;
})

button_2.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_2.textContent;
})

button_3.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_3.textContent;
})

button_4.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_4.textContent;
})

button_5.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_5.textContent;
})

button_6.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_6.textContent;
})

button_7.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_7.textContent;
})

button_8.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_8.textContent;
})

button_9.addEventListener('click', ()=>{
    let old = screen.value;
    screen.value = old + button_9.textContent;
})



subtract.addEventListener('click', ()=>{
    let old = screen.value;
    let value1 = old;
    if(operator != ''){
        alert("you can only do one operation at a time");
        return;
    }
    operator ="-";
    screen.value = old + subtract.textContent;

})

add.addEventListener('click', ()=>{
    let old = screen.value;
    let value1 = old;
    if(operator != ''){
        alert("you can only do one operation at a time");
        return;
    }
    operator ="+";
    screen.value = old + add.textContent;
})

multiply.addEventListener('click', ()=>{
    let old = screen.value;
    let value1 = old;
    if(operator != ''){
        alert("you can only do one operation at a time");
        return;
    }
    operator ="*";
    screen.value = old + multiply.textContent;
})

divide.addEventListener('click', ()=>{
    let old = screen.value;
    let value1 = old;
    if(operator != ''){
        alert("you can only do one operation at a time");
        return;
    }
    operator ="/";
    screen.value = old + divide.textContent;
})

clear.addEventListener('click', ()=>{
    screen.value = '';
    operator = '';
})

document.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter'){
        solve();
    }
})

enter.addEventListener('click', ()=>{

    
    solve();



})



function solve(){
    let str = screen.value;
    let charIndex = str.indexOf(operator);
    console.log(charIndex);

    value1 = str.slice(0, charIndex);
    value2 = str.slice(charIndex + 1);

   switch (operator) {

    case '*':
            screen.value = value1*value2;
    break;

    case '+':
            screen.value = Number(value1)+Number(value2);
    break;

    case '-':
            screen.value = value1-value2;
    break;

    case '/':
        if(value2 == 0){
            alert("you can't divide by zero, what are you trying to do?!");
            return;
        }
        else{
            screen.value = value1/value2;
        }
    break;


   }

   operator = '';
}