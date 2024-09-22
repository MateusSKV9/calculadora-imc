//REDIMENCIONAR
if(window.innerWidth>=626) {
    let menu = document.getElementById('header-nav');
    menu.style.display = 'flex';
}

//MENU HAMBÚRGUER
function abrirMenu() {
    let menu = document.getElementById('header-nav');

    menu.classList.toggle('oculto');
}
let btnMenu = document.getElementById('btnMenu');
btnMenu.addEventListener('click', abrirMenu);

//CALCULAR IMC
function calcularIMC() {
    let inPeso = document.getElementById('inPeso');
    let inAltura = document.getElementById('inAltura');
    let outExibirIMC = document.getElementById('outExibirIMC');

    let peso = Number(inPeso.value);
    let altura = Number(inAltura.value);

    inPeso.value = '';
    inAltura.value = '';
    outExibirIMC.textContent = '';

    if(peso=='' || altura=='') {
        if(peso<=0 || altura<=0) {
            alert('[ERRO]: Digite valores positivos.');
            inPeso.focus();
            return;
        }

        alert('Preencha corretamente os campos.');
        inPeso.focus();
        return;
    }

    let imc = peso/(Math.pow(altura, 2));
    let classificacao = '';

    if(imc<18.5) {
        classificacao = 'Abaixo do peso';
    } else if(imc>=18.5 && imc<24.9) {
        classificacao = 'Peso normal';
    } else if(imc>=25 && imc<29.9) {
        classificacao = 'Sobrepeso';
    } else if(imc>=30 && imc<34.9) {
        classificacao = 'obesidade grau I';
    } else if(imc>=35 && imc<39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III (obesidade mórbida)';
    }

    outExibirIMC.textContent = `➡️Resultado: ${classificacao}`;
}
let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularIMC);