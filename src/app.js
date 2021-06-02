let showProducts = function (id, ...products){
    console.log(id),
    console.log(products)
}
//rest istedğimiz kadat parametre gönderiyoruz array olarak tutuluyor
//showProducts(10,["elma","armut,","karpuz"]);

//spread elimizdeki array i ayrıştırıyoruz
let points = [1,2,3,4,5,6]
console.log(...points)

//destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

let populations = [10000,20000,30000,[40000,100000]]
function someFunction([small1], number) {
    console.log(small1);
}


let category = {id:1,name:"engin"}
let {id,name} = category
console.log(id)
console.log(name)