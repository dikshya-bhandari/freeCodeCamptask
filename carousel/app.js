const reviews =[
    {
        id:1,
        name:"dikshya bhandari",
        job:"web developer",
        img: "./image/a.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta magni ipsum mollitia optio odio tempora sit voluptatum nisi sapiente atque, laboriosam unde culpa adipisci facilis provident illum, modi incidunt!",
    },

    {
        id:2,
        name:"dikshya bhandari",
        job:"web developer",
        img: "./image/b.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta magni ipsum mollitia optio odio tempora sit voluptatum nisi sapiente atque, laboriosam unde culpa adipisci facilis provident illum, modi incidunt!",
    },

    {
        id:3,
        name:"dikshya bhandari",
        job:"web developer",
        img: "./image/c.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta magni ipsum mollitia optio odio tempora sit voluptatum nisi sapiente atque, laboriosam unde culpa adipisci facilis provident illum, modi incidunt!",
    },

    {
        id:4,
        name:"dikshya bhandari",
        job:"web developer",
        img: "./image/d.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta magni ipsum mollitia optio odio tempora sit voluptatum nisi sapiente atque, laboriosam unde culpa adipisci facilis provident illum, modi incidunt!",
    },

    {
        id:5,
        name:"dikshya bhandari",
        job:"web developer",
        img: "./image/e.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta magni ipsum mollitia optio odio tempora sit voluptatum nisi sapiente atque, laboriosam unde culpa adipisci facilis provident illum, modi incidunt!",
    },
]

const img  = document.getElementById("person-img");
const author  = document.getElementById("author");
const job  = document.getElementById("job");
const info =document.getElementById("info");

const prevBtn  = document.getElementById(".prev-btn");
const nextBtn  = document.getElementById(".next-btn");
const randomBtn  = document.getElementById(".random-btn");


let currentItem = 0;

//load initial item
// window.addEventListener("DOMContentLoaded" , function(){
//     console.log("shake and bake");
// });

if( document.readyState !== 'loading' ) {
    console.log( 'shake and bake' );
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('shake and bake' );
    });
}