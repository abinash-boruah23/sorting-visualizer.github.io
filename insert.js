const insert = document.querySelector(".btn__insert");

insert.addEventListener('click',async function(){
    playSound();
    random.disabled=true;
    select.disabled=true;
    insert.disabled=true;
    bubble.disabled=true;
    await isort();
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


async function isort(){
    for (let i = 0; i < arrayLength; i++) {
        for(let j = i-1; j>-1; j--){
            x[j].style.backgroundColor = '#512888'
            if(arr[j + 1] < arr[j]){
                await waitforme(175 - speed.value);
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
                deleteChild();
                display();
            }
            x[j].style.backgroundColor = 'white'

        }
    }
}