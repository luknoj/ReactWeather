var names = ['Kamil', 'Karolina', 'Adam'];
/*
names.forEach(function(name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrow fun', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Lukas'));
*/
// var person = {
//     name: 'Lukas',
//     greet: function(){
//         names.forEach((name) => {
//             console.log(this.name + " say hi to" + name)
//         });
//     }
// };

// person.greet();


var addStatement = (a, b ) => {
    return a + b;
}

var addExpresion = (a,b) => (console.log(a+b));

console.log(addStatement(1,3));
addExpresion(8,9);