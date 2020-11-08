
//Ejercicio 4.12

var ncol = prompt("Cuantos cuadraditos quieres?");
var alto = prompt("Cuan de alto quieres los cuadradiwatos?");
var ancho = prompt("Cuan de ancho quieres los cuadraditos?");
var color = "black";

document.write('<table border ="0" cellspacing = "2" bgcolor = "black" width = "' + ancho*ncol + '">');
document.write('<tr height = "' + alto + '">');


for(a = 0; a <= (ncol/2)-1; a++){

    
        document.write('<td width= "' + ancho + '" bgcolor ="black"> &nbsp; </td>');
    
        document.write('<td width= "' + ancho + '" bgcolor ="white"> &nbsp; </td>');
    
   
}
if(ncol %2){
    document.write('<td width= "' + ancho + '" bgcolor ="black"> &nbsp; </td>');
}


document.write('</tr> </table>');

