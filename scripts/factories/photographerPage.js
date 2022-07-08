/* eslint-disable no-unused-vars */
//Send the information about photographer
function photographerPageFactoryHeader(photographerData) {

    const txt = document.createElement('div')
    const name = document.createElement('h2')
    const location = document.createElement('h3')
    const tagline = document.createElement('h4')

    name.textContent = photographerData.name;
    location.textContent = photographerData.city + ', ' + photographerData.country;
    tagline.textContent = photographerData.tagline;

    txt.appendChild(name)
    txt.appendChild(location)
    txt.appendChild(tagline)

    const img = document.createElement('img')
    img.setAttribute("src", `assets/photographers/${photographerData.portrait}`)

    return [txt, img]
}

function photographerPageFactoryPhoto(photosData) {
    const article = document.createElement('article')
    article.classList.add('photo-card')

    var media
    if (photosData.image === undefined) {
        media = document.createElement('video')
        media.setAttribute("src", `assets/photographers/${photosData.video}`)
        media.setAttribute("onClick", `displayMediaModal("${photosData.video}", "video", "${photosData.title}")`)
    } else {
        media = document.createElement('img')
        media.setAttribute("src", `assets/photographers/${photosData.image}`)
        media.setAttribute("onClick", `displayMediaModal("${photosData.image}", "img", "${photosData.title}")`)
    }

    media.setAttribute("id", photosData.id)
    media.style.cursor = "pointer"
    const bottomBanner = document.createElement('div')
    bottomBanner.classList.add('bottom-banner')
    const title = document.createElement('p')
    const likes = document.createElement('div')
    const likesHeart = document.createElement('div')
    likesHeart.classList.add('likesHeart')
    const heart = document.createElement('span')
    heart.innerHTML = '&nbsp ♥'
    title.textContent = photosData.title
    likes.innerHTML = photosData.likes 
    likes.classList.add('likes')
    likes.setAttribute("liked", "false")

    likes.addEventListener('click', function(e) {
        let oldLikes = parseInt(e.target.textContent)
        let newLikes

        let likesTotal = document.getElementById('totalLikes')
        let oldTotal = parseInt(likesTotal.innerHTML)
        let newTotal

        if (e.target.getAttribute('liked') === 'false') {
            newLikes = oldLikes + 1
            newTotal = oldTotal + 1
            likes.setAttribute("liked", "true")
        } else {
            newLikes = oldLikes - 1
            newTotal = oldTotal - 1
            likes.setAttribute("liked", "false")
        }
        
        e.target.textContent = newLikes
        likesTotal.innerHTML = newTotal

    }, false);

    // eslint-disable-next-line no-undef
    totalLikes = totalLikes + photosData.likes

    likesHeart.appendChild(likes)
    likesHeart.appendChild(heart)
    bottomBanner.appendChild(title)
    bottomBanner.appendChild(likesHeart)

    article.appendChild(media)
    article.appendChild(bottomBanner)
    
    return article
}
