// function add (a:number,b:number):number{
//   return a+b;
// }

// console.log(add(1,2));



// let username:string="John Doe";
// console.log(username);
// // username=9
// // console.log("this error",username);
// let age:number=30;
// console.log(age);

// let isStudent:boolean=true;
// console.log(isStudent);



// let numbers:number[]=[1,2,3,4]
// console.log(numbers);
// let a:any[]=[1,"two",true]
// console.log(a)

// let contact:[string,number]=["sleem hashem",20]
// console.log(contact)

// function mult(a:number,b:number):void{
//   console.log(a*b);
// }

// mult(5,6)


// function greet(name:string,tile?:string):string{
//   return `Hello ${tile} ${name}`;
// }

// console.log(greet("John"))



// interface User{
// name:string,
// age:number,
// isStudent:boolean
// }

// let user:User={
//   name:"mostafa",
//   age:20,
//   isStudent:true
// }

// console.log(user)

// type user ={
//   name:string,
//   age:number,
//   isStudent:boolean
// }

// type id=number|string

// let userId:id=123;
// console.log(userId);
// userId="abc123";
// console.log(userId)

// type status="active"|"inactive"|"pending"

// let userStatus:status="active";
// console.log(userStatus)

// let us:unknown="hello";//unknown and any
// if(typeof us =="string"){
//   console.log(us.length);
// }

// us=42;
// console.log(us);


//session 2

let value:string | number;
value="hello";
console.log(value);

value=42;
console.log(value);
value=true
console.log(value)


// function print(value:string|number):void{
//   console.log(value.toUpperCase());
// }


// print("hello");
// print(42)

let arr:(number|string)[]=[1,"two",3,"four"];
console.log(arr);

let status:"loading"|"success"|"error"

status="loading";
status='pending';
console.log(status);


type person={
  name:string,
}
type employee={
  age:number,
}

type worker=person&employee

let worker1:worker={
  name:"mostafa",
  age:20
}
console.log(worker1);


// let name:string& number;
// name="mostafa";
// console.log(name);

// type admin=emplyee &{
//   role:string
// }


function print(value:string|number):void{
  if(typeof value ==="string"){
    console.log(value.toUpperCase());
  }else{
    console.log(value.toFixed(2));
  }
}

print("hello");
print(42);




// function fail(message:string):never{
//   throw new Error(message);
// }

// fail("Something went wrong");


// function Gvalue(value:string):string{
//   return value;
// }

// console.log(Gvalue("Hello, TypeScript!"));

function Gvalue<K>(value:K):K{
  return value;
}

console.log(Gvalue<string>("Hello, TypeScript!"));
console.log(Gvalue<number>(42));


// function item<k>(arr:k[]):k[]{
//   return arr;
// }

// console.log(item<number>([1,2,3]));
// console.log(item<string>(["a","b","c"]));

function any<T,K>(a:T,b:K):void{
  console.log(a,b);
}

// any<string,number>(42,"Hello");

interface api<t>{
  data:t,
  status:number,
  message:string
}

let response:api<string>={
  data:"Hello, World!",
  status:200,
  message:"Success"
}

console.log(response);



function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
  return obj[key];
}

const person={
  name:"mostafa",
  age:20
}

console.log(getProperty(person,"name"));
console.log(getProperty(person,"age"));

type user={

  name:string,
  age:number,

}

type partialUser=Partial<user>

let user1:user={
  name:"mostafa",
  age:20
}
console.log(user1);

let user2:partialUser={
  name:"mostafa"
}

console.log(user2);


type u={
  name:string,
  age:number,
  isStudent:boolean
}

type userPick=Pick<u,"name"|"age">

let user3:userPick={
  name:"mostafa",
  age:20,
  // isStudent:true
}
console.log(user3);

type userOmit=Omit<u,"isStudent">

let user4:userOmit={
  name:"mostafa",
  age:20,
  isStudent:true
}
console.log(user4);