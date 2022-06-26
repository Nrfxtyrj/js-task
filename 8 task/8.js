let chocolate = prompt("Укажите цену шоколадки"); 
let money = prompt("Укажите ваш бюджет"); 
let quantity = Math.floor(Number(money )/Number(chocolate)) ;
let remains = Math.floor(Number(money )%Number(chocolate)) ;
console.log('Количество шоколадок:'+String(quantity));
console.log('Сдача:'+String(remains));