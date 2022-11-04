function soma () {
var area = 0;
var acumulo = 0;
var parar = "s"
while (parar == "s") {
    var comodo = prompt("Digite o nome do cômodo desejado: ");
    var largura = parseFloat(prompt("Digite a largura do cômodo em m2: "));
    var comprimento = parseFloat(prompt("Digite o valor do comprimento do  cômodo em m2: "));
    var area = largura * comprimento;
    var acumulo = acumulo + area
    var parar = prompt("Deseja acrescentar calcular a área de mais cômodos?  (s/n):  ");
   
}
document.write("O valor total acumulado da area em m2 foi de" + acumulo)
}