let digit = prompt("Укажите обьем вашей флешки (в Гб)"); 
digit = 1000 * Number(digit) ;
digit = Math.floor(Number(digit) / 820) ;
console.log(digit);