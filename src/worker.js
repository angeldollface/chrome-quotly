/*
CHROME QUOTLY by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Getting a random value from an object.
function getRandomValue(object) {
    let max = Object.keys(object).length - 1;
    let min = 0;
    let randKey = Object.keys(object)[getRandomIntInclusive(min, max)];
    return object[randKey][0];
}

// Getting a random integer qith both "min"
// and "max" included.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Fetching a quote from my API and setting that to the main
// content on the page. Refreshes every 30 seconds.
function main(){
    let apiURL = 'https://angeldollface.art/doll-cdn/apis/json/quotly.json';
    let quote = '';
    setInterval(
        () => {
            let element = document.getElementById('quote');
            fetch(apiURL).then(res => res.json()).then(out => quote = getRandomValue(out)).catch(err => { console.log(err) });
            element.innerHTML = quote;
        },
        6000
    );
}

main();
