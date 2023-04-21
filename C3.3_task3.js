function objNoProto() {
    return Object.create(null);
}

console.log(objNoProto());

// -----------------------------------

const objNoProto1 = function() {
    return Object.create(null);}
    console.log(objNoProto1());

// ---------------------------------------

const objNoProto2 = Object.create(null);
console.log(objNoProto2);

// -------------------------------------------

const objNoProto3 =()=> {return Object.create(null)}
console.log(objNoProto3());