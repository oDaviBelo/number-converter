let button = document.querySelector('#button') as HTMLButtonElement;
let input = document.querySelector('.input') as HTMLInputElement;
let resul = document.querySelector(".binres") as any;
let opt = document.querySelector('select');

button.addEventListener('click', ()=>{
    input.innerHTML = ''
    converter()
});

function converter(){
    let dec = +input.value;

    if(opt?.value === 'dtob'){
        if(isNaN(dec)){
            alert("Type a number")
        } else{
            resul.innerHTML = '';
            let bin = dec.toString(2);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`; 
        }
    } else if(opt?.value === 'dtoo'){
        if(isNaN(dec)){
            alert("Type a number")
        } else{
            resul.innerHTML = '';
            let bin = dec.toString(8);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`; 
        }
    } else if(opt?.value === 'dtoh'){
        if(isNaN(dec)){
            alert("Type a number")
        } else{
            resul.innerHTML = '';
            let bin = dec.toString(16);
            let trans = bin.toString();
            resul.innerHTML += ` ${trans}`; 
        }
    }
    
}