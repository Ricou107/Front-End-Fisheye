

    //API call to get data from json and return photographer data
    async function getPhotographerData() {
        const data = await fetch('data/photographers.json').then(res => res.json()).catch(err => console.log("Error retrieving data", err))

        //get id of photographer from params
        let params = (new URL(document.location)).searchParams;
        let id = params.get('id');

        //return appropriate photographer data
        const photographer = data.photographers.find(x => x.id == id)
        const medias = data.media.filter(x => x.photographerId == id)
        return [photographer, medias]
    }

    async function displayProfileData(photographerData) {
        const photographHeader = document.querySelector(".photograph-header");

        const photos = document.createElement('section')
        photos.classList.add('photos')
        photographHeader.after(photos)

        const photographerPageHeaderModel = photographerPageFactoryHeader(photographerData[0])        
        
        photographHeader.prepend(photographerPageHeaderModel[0])
        photographHeader.append(photographerPageHeaderModel[1])
        
        photographerData[1].forEach((photographerPhoto) => {
            var photoModel = photographerPageFactoryPhoto(photographerPhoto);
            photos.appendChild(photoModel);
        });

        const body = document.querySelector('body')

        const price = document.createElement('div')
        price.classList.add('priceDiv')
        price.innerText = photographerData[0].price + '€/jour'
        
        body.appendChild(price)
        
    };

async function init() {
    const photographerData = await getPhotographerData();

    displayProfileData(photographerData)
    //displayPhotographerData(photographer);
};

init();