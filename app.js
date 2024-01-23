//One of the most common tasks in web development is retrieving data from an API and displaying it on the page. Most websites with comments, reviews, or user generated social content will use APIs to store and retrieve that content - usually from a database on a distant computer, perhaps on the other side of the world.

//Browsers support the Fetch API, a common standard for making HTTP requests in your JavaScript code which enables this without any third party libraries.

console.log("Hello");

//Workshop

// //MAKING A REQUEST
// //making a request to JSON placeholder API
async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

// getMyStuffFromOverThere();

// //done without using async/await. uses .then() method. will most likely use the above method in most cases though.
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });

//HANDLING THE RESPONSE
//The return value from calling the Fetch API with await fetch is a Response object.
//It has methods and properties to help us handle the response from the API request. The most important is the status code, accessed with response.status. This is a number between 100 and 511 that tells us if the request was successful or if not, what might have been wrong

//PARSING THE RESPONSE
//When expecting JSON from an API, we can use the response.json() method to parse the response body as JSON. Like in Local Storage, the JSON comes over the network as a string - the response.json() function turns it back into a JavaScript object we can access with object dot notation.

//Making a fetch request to the GitHub API for my week2 project

async function getStuffFromGithub() {
  const response = await fetch(
    `https://api.github.com/repos/DJWilson1990/Week2Project-clickergame`
  );
  console.log("HTTP Response:", response);
  let json = await response.json();
  console.log("JSON Data:", json);
  let p = document.createElement("p");
  p.textContent = json.stargazers_count; // From the JSON object returned, access the stargazers_count and update your page to display the value by creating a DOM element and setting it's content to that value.
  stargazercontainter.appendChild(p);
}
getStuffFromGithub();

let stargazercontainter = document.getElementById("stargazer-container"); //linking HTML div to JS so it knows where to display information on browser.

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let query = event.target.input.value;
  search(query);
});

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=ib4uIfBhjX9GrxzV6cztReU-W-_T6UMr5JRI5abvXjA`
  );
  console.log(response);
  let data = await response.json();
  console.log(data.results[0].urls.small);

  let img = document.createElement("img");
  img.src = data.results[0].urls.small; ///specific to the array 0, and url small.
  imagecontainer.appendChild(img); /////if i want to show multiple imgs then need to create loops.
}

let imagecontainer = document.getElementById("img-container");

//ball dont lie data API

let datacontainer = document.getElementById("bball-container");

async function getData() {
  const response = await fetch(`https://www.balldontlie.io/api/v1/players`); //webpage where API is coming from
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
  for (let i = 10; i < 17; i++) {
    //loop created to specify data fields. data, array 10 - 17
    let h2 = document.createElement("h2"); //creating element for text information
    h2.textContent = json.data[i].first_name; //getting the first name data and putting it in browser as an h2 element.
    datacontainer.appendChild(h2); //telling it where to put the information. data container, h2
  }
}
getData(); //calling the function
