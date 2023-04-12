alert("Hello, World!");

let formatted = true;
if(formatted) {
    console.log ('JavaScript so de qua ma!!!');
}
let message = "Welcome to my website";
console.log(message)

if (window.localStorage)

//Data Type
let counter = 100; //Counter is a number
console.log(typeof(counter));

counter = false; //boolean
console.log(typeof(counter));

counter ="aptech"; //string
console.log(typeof(counter));

let date;
console.log(data);
console.log(typeof(data)); //undefined -> ko xd kieu du lieu

//object data type
let object = null;
console.log(typeofobject); //object

//...
let num = 100;
let price = 20.2;
let discount = 0.05;
//Check Min and Max Number In JavaScript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE)
//NaN: Not a Number
console.log('T'/2);//NaN
console.log('NaN'/2);//NaN

//Ket hop String '+'
let str = 'Java';
str = str + 'Script';
console.log(str);

//String
let s = 'JavaScript';
s[4] = 's'
console.log(s)

//Boolean
console.log(Boolean('connect'));//true
console.log(Boolean(''));//false

//Object type
let studenObject = {};
console.log(typeof(studenObject));

//Khai bao doi tuong: employee
//Khai bao thuoc tinh cua object: firstName, lastName
let employee = {
    firstName : 'Nguyen',
    lastName : 'Phu Trong'
};

//Truy cap thuoc tinh cua doi tuong: object,property
console.log(employee.firstName);
console.log(employee.lastName);

//Contact details
let contact ={
    firstName: 'Nguyen',
    lastName: 'Minh Chinh',
    email: 'chinh@gmail.com',
    phone: '0912222222',
    address : (
        building: '1000',
        street : 'HBT',
        city : 'Hue',
        country: 'VN'
             )
    }

//De truy cap vao thuoc tinh(propery) cua doi tuong(object)
//su dung . or []: contact.firstName or contact ['firstName']

console.log(contact('ago'));
contact.age = 25;
//delete property 
delete contact.email;
contact.firstName ='Ngo';
console.log(contact);
//Checking if a property exists?
//properyName in objectName
let student = {
    firstName : 'Dao',
    lastName : 'Hai',
    studentid : 100
}
console.log('age' in student);//false
console.log('studentid' in student);//true

