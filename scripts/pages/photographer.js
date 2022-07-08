

    const listOfPhotos = []
    let totalLikes = 0
    const titles = []
    //get id of photographer from params

    const params = (new URL(document.location)).searchParams;
    const id = params.get('id');

    //API call to get data from json and return photographer data
    async function getPhotographerData() {
        const data = await fetch('data/photographers.json').then(res => res.json()).catch(err => console.log("Error retrieving data", err))

        
        //return appropriate photographer data
        const photographer = data.photographers.find(x => x.id == id)
        let medias = data.media.filter(x => x.photographerId == id)

        const sort = params.get('sort');

        if (sort) {
            medias = getSorted(sort, medias)        
        }

        return [photographer, medias]
    }

    async function displayProfileData(photographerData) {
        const photographHeader = document.querySelector(".photograph-header");
        const dropdown = document.querySelector(".tri");

        const photos = document.createElement('section')
        photos.classList.add('photos')
        dropdown.after(photos)
        
        for (let photo of photographerData[1]) {listOfPhotos.push(Object.values(photo)[3])}
        for (let photo of photographerData[1]) {titles.push(Object.values(photo)[2])}

        console.log(listOfPhotos)
        console.log(titles)

        const photographerPageHeaderModel = photographerPageFactoryHeader(photographerData[0])        
        
        photographHeader.prepend(photographerPageHeaderModel[0])
        photographHeader.append(photographerPageHeaderModel[1])
        
        photographerData[1].forEach((photographerPhoto) => {
            var photoModel = photographerPageFactoryPhoto(photographerPhoto);
            photos.appendChild(photoModel);
        });

        const body = document.querySelector('body')

        const priceDiv = document.createElement('div')
        priceDiv.classList.add('priceDiv')
        const likes = document.createElement('p')
        likes.setAttribute('id', 'totalLikes')
        likes.innerText = totalLikes 
        const priceInfos = document.createElement('span')
        priceInfos.classList.add('priceInfos')
        priceInfos.innerHTML = '&nbsp♥ ' + '&nbsp&nbsp&nbsp'+ photographerData[0].price + '€/jour'
        priceDiv.appendChild(likes)
        priceDiv.appendChild(priceInfos)
        body.appendChild(priceDiv)
        
    };

async function init() {
    const photographerData = await getPhotographerData();

    displayProfileData(photographerData)
};

init();

function sortPopularity() {

    window.location.href = `photographer.html?id=${id}&sort=popularity`
};

function sortTitle() {

    window.location.href = `photographer.html?id=${id}&sort=title`
};

function sortDate() {

    window.location.href = `photographer.html?id=${id}&sort=date`
};


