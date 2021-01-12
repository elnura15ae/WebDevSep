const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const input = document.querySelector('#search')
const searchBtn = document.querySelector('#btn')
let audioLink = document.querySelector('#audio-link')
let title = document.querySelector('.word-text')
let pron = document.querySelector('.pronunciation-text')
let bodyText = document.querySelector('#body-text')
let wordClass = document.querySelector('#word-class')

searchBtn.addEventListener('click',()=>{
    fetch(`${api}${input.value}`)
.then(data=>data.json())
.then(res=>{
    console.log(res)
    if(res.title == 'No Definitions Found'){
        title.innerText = res.title
        bodyText.innerText = res.message
        pron.innerText = res.resolution
        wordClass.innerText = "undefined"
        audioLink.href = '#'
    
    }else{
        title.innerText = input.value
        bodyText.innerText = res[0].meanings[0].definitions[0].definition
        pron.innerText = res[0].phonetics[0].text
        wordClass.innerText = res[0].meanings[0].partOfSpeech
        audioLink.href = res[0].phonetics[0].audio
    }

})        
})

