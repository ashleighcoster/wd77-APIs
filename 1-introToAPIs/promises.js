//API's - application programming interface
//how you might be able to get data from google maps, anything that makes data available for free, etc. 
//pull data from an outside source and tailor that data for a client, etc. 
//! PROMISE is a way to handle asyncronous code 

// setTimeout(() => console.log('this is a test of timeouts!'), 1000);
//callback function - called after something happens, 1000 = time to pass; 1000= 1 second

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000,); //3000 = 3 seconds
})
//'new' keyword = new version of thing that follows it 
//can hover over Promise for more info 

promise // waits 3 seconds to console log 
    .then(success => console.log(success)) //success = success
    .catch(err => console.log(err)); // err = failure
//.then = grabs success - could call 'success' anything such as 'blah'
//.then handles success only 
//.catch will catch failures

console.log('this code is after our promise & .then chain!');

