const colors  = ["green" , "red" , "rgba(133 , 122, 200)" , "#f15025"];
const btn  = document.getElementById("button");
const color  = document.querySelector(".color");

// btn.addEventListener("click" , function(){
//     console.log(document.body);
// })

function changeMe(){
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}