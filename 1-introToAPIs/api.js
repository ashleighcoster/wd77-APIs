const baseURL = 'https://api.spacexdata.com/v2/rockets';
//where data will be pulled from 
//make it a 'const' because we don't want url to change 

//ul is where data will go 

const searchForm = document.querySelector('form'); 
const spaceShips = document.querySelector('ul'); 


//button with id of 'submit' - default action is post data and refresh page because it is a submit event 

//searchform needs to have an Event Listener - need to add a call back function to this event, called fetchSpace 
searchForm.addEventListener('submit', fetchSpace);

//              (argument = e)
function fetchSpace(e){ //e = event details
    e.preventDefault(); //preventing submit action from happening - not getting page refresh 

    fetch(baseURL) //fetch = returns a promise and is a built in function in js (yellow text = js specific info) 
        .then(result => result.json()) //.json also returns a promise; concise body arrow function - will get an object back from 'result' that isn't easy to read, a string object, and can take the json and convert it into something easier to read 
        .then(json => { 
            console.log(json);
            displayRockets(json)
        }); //called displayRockets
}

//promises = 1. pending 2. success 3. fail 

function displayRockets(rockets){ 
    //defined = displayRockets
    //going to loop through the array of rockets objects = forEach 
    rockets.forEach(r => {
        let rocket = document.createElement('li'); //DOM manipulation techniques to build a new list item 
        rocket.innerText = r.name; //this names it when you refresh and hit the "submit" button - could call this anything in the object such as cost per launch, etc. 
        spaceShips.appendChild(rocket); //'appendchild' will add a new child element/node inside of that element = ul 
        //r = single rocket object 
    })
}

