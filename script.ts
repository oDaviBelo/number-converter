let button = document.querySelector('#button') as HTMLButtonElement;
let input = document.querySelector('.input') as HTMLInputElement;
let resul = document.querySelector(".binres") as any;
let opt = document.querySelector('select');


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
    else if(opt?.value === 'btod'){

        let num = input.value;
        let arrSort = Array.from(num);

        arrSort.map((x)=>{
            if(x === '2' ||x === '3' ||x === '4' ||x === '5' ||x === '6' ||x === '7' ||x === '8' ||x === '9'){
                resul.innerHTML = `Digite Somente 0 e 1`

            }
            else{
                if(isNaN(+num)){
                    input.value = ''
                    alert(`Digite apenas (0,1)`)
                }else{  
                    bin()
                }
            }
        })
       
        function bin(){
            
            var arr = arrSort.slice(0).reverse();
            let newArr = [];
            let sum = 0;
            for(let i = 0; i <= arr.length; i++){ 
                let newNum = +arr[i];
                let pow = Math.pow(2,i);
                if(isNaN(newNum)){
        
                }else{
                resul.innerHTML = '';
                    let calc = newNum*pow;
                    newArr[i] = calc
                    sum += newArr[i];   
                    resul.innerHTML += `${sum}`
                }
            }
        }
    }
}

button.addEventListener('click', ()=>{
    input.innerHTML = ''
    converter()
});


