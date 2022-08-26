async function getMoney(){
    //get information from an api
    var coinGeckoDataRaw = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    //convert the raw data we get back into "JSON"-> a format that javascript can understand and work with
    var jsonCoinData = await coinGeckoDataRaw.json();

    //jsonCoinData is an array of objects
    // console.log(jsonCoinData)
    
    //grab the div where we want to store our data from the html using its id
    let div = document.querySelector("#coinList")

    //clear our previous coins;
    div.replaceChildren();

    //FOR every coin, i want to create a paragraph tag and populate that paragraph tag with the current coin info,  and append (attach) that paragraph tag as a child to to div#coinList
    for(let i = 0; i<jsonCoinData.length; i++){
        let currentCoin = jsonCoinData[i];

        //create a paragraph tag using js
        let pTag = document.createElement("p");
        // pTag.innerText = currentCoin.name + "- $" + currentCoin.current_price;

        //populate the ptag with the current coin info
        pTag.innerText = `${currentCoin.name} - $ ${currentCoin.current_price}`;
        
        //attach teh ptag to our div
        div.appendChild(pTag);

    }
}