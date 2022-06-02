//CODIGO DEL CUADRADO
console.group("Grupo de cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es  ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El perimetro del cuadrado es  ${areaCuadrado}cm`);
console.groupEnd();

//CODIGO DEL CUADRADO
console.group("Grupo de Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log(`Los lados del triangulo son ${ladoTriangulo1}cm,${ladoTriangulo2}cm, ${baseTriangulo}cm, ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimtro del triangulo es ${perimetroTriangulo}cm`);
const areTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El area del triangulo es ${areTriangulo}cm`);
console.groupEnd()