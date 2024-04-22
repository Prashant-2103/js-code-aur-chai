function cartValueAdd(num1,num2){
    console.log({num1, num2})
}
// cartValueAdd(999,299);

/////lets assume we don't know how many paraM will be coming to add ... so we just use (...)Rest operator/spread operator

function cartCalculation(...nums) {
  return nums;
    
}


const allValues = cartCalculation(199,299,399,499,599,699,799,899,999);
// console.log((typeof cartCalculation));
// console.log((typeof allValues));
// console.log(allValues);


////////function with objects and array
const names = {
    user : "Nikita",
    city : "kolkata",
    loaction : "baranagar",
    state : "kolkata",
    countary : "INDIA"

}


function takesObject(getObj){
    return getObj;
}
console.log((takesObject(names.loaction)));

////////function with arrays

const newArr = [101,99,104,127,true,"JS"]

function takesArray(getArr){
    return getArr
}

console.log(takesArray(newArr))


////////+++++++++++++++access the notes of chai with github repo or vid again 