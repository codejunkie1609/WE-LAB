function first(value)
{
    return value + 100
}
function second(value)
{
    return value * 10
}
function third(value)
{
    return value - 10
}
let promise = new Promise((resolve, reject) => {
    resolve(10)
})
promise.then(first).then(second).then(third).then((result) => {
    console.log(result)
})