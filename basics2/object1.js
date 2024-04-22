const obj1 = {
    UserName : "insaneSaira",
    fullName : {
        fName : "Saira",
        lName : "Bano"
    },
    roll : 104,
    stream : "IT",
    group : "2BX"
}
// console.log(obj1.fullName.fName);


const o1 = {
    1: 101,
    2:104
}

const o2 = { 
    3: 98,
    4: 118
}

const o3 = {
    5:80,
    6:127
}


let storeTemp = {o1,o2,o3};
// console.log(storeTemp);


let temp = Object.assign({},o1,o2,o3);
// console.log(temp);
let temp1 = {...o1, ...o2,...o3}
// console.log(temp1);

const obj = {
name : "chrish hemsworth",
age : 20,
roll : 118,
1 : "Thor"
}

console.log(Object.keys(obj) );
console.log(typeof Object.values(obj) );




const data = [
    {
        user : "robert",
        clg : "Nit",
        roll : 1,
        isLoggedIn : true
    } ,

    {
        user : "patrick",
        roll : 1277745,
        isLoggedIn : false
    },
    {
        user : 1,
        roll : 12121,
        isLoggedIn : false
    }

]

// console.log(data);

// console.log(Object.keys(data));