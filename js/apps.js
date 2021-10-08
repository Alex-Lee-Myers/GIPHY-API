function sendAPIrequest() {
    const giphyApiKey = "Oc3bIC2xnTvEmR29urblykTubhidUk0a";
    let userInput = document.getElementById("giphySearch").value
    let gifPlaceholder = document.getElementById('gifPlaceholder')
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
    console.log(userInput)

    fetch(giphyApiURL).then(function(data){
        return data.json() // returning the data in json format
    })
     .then(function(json){ //lines 18 and beyond are what we want to do with the data. 
        console.log(json.data[0].images.fixed_height.url)
        let gifPull = json.data[0].images.fixed_height.url
        gifPlaceholder.setAttribute("src", gifPull)
        document.body.appendChild(img)
    })
}