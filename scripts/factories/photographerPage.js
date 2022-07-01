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
    } else {
        media = document.createElement('img')
        media.setAttribute("src", `assets/photographers/${photosData.image}`)
    }

    const bottomBanner = document.createElement('div')
    bottomBanner.classList.add('bottom-banner')
    const title = document.createElement('p')
    const likes = document.createElement('div')
    title.textContent = photosData.title
    likes.innerHTML = photosData.likes + ' &#10084;&#65039'

    bottomBanner.appendChild(title)
    bottomBanner.appendChild(likes)

    article.appendChild(media)
    article.appendChild(bottomBanner)
    
    return article
}
