function add (a:number,b:number):number{
  return a+b;
}

console.log(add(1,2));



let username:string="John Doe";
console.log(username);
// username=9
// console.log("this error",username);
let age:number=30;
console.log(age);

let isStudent:boolean=true;
console.log(isStudent);



let numbers:number[]=[1,2,3,4]
console.log(numbers);
let a:any[]=[1,"two",true]
console.log(a)

let contact:[string,number]=["sleem hashem",20]
console.log(contact)

function mult(a:number,b:number):void{
  console.log(a*b);
}

mult(5,6)


function greet(name:string,tile?:string):string{
  return `Hello ${tile} ${name}`;
}

console.log(greet("John"))



interface User{
name:string,
age:number,
isStudent:boolean
}

let user:User={
  name:"mostafa",
  age:20,
  isStudent:true
}

console.log(user)

type user ={
  name:string,
  age:number,
  isStudent:boolean
}

type id=number|string

let userId:id=123;
console.log(userId);
userId="abc123";
console.log(userId)

type status="active"|"inactive"|"pending"

let userStatus:status="active";
console.log(userStatus)

let us:unknown="hello";//unknown and any
if(typeof us =="string"){
  console.log(us.length);
}

us=42;
console.log(us);