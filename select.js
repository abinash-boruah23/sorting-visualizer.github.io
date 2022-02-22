const select = document.querySelector(".btn__select");

select.addEventListener('click',async function(){
    playSound();
    await ssort();
    deleteChild();
    display();
    for( var q = 0; q< arrayLength;q++){
        x[q].style.backgroundColor = 'rgb(255, 206, 223)'
    }
})

async function ssort(){
    let min
    for (let i = 0; i < arrayLength; i++) {
        min = i;
        x[i].style.backgroundColor = '#512888'

        for(let j = i+1; j<arrayLength; j++){
            x[j].style.backgroundColor = '#A94064'
            await waitforme(175 - speed.value);
            x[j].style.backgroundColor = 'white'
           if(arr[j]<arr[min]){
            min = j;
            x[min].style.backgroundColor = '#A94064'
           }
        }



        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];

            deleteChild();
            display();
      }
    }
}