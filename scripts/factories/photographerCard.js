function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function redirect() {
    location.href = "/photographer.html?id="+id;
    }

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.addEventListener('click', redirect);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement( 'span' );
        localisation.classList.add('localisation');
        localisation.textContent = city+", "+country;
        const tag = document.createElement( 'span' );
        tag.classList.add('tag');
        tag.textContent = tagline;
        const pricing = document.createElement( 'span' );
        pricing.classList.add('pricing');
        pricing.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(tag);
        article.appendChild(pricing);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}