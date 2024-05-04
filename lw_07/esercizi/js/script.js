  


const imageCardGen = (imageData) => {
    const imageEl = document.createElement("img")

    imageEl.className = "card--image";
    imageEl.src = imageData.urls.small
    imageEl.alt = imageData.alt_description


    return imageEl
};
const imageListGen = (listname) => {
const wrapperEl = document.createElement("div")
const titleEl = Document.createElement ("h2")


wrapperEl.className = "card--list";
titleEl.textcontent = "listname"

wrapperEl.append(titleEl)
return wrapperEl
}

const BASE_URL = "https://api.unsplash.com/";
const API_TOKEN = "sRNnOhJhWCWDpHtU5LpvDGWJJm15bwOV1zzbYxiKRFg"
const SEARCH_QUERY = "dog"
const rootEl = document.querySelector(".root")

fetch(`${BASE_URL}/search/photos/?cliend_id=${API_TOKEN}&query=${SEARCH_QUERY}`)
.then((res) => res.json())
.then = (data) => {
    const lists data = data.results;
    const imageListEl = imageListGen("photos")

    listData.map(photo) => {
        const imageEl = imageCardGen(photo)
        imageListEl.append(imageCardGen);
    };
    rootEl.append(imageListEl);
};