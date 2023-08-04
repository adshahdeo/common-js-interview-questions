let a = [1,2,3], b=[4,5,6];


// c=[1,4,2,5,3,6]

const merger  = (arr1, arr2) => {
    const newArr = [];
    const length = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < length; i++) {
        if(arr1[i]) newArr.push(arr1[i]);
        if(arr2[i]) newArr.push(arr2[i]);
    }

    return newArr;
}

let res = merger(a, b);

const a = [12,3,5,7,9];

const myPromise = new Promise((res, rej) => {
    if (true) {
        resolve(1);
    } else {
        reject(0);
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((rejection) => {

})

Promise.all([]).finally()


// wait time/energy/distance -> single paramter of being closest in same direction
// to, from floor (event), number of people

{numberOflifts} initial constructor

class liftSystem

class lift 
{lift, direction (-1, 0, 1), destinations{
 floor : payload
}, capacity}