// first();
// async function first() {
//     let data = await promise();
//     console.log('happy!');
//     console.log(data);
// }

// function promise(){
// return new Promise((resolve, reject) => {
//     // let data = 100;
//     setTimeout(() => {
//         console.log('start!');
//         resolve('Done');
//     }, 1000)
// });
// }

//     ff().then((value) => {
//         console.log(value);
//         test();
//     })
//     .catch(error => {
//         console.log(error);
//     })


// let test = () => {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// test();

// function test() {
//     console.log('test');

//     setTimeout(()=>{
//         console.log('1초만 기다령!');
//     },1000)

//     for(var i =0; i<10; i++ ){
//         console.log(i);
//     }
// }

//CallBack함수
// setTimeout(()=>{
//    console.log('동작부분!');
// },1000)

// let test = () => {
//     console.log('happy~')
// }

// test();


// start(first);
// start(second);

// start(()=>{
//     console.log('뀨!');
// })
// start(val => {
//     console.log('where');
//     console.log('first =', val);
// })

// function start(abc) {
//     console.log('start');
//     let val=100;
//     abc(val);
// }


// function first(){
//     console.log('first');
// }

// function second (){
//     console.log('second');
// }