var random = document.querySelector(".btn__new");
var arr = [];
for(var i=0; i<13; i++){
    arr.push(Math.floor(Math.random() * 100));
}
var temp;
let speed = document.querySelector('#speed');
arrayLength = arr.length



function newArray(){
    deleteChild();
    //random array
    arr=[];
    let size = document.querySelector('#size');
    arrayLength = size.value;
    for(var i=0; i<arrayLength; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr)
    display()

}

const main = document.querySelector(".main")

function display(){
for (i = 0; i < arrayLength; i++) {
    const bar = document.createElement("div");
    bar.classList.add('bar');
    bar.style.height = arr[i]*0.6 +'vh';
    main.appendChild(bar);
}
}
display();

random.addEventListener("click",()=>{
    newArray();
    playSound();
    // console.log(arr);
})

function deleteChild() {
    const main = document.querySelector(".main");
    main.innerHTML = '';
}

//slides


let playSound = () => new Audio("./assets/button.mp3").play()