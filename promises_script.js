var dummyPromise='https://some-api.com/posts';
var dummyPromise = new Promise((resolve, reject) => {
 const success = true; // or false
 if (success) {
 resolve("Promise was fulfilled with dummy data!");
 } else {
 reject("Promise was rejected with dummy error!");
 }
 });

 dummyPromise.then(result => {
 console.log(result);
 }).catch(error => {
 console.error(error);
 });
// Using Promises
function fetchData() {
 return new Promise((resolve, reject) => {
 fetch('https://api.github.com/')
 .then(response => {

 if (!response.ok) {
 throw new Error('Network response was not ok');
 }
 return response.json();
 })
 .then(data => {
 resolve(data);
 })
 .catch(error => {
 reject(error);
 });
 });
 }
 // Calling the fetchData function
 fetchData()
 .then(data => {
 console.log('Fetched data:', data);
 })
 .catch(error => {
 console.error('Error fetching data:', error);
 });