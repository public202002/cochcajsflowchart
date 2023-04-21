//https://github.com/dscape/clarinet/blob/master/example.js
//var clarinet = require("clarinet")
var numSpaces = 0
function spaces (){return "".padStart(numSpaces)}
function addSpaces(){numSpaces = numSpaces + 4}
function removeSpaces(){numSpaces = numSpaces - 4}
var parser = clarinet.parser();
parser.onvalue = function (v) {
  console.log(spaces() + "    " + "Value: " + v);
};
parser.onkey = function (key) {
  console.log(spaces() + "Key: " + key);
};
parser.onopenobject = function (key) {
    addSpaces()
  console.log(spaces() + "New Object, first key: " + key);
}
parser.oncloseobject = function () {
  console.log(spaces() + "Close Object");
  removeSpaces()
}
parser.onopenarray = function () {
    addSpaces()
  console.log(spaces() + "New Array");
}
parser.onclosearray = function () {
  console.log(spaces() + "Close Array");
  removeSpaces()
}
parser.onend = function () {
  console.log(spaces() + 'End');
}

parser
  .write('{ "firstName": "John", "lastName": ')
  .write('"Smith", "age" : 25, "address" : { ')
  .write('"streetAddress": "21 2nd Street", "')
  .write('city" : "New York", "state" : "NY",')
  .write('"postalCode" : "10021" }, "phoneNum')
  .write('ber": [ { "type" : "home", "number"')
  .write(': "212 555-1234" }, { "type" : "fax')
  .write('", "number": "646 555-4567" } ] }')
  .close();