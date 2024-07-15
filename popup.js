'use strict'

const urlPlaceHolder = document.getElementById('url');
const blockBtn = document.getElementById('addUrl');
const listBtn = document.getElementById('list');

let url,urlStorage;


document.addEventListener('DOMContentLoaded', async(e)=>{
    e.preventDefault();
    url = 'www.faceboo.com';
    urlPlaceHolder.innerText= url
    urlStorage = await chrome.storage.local.get(['urlStorage'])
    urlStorage = urlStorage.urlStorage
})
blockBtn.addEventListener('click',async (e)=>{

    e.preventDefault();
    urlStorage.push(url)
    await chrome.storage.local.set({urlStorage:urlStorage})

})

listBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(urlStorage)

})