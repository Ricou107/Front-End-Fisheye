//create the cards with the right DOM Element
function photographerFactory(photographer) {

    const picture = `assets/photographers/${photographer.portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a')
        link.setAttribute('href', `./photographer.html?id=${photographer.id}`)
        link.setAttribute('aria-label', 'lien vers la page du photographe')
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Portrait de ${photographer.name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = photographer.name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = photographer.city + ', ' + photographer.country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = photographer.tagline
        const h5 = document.createElement( 'h5' );
        h5.textContent = photographer.price + '€/jour'
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link)
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        return (article);
    }
    return { photographer, picture, getUserCardDOM }
}