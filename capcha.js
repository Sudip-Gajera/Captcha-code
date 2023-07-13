let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 10);

let answer = num1 + num2;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

function captch() {
    let ans = parseInt(document.getElementById("ans").value);
    console.log(typeof ans);
    if (answer == ans) {
        alert("Correct");
    } else {
        alert("Not Correct, correct ans is " + answer);
    }
    window.location.reload();
}


// let input_val = document.getElementById("input_val");
// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");

// const mybtn = document.getElementById("btn");

// num1.innerText = Math.floor(Math.random() * 100);
// num2.innerText = Math.floor(Math.random() * 100);

// let number1 = num1.innerText;
// let number2 = num2.innerText;


// mybtn.addEventListener("click", ()=>{

//     let sum = parseInt(number1) + parseInt(number2);
//     let res = parseInt(input_val.value);


//     if (res == sum){
//         alert("Correct");
//     }else{
//         alert("Not Correct");
//     }

//     window.location.reload();
// });


