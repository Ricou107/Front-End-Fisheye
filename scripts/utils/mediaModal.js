const mediaModal = document.getElementById("mediaModal");
const mediaContent = document.getElementById("mediaContent");
const next = document.getElementById("next")
const previous = document.getElementById("previous")




function displayMediaModal(photoUrl, mediaType, title) {
	mediaModal.style.display = "flex";
    mainWrapper.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
    console.log(photoUrl)
    const mediaAsset = document.createElement(mediaType)
    mediaAsset.setAttribute("src", `assets/photographers/${photoUrl}`)
    mediaAsset.classList.add('media')
    mediaContent.appendChild(mediaAsset)
    const titleMedia = document.createElement('h3')
    titleMedia.innerText = title
    mediaContent.appendChild(titleMedia)

    
    next.setAttribute("onClick", `nextMedia("${photoUrl}")`)
    previous.setAttribute("onClick", `previousMedia("${photoUrl}")`)

}

function closeMediaModal() {
    mediaModal.style.display = "none";
    mainWrapper.setAttribute('aria-hidden', 'false')
    body.classList.remove('no-scroll')
    mediaContent.innerHTML = ''
}

function nextMedia(photoUrl) {
let nextPhoto = listOfPhotos[listOfPhotos.findIndex((Url) => Url == photoUrl) + 1]
let title = titles[listOfPhotos.findIndex((Url) => Url == photoUrl) + 1]

    if (nextPhoto == undefined) {
        nextPhoto = listOfPhotos[0]
        title = titles[0]
    }

    mediaContent.innerHTML = ''
    displayMediaModal(nextPhoto, findType(nextPhoto), title)
}

function previousMedia(photoUrl) {
    let previousPhoto = listOfPhotos[listOfPhotos.findIndex((Url) => Url == photoUrl) - 1]
    let title = titles[listOfPhotos.findIndex((Url) => Url == photoUrl) - 1]
      
        if (previousPhoto == undefined) {
            previousPhoto = listOfPhotos[listOfPhotos.length -1]
            title = titles[listOfPhotos.length -1]
        }
    
        mediaContent.innerHTML = ''
        displayMediaModal(previousPhoto, findType(previousPhoto), title)
    }

function findType(url) {
    if (url[url.length - 1] == "g") {
        return "img"
    } else {
        return "video"
    }
}