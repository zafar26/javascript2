
function fetchRandomNumbers(){
    return new Promise((resolve, reject) => {
    console.log('Fetching number...');
    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        console.log('Received random number:', randomNum);
        resolve(randomNum);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}


function fetchRandomString(){
    return new Promise((resolve, reject) => {
    console.log('Fetching string...');
    setTimeout(() => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log('Received random string:', result);
        resolve(result);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}



// fetchRandomNumbers((randomNum) => console.log(randomNum))
// fetchRandomString((randomStr) => console.log(randomStr))


// fetchRandomNumbers().then((randomNum) => {
//     console.log(randomNum)
    
// });


// function task1(){
//     fetchRandomString().then((randomNum) => {
//         console.log(randomNum)
//     });
//     var value1;
// }
// task1()


// function task2(){
//     var value = 0;
//     fetchRandomNumbers().then((randomNum)=>value = randomNum);
//     fetchRandomNumbers().then((randomNum)=>{value += randomNum
//         setTimeout(() => {       
//         console.log(value)
//         },2000)
//     });
// }
// task2()

// function task3(){
//     var value = "";
//     fetchRandomNumbers().then((randomNum)=>value = randomNum);
//     fetchRandomString().then((randomStr)=>{value += randomStr
//         setTimeout(() => {       
//         console.log(value)
//         },2000)
//     });
// }
// task3()

// function task4(){
//     var value = 0;
//     for(let i=0; i<10;i++){
//     fetchRandomNumbers().then((randomNum)=>value += randomNum);
//     } 
//     setTimeout(() => {       
//         console.log(value)
//         },5000)
    
// }
// task4()

