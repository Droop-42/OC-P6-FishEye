function persoHeaderFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    const modalbgContact = document.querySelector(".background-contact");
    const closeBtn = document.getElementById("close");

    function launchContactModal() {
        modalbgContact.style.display = "block";
        displayModal()
    }

    function closeContactModal() {
        modalbgContact.style.display = "none";
        closeModal()
    }

    //contactBtn.addEventListener('click', launchContactModal);
    closeBtn.addEventListener('click', closeContactModal);

    function getPersoCardDOM() {
        const article = document.createElement( 'article' );
        //article.addEventListener('click', launchContactModal);
        article.classList.add('perso-card')
        
        const div = document.createElement( 'div' );
        div.classList.add('perso-txt')
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement( 'span' );
        localisation.classList.add('localisation');
        localisation.textContent = city+", "+country;
        const tag = document.createElement( 'span' );
        tag.classList.add('tag');
        tag.textContent = tagline;


        const contactBtn = document.createElement( 'button' );
        contactBtn.textContent = 'Contactez-moi';
        contactBtn.classList.add('contact_button')
        contactBtn.addEventListener('click', launchContactModal);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        
        div.appendChild(h2);
        div.appendChild(localisation);
        div.appendChild(tag);

        article.appendChild(div);
        article.appendChild(contactBtn);
        article.appendChild(img);

        return (article);
    }
    return { name, picture, getPersoCardDOM }
}