function update(){
    let respuestainput = document.getElementById("name");
    let respuesta = respuestainput.value;
    let numero1imput = document.getElementById("number1");
    let numero1 = parseInt(numero1imput.value,10);
    let numero2input = document.getElementById("number2");
    let numero2 = parseInt(numero2input.value,10);
    let resultP = document.getElementById("result1")
    let result1;
    let result2;
    let result3;

    function suma(numero1, numero2){
        return numero1 + numero2;
        }
    result1 = `<p id="parrafo1">Hola <b>${respuesta}</b>: <br>
    la suma de tus numeros (${numero1}, ${numero2}) es igual 
    ${suma(numero1 , numero2 )} <br></p>`;
    resultP.innerHTML = result1
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        else return n * factorial(n - 1);
    }

    //document.write("result",`<p class="factorial">El factorial de ${numero1} es <b>${factorial(numero1)}</b> <br></p>`);
    //document.write("result",`<p class="factorial">El FACTORIAL de ${numero2} es <b>${factorial(numero2)}</b></p>`);

}
