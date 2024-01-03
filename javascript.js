let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('pizza.png.jpeg')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('bombay-style-sandwich-indian-fusion-260nw-771340708.webp')";
})