//CODIGO DEL CUADRADO
console.group("Grupo de cuadrado");

//La funcion recibe parametros
function perimetroCuadrado(lado){
    return lado*4;
}
//console.log(`El perimetro del cuadrado es  ${perimetroCuadrado}cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
//Prametros: Lo que debe recibir la funcion
//Argumentos: El valor que se le manda a la funcion
function areaCuadrado (lado){
    return lado * lado;
    
}

//CODIGO DEL Tringulo
//Funcion para calcular el perimetro de un triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

//Funcion para calcular el area del un triangulo
function areaTriangulo (base, altura){
    return base * altura /2;
}

// console.group("Grupo de Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5;

// console.log(`Los lados del triangulo son ${lado1}cm,${lado2}cm, ${base}cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perimtro del triangulo es ${perimetroTriangulo}cm`);
// const areTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log(`El area del triangulo es ${areTriangulo}cm`);
console.groupEnd()

//Interactuando con JS
function perimetroC(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function areaC(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}