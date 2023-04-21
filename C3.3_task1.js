const generalObj = {
    one: '1-Главный объект',
    two: '2-Главный объект',
    three: '3-Главный объект'
}

const onwObj = Object.create(generalObj);
    onwObj.ownOne = '1-Собственный объект';
    onwObj.ownTwo = '2-Собственный объект';
    onwObj.ownThree = '3-Собственный объект';

// --------------------------------
// Как вариант

for (const [key, value] of Object.entries(onwObj)) {
    console.log(`${key} ${value}`);
}
// ----------------------------------

function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

// function printObject (obj) {
//     for (let prop in obj) {
//         console.log(prop, obj[prop]);
//     }
// }

printObject(onwObj);