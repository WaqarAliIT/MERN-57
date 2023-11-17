// new Promise(function(resolve,reject){
// resolve("matter has been resolved" )}.then(function(data){
//     console.log(data)
// }).catch(function(e){
//     console.log(e);
// })


new Promise(function(resolve,reject){
    reject("This is rejected");
}).then(function(data){
    console.log(data);
}).catch(function(e){
    console.log(e)
})