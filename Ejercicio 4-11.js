
//Ejercicio 4.11

var ncol = prompt("Cuantos cuadraditos quieres?");
var alto = prompt("Cuan de alto quieres los cuadraditos?");
var ancho = prompt("Cuan de ancho quieres los cuadraditos?");

document.write('<table border ="1" cellspacing = "2" bgcolor = "white" width = "' + ancho*ncol + '">');
document.write('<tr bgcolor = "white" height = "' + alto + '">');

for(a = 0; a < ncol; a++){

    document.write('<td width= "' + ancho + '"> &nbsp; </td>');

}

document.write('</tr> </table>');

