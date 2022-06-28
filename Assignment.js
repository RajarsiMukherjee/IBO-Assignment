//You have been given a list of products which is having property productName, quantity and description.
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];

// PROBLEM STATEMENTS:

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.
// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

//Sol 1:

function getUniqueProductCount(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if (A[i]["productName"] in obj) {
            obj[A[i]["productName"]]++;
        } else {
            obj[A[i]["productName"]] = 1;
        }
    }
    return obj;
}
let productList = getUniqueProductCount(listOfProducts);
console.log(productList)

// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

//Sol 2:

function getProductCount(listOfProducts){
    let ans = []
    for(let i = 0; i<listOfProducts.length; i++){
        FindData(ans, listOfProducts[i])
    }
    console.log(ans);
}

function FindData(arr, element){
    let index = arr.findIndex(item => item.productName=== element.productName)

    if(index === -1){
        arr.push(element)
    }else{
        arr[index].quantity+=element.quantity
    }
    return arr;
}
getProductCount(listOfProducts);
