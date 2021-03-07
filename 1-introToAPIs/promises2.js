// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json)); 

// async function slowResult(){ 
//     //async returns a promise
//     await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true') 
//     //await works with anything that returns a promise
//     .then(res => res.json())
//     .then(json => console.log(json))
//     console.log('this is a message!');
// }

// slowResult();
//async - when you call your function when 'async' is used, your function will be in a pending status until the inside of the function resolves
//await - can only be used with 'async' = await whatever promise thing needs to happen - await the fetch and json and console log before you do anything else (in the example above)

//! async and await is helpful when = the later code depends on the earlier fetch result so you need it to run in order 

async function slowResult(){ 
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true') 
    .then(res => res.json())
    .then(json => {json.lolProperty = 'this is a random property'; return json;})
    .then(json => console.log(json))
    console.log('this is a message!');
}

slowResult();