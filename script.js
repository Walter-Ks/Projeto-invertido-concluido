


const calcular = document.getElementById('calcular');



function btProximo() {
    let bt = document.getElementsByClassName('bt')
    for(let i = 0; i < bt.length; i++){
    bt[i].innerHTML =  '<button id = "prox" onclick = "prox()">Proximo</button>'
   }
}

function prox() {
    let bt = document.getElementsByClassName('infoBox');
    bt[0].style.display = 'block'

}
function enter2() {
    let bt = document.getElementsByClassName('infoBox');
    bt[1].style.display = 'block'

}
function enter3() {
    let bt = document.getElementsByClassName('infoBox');
    bt[2].style.display = 'block'

}


function btEntrar() {
   let entra = document.getElementById('entrar');
   let btEntrar = document.getElementById('btEntrar');
   entra.style.backgroundColor = 'red';
   entra.style.color = 'white'
   let interFace = document.getElementById('container') 
   setTimeout(function(){
   btEntrar.style.display = 'none';
   interFace.style.display = 'block'},300)
}



function enter4() {
    let bt = document.getElementsByClassName('infoBox');
     bt[3].style.display = 'block'
     input1 = document.getElementById('inp1').value;
     input2 = document.getElementById('inp2').value;
     input3 = document.getElementById('inp3').value;
     resultado = document.getElementById('resultado')

    

    if(input1 !== '' && input2 !== '' && input3 !== ''){
    const conta = (((input2 - input1) / input3) / 0.01747).toFixed(2);

    resultado.textContent = conta;
    }else{
       
        resultado.innerHTML = "<h4>Opsss, faltou informação :|</h4>"
    }

}
function calculando() {
    let bt = document.getElementsByClassName('infoBox');
     bt[3].style.display = 'block'
     input1 = document.getElementById('inp1').value;
     input2 = document.getElementById('inp2').value;
     input3 = document.getElementById('inp3').value;
     resultado = document.getElementById('resultado')

    

    if(input1 !== '' && input2 !== '' && input3 !== ''){
    const conta = (((input2 - input1) / input3) / 0.01747).toFixed(2);

    resultado.textContent = conta;
    }else{
       
        resultado.innerHTML = "<h4>Opsss, faltou informação :|</h4>"
    }

}

function op1(){
    const caixa = document.getElementById('check');
    caixa.innerHTML = '<h4>O resultado da conta deve ser posto como NEGATIVO no ajuste</h4><video width="80" height="100" autoplay loop><source src="img/2.mp4" type="video/mp4">'
}

function op2(){
    const caixa = document.getElementById('check');
    caixa.innerHTML = '<h4>O resultado da conta deve ser posto como POSITIVO no ajuste</h4><video width="80" height="100" autoplay loop><source src="img/1.mp4" type="video/mp4">';
}

function op3(){
    const caixa = document.getElementById('check');
    caixa.innerHTML = '<h4>O resultado da conta deve ser posto como NEGATIVO no ajuste</h4><video width="80" height="100" autoplay loop><source src="img/2.mp4" type="video/mp4">'
    
}
function op4(){
    const caixa = document.getElementById('check');
    caixa.innerHTML = '<h4>O resultado da conta deve ser posto como POSITIVO no ajuste</h4><video width="80" height="100" autoplay loop><source src="img/1.mp4" type="video/mp4">'
    
}




calcular.addEventListener('click',calculando);

