    //API call to get data from json and return only photographers details data
    async function getPhotographers() {
        const data = await fetch('data/photographers.json').then(res => res.json()).catch(err => console.log("Error retrieving data", err))

        const photographers = data.photographers
        return ({
            photographers: [...photographers]})
    }

    //create cards for each photographer and add cards to the DOM
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    //initialisation of the homepage function
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    