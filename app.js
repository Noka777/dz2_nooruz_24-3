var starbucks = {
     cofee: {
         capuchino: 'это кофе,который состоит из эспрессо, молока, молочной пены',
         mokko: 'это сорт кофе вида арабика ',
         arabika:false
     },

     tea: {
         ceilon: 'черный',
         kenyan: 'зеленый',
     }
};
var starbucks = prompt('Введите название кофе или чая')
switch (starbucks){
    case 'capuchino':
    case 'mokko':
    case 'ceilon':
    case 'kenyan':
    console.log('принять заказ')
        break;
    case 'arabika':
        console.log('нет в наличии')
        break
    default:
        console.log(error)
}