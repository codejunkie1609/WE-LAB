let promise1 = "promise 1";
let promise2 = new Promise((resolve, reject) => {
    let x = 51;    
    if(x <= 10){
        resolve(5)
    }
    else{
        reject("value is greater than 10")
    }
})
let promise3 = Promise.resolve("this is promise 3");
promise2.then((result) => {
    console.log("result: "+result)
}).catch((err) =>{
    console.log(err)
})
Promise.all([promise1,promise2,promise3 ]).then((result) => {
    console.log(result);
})
