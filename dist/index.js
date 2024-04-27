"use strict";
// let a =25;
// type FuncType =(n:number,m:number,l?:number)=>number;
// const func:FuncType=(n,m,l=69)=>{
//   return n*m*l;
// }
// console.log(func(25,23))
//rest operator
// type FuncType =(...m:number[])=>number[];
// const func:FuncType=(...m:number[])=>{
//   return m;
// }
// console.log(func(25,23,55,44,66,77))
// function normalFunction(n:number):number{
//                                            return n;
//                                         }
//normalfunction with type
// function with object
const getData = (product) => {
    console.log(product);
};
getData({ name: "string", stock: 123, price: 456, photo: "string" });
