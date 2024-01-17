let respuesta; 
respuesta = prompt("Como te llamas:");
let numero1 = parseInt(prompt("dime un numero"),10);
let numero2 = parseInt(prompt("dime otro numero"),10);

function suma(numero1, numero2){
    return numero1 + numero2;
}

document.write(`<p id="parrafo1">Hola <b>${respuesta}</b>: <br>
la suma de tus numeros (${numero1}, ${numero2}) es igual 
${suma(numero1 , numero2 )} <br></p>`)

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
  }

document.write(`<p class="factorial">El factorial de ${numero1} es <b>${factorial(numero1)}</b> <br></p>`);
document.write(`<p class="factorial">El FACTORIAL de ${numero2} es <b>${factorial(numero2)}</b></p>`);
