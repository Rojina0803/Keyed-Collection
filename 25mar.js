// // document.write("Keyed Collection");
// //Keyed Collection -->collections of data which are indexed by a key; Map and Set.


// //Map Object --> can iterate its elements in insertion order.
//  const novels= new Map();
//  novels.set("Variety","Atomic Habits");
//  novels.set("Lolita","Little Women");
//  novels.set("In Cold blood","A Tale of two cities");

// console.log( novels.size);// size 

// console.log( novels.get("Lolita")); //
// console.log( novels.get("Don Quixote"))

// console.log( novels.has("Variety")) // Returns True or False
// console.log( novels.has("Quran"))
 
//  novels.delete("Little Women"); //Deletes "Little Women"
//  novels.has("Little Women");

// for(const[key,value] in novels){
//     console.log(`${key} and ${value}`);
// }
// console.log(novels);
// console.log(novels.get("Quran"))
// console.log(novels.get("In Cold blood"));

// novels.clear(); 
// novels.size;
// console.log(novels);


// //Weakmap  --> used to store private date for an object

// const privates= new WeakMap();
// function public(){
//     const me={
//         name:"Bilan",
//         surname:"Bilal",
//         category:"Confidential",
//         address:"Tazikstan"

//     }
//     privates.set(this,me);
// }

// public.prototype.method = function () {
//     const me = privates.get(this);
  
//   };
// module.exports = public;


//SET ==> stores unique value
// Set object --> collections of unique values.

const myset= new Set();

myset.add(1);
myset.add("Home");
myset.add("foo");

myset.has(1);
myset.has("Chattaa");

myset.delete("foo")
myset.add("goggly");
myset.add(1); //A value in a Set can only occur once; it is unique in the Set's collection.

for (const item of myset) {
    console.log(item);
  }

console.log(Array.from(myset)); // array from a set

//Weak Set object

const ws = new WeakSet();
const foo = {
    name:"Space",
    func:"hold",
    mirror:"mine"

};
const bar = {
    class:"private",
    grade:"SSS",
    danger:"high"
};

const range={
    score:"678",
    highest_score:"700",
    lowest_score:"300"
}

ws.add(foo);
ws.add(bar);
ws.add(range)
console.log(ws)

console.log(ws.has(foo)); 
console.log(ws.has(bar)); 

ws.delete(foo); 
console.log(ws.has(foo)); 
console.log(ws.has(bar));

console.log(ws);

//Key and value equality of Map and Set
//Equality works like the identity comparison operator ===.
//-0 and +0 are considered equal.
//NaN is considered equal to itself (contrary to ===).


