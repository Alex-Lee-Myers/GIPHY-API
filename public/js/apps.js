// ! Global Variables
const giphyApiKey = "Oc3bIC2xnTvEmR29urblykTubhidUk0a";
let gifPlaceholder = document.getElementById('gifPlaceholder');
let userInput = document.getElementById("giphySearch").value;
let userInputEnter = document.getElementById("giphySearch");
let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

// * ! MAIN SEARCH start
// ! When clicking the button it does a search...
function sendAPIrequest() {
    // * variables inside function
    const giphyApiKey = "Oc3bIC2xnTvEmR29urblykTubhidUk0a";
    let gifPlaceholder = document.getElementById('gifPlaceholder');
    let cardGifOne = document.getElementById('cardImgOne');
    let downloadOne = document.getElementById('downloadOne');

    let cardGifTwo = document.getElementById('cardImgTwo');
    let downloadTwo = document.getElementById('downloadTwo');

    let cardGifThree = document.getElementById('cardImgThree');
    let downloadThree = document.getElementById('downloadThree');

    let cardGifFour = document.getElementById('cardImgFour');
    let downloadFour = document.getElementById('downloadFour');

    let cardGifFive = document.getElementById('cardImgFive');
    let downloadFive = document.getElementById('downloadFive');

    let cardGifSix = document.getElementById('cardImgSix');
    let downloadSix = document.getElementById('downloadSix');
    
    let userInput = document.getElementById("giphySearch").value;
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;
    console.log(giphyApiURL);
    // * go dog go!!
    fetch(giphyApiURL).then(function(data){
        return data.json() // returning the data in json format
    })
     .then(function(json){ //lines 18 and beyond are what we want to do with the data. 
        // * Main Search
        let gifMainSearch = json.data[0].images.fixed_height.url
        gifPlaceholder.setAttribute("src", gifMainSearch)
        
        // * Card One
        let cardImgOne = json.data[1].images.fixed_height.url
        cardGifOne.setAttribute("src", cardImgOne)
        let downloadImgOne = json.data[1].url
        downloadOne.setAttribute("href", downloadImgOne)

        // * Card Two
        let cardImgTwo = json.data[2].images.fixed_height.url
        cardGifTwo.setAttribute("src", cardImgTwo)
        let downloadImgTwo = json.data[2].url
        downloadTwo.setAttribute("href", downloadImgTwo)

        // * Card Three
        let cardImgThree = json.data[3].images.fixed_height.url
        cardGifThree.setAttribute("src", cardImgThree)
        let downloadImgThree = json.data[3].url
        downloadThree.setAttribute("href", downloadImgThree)

        // * Card Four
        let cardImgFour = json.data[4].images.fixed_height.url
        cardGifFour.setAttribute("src", cardImgFour)
        let downloadImgFour = json.data[4].url
        downloadFour.setAttribute("href", downloadImgFour)

        // * Card Five
        let cardImgFive = json.data[5].images.fixed_height.url
        cardGifFive.setAttribute("src", cardImgFive)
        let downloadImgFive = json.data[5].url
        downloadFive.setAttribute("href", downloadImgFive)

        // * Card Six
        let cardImgSix = json.data[6].images.fixed_height.url
        cardGifSix.setAttribute("src", cardImgSix)
        let downloadImgSix = json.data[6].url
        downloadSix.setAttribute("href", downloadImgSix)

    })
}

// ! When hitting enter, it then triggers the button, which does the search above. 
userInputEnter.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        event.preventDefault()
        sendAPIrequest();
    }
});
// * ! MAIN SEARCH end

const element = document.getElementById("sendButton");
const animate = new mdb.Animate(element, {
    animation: "tada",
    animationStart: "onClick",
    animationDelay: "0",
    animationDuration: "500",
    animationReverse: "false",
    animationRepeat: "false",
    animationInterval: "0",
});
animate.init();