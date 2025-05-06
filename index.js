// let a =10;
// let update = Math.pow(a,2);
// console.log(update);
// var b=20;
// let c = 30;
// ++c;
// console.log(c);
// // data types
// const name = "hari";
// console.log(name);
// const age = 20;
// const cont = name+ " " + age;
// const flot = 10.5;
// const isTrue = true;
// const isFalse = false;
// const n = null;
// const u = undefined;
// const pi = Math.PI;
// const e = Math.E;
// console.log(pi);
// console.log(e);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof cont);
// console.log(typeof flot);
// console.log(typeof isTrue);
// console.log(typeof isFalse);
// console.log(typeof n);
// console.log(typeof u);
// console.log(typeof pi);
// console.log(typeof e);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// const sym = Symbol('symbol');
// console.log(sym);
// console.log(n);
// console.log(u);
// console.log(isFalse);
// console.log(isTrue);
// console.log(flot);
// console.log(cont);
// console.log(a);
// console.log(b);

// // objects & nested objects
// const user = {
//     name: 'hari',
//     age: 20,
//     city: 'bangalore',
//     country: 'india',
//     bank:{
//         name: 'sbi',
//         branch: 'bangalore',
//         ifsc: 'sbi123',
//     }
// }

// console.log("Before Delete",user);
// const userage = user.age;
// console.log(user.bank.branch);
// console.log(userage);
// delete user.age;
// console.log("After Delete",user);

// // strings
// const str = 'hello world';
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0,5));
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log(str.split('o'));
// console.log(str.split('l'));
// console.log(str.split('d'));
// console.log(str.split('r'))

// // arrays
// const arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log("Reverse arr",arr.toReversed());
// console.log("Join arr",arr.join());
// console.log("Join arr",arr.join(''));
// console.log("Join arr",arr.join('-'));
// console.log("Join arr",arr.join(' '));
// console.log("Join arr",arr.join(','));
// //array methods
// arr.push(7);
// console.log("Push",arr);
// arr.unshift(0);
// console.log("Unshift",arr);
// arr.pop();  
// console.log("Pop",arr);
// arr.shift();
// console.log("Shift",arr);
// const users = [
//     {
//         id: 1,
//         name: 'hari',
//         age: 20,
//         city: 'bangalore',
//         country: 'india',
//     },
//     {
//         id: 2,
//         name: 'sai',
//         age: 21,
//         city: 'bangalore',
//         country: 'india',
//     },
//     {
//         id: 3,
//         name: 'ram',
//         age: 22,
//         city: 'bangalore',
//         country: 'india',
//     },
//     {
//         id: 4,
//         name: 'krishna',
//         age: 23,
//         city: 'bangalore',
//         country: 'india',
//     }
// ]
// console.log(users);

// // for loop
// for(let i=0;i<users.length;i++){
//     console.log("For",users[i].name);
// }


// // forEach loop
// users.forEach(function(user){
//     console.log("For Each",user.name);
// })

// //if else
// const x = 10;
// if(x == 10){
//     console.log("x is 10");
// }
// else{
//     console.log("x is not 10");
// }

// // ternary operator
// const y = 20;
// const color = y > 10 ? 'red' : 'blue';
// console.log(color);

// // switch case
// switch(color){
//     case 'red':
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is not red or blue");
//         break;
// }

// // functions
// function addNums(num1,num2){
//     return num1 + num2;
// }
// console.log(addNums(5,5));
// console.log(addNums(10,10));

// function addNums(num1,num2,num3){
//     return num1 + num2 + num3;
// }
// console.log(addNums(5,5,5));
// console.log(addNums(10,10,10));

// // arrow functions
// const addNum = (num1,num2) => num1 + num2;
// console.log(addNum(5,5));

// //api
// async function getData(){
//     try{
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getData();


function changeText() {
    document.getElementById("text").innerText = "Text has been changed!";
}

function checkAge(event) {
    event.preventDefault();
    let age = document.getElementById("age").value;
    if (age >= 18) {
        document.getElementById("result").innerText = "You are eligible to vote";
    } else {
        document.getElementById("result").innerText = "You are not eligible to vote";
    }
}

function generateTable() {
    let tableNumber = document.getElementById("tableNumber").value;
    let table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.textContent = `${tableNumber} * ${i} = ${tableNumber * i}`;
        row.appendChild(cell);
        table.appendChild(row);
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name === "") {
        alert("Name is required");
        document.getElementById("name").focus();
        return false;
    }
    if (email === "") {
        alert("Email is required");
        document.getElementById("email").focus();
        return false;
    }
    if (password === "") {
        alert("Password is required");
        document.getElementById("password").focus();
        return false;
    }
    return true;
}

async function fetchProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();
        displayProducts(products);
    } catch (err) {
        console.error(err);
    }
}

function displayProducts(products) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" width="100">
        `;
        productsDiv.appendChild(productDiv);
    });
}