const testString = 'abc'
const testObject = {
  one: 2,
  abc: 'lll',
  three: 'cba'
}

function checkPropInObj(str, obj) {
  return (str in obj);
}

console.log(checkPropInObj(testString, testObject));

// true