const bubble = document.querySelector(".btn__bubble");
const x = document.getElementsByClassName("bar");

bubble.addEventListener('click',async function(){
    playSound();
    random.disabled=true;
    select.disabled=true;
    insert.disabled=true;
    bubble.disabled=true;
    await bsort();
    deleteChild();
    display();
    for( var q = 0; q< arrayLength;q++){
        x[q].style.backgroundColor = 'rgb(255, 206, 223)'
    }
    random.disabled=false;
    select.disabled=false;
    insert.disabled=false;
    bubble.disabled=false;
})

async function bsort(){
    for (let i = 0; i < arrayLength; i++) {
        for(let j=0; j < (arrayLength-i-1); j++){
            x[j].style.backgroundColor = '#8655ad'
            x[j+1].style.backgroundColor = '#512888'
            if(arr[j]>arr[j+1]){
                await waitforme(175 - speed.value);
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]=temp;
                console.log(arr)
                deleteChild();
                display();
            }
            x[j].style.backgroundColor = 'white'
            x[j+1].style.backgroundColor = 'white'
        }
    }
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}