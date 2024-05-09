const searchBox = document.querySelector("#text");
const searchBtn = document.querySelector("#btn");
const word = document.querySelector("#word");
const mean = document.querySelector("#meaning");
const exp = document.querySelector("#eg");
const syn = document.querySelector("#syn");
const noun = document.querySelector("#noun");
const getData = async (searchValue)=>{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    let response = await fetch(url);
     let jsonData = await response.json();
     console.log(jsonData);
     console.log(jsonData[0].meanings
        [0].definitions);
    console.log(jsonData[0].meanings[0].definitions[0].example);
    
    word.innerHTML = `${jsonData[0].word}`;
    mean.innerHTML = `${jsonData[0].meanings
    [0].definitions[0].definition}`;
    syn.innerHTML = `${jsonData[0].meanings[0].synonyms}`;
    exp.innerHTML = `${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example }`;
    noun.innerHTML = `${jsonData[0].meanings[0].partOfSpeech}`;
}
searchBtn.addEventListener("click",()=>{
    let searchValue = searchBox.value;
    getData(searchValue);
})
