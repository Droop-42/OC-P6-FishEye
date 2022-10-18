//Get id of photographer from url parameter
const getId = (url, id) => {
    url = new URL(document.location).searchParams;
    id = url.get('id');
    return id;
  };

//Get photographer data
async function getPhotographers() {
    let photographers =
        fetch("data/photographers.json")
            .then(response => {
                return response.json()}
            )
            .then(data => {
                console.log("data :",data)
                return data 
                }
            )
    return photographers 
}

async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const mediasSection = document.querySelector(".medias");

    //Create photographer's header card
    const photographerModel = persoHeaderFactory(photographer);
    const photographerCardDOM = photographerModel.getPersoCardDOM();
    photographersSection.appendChild(photographerCardDOM);
    
    document.querySelector(".price").textContent = photographer.price; 
};

async function displayData(photographer, medias) {
    const mediasSection = document.querySelector(".medias");

    //Create medias cards
    medias.forEach((media) => {
        const index = medias.indexOf(media);
        const images = medias.image;
        //console.log('id: ',index)
        //console.log(medias[index].image)
        const pagePersoModel = pagePersoFactory(media, photographer.name, index, medias);
        const mediaCardDOM = pagePersoModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);

    });

    document.querySelector(".likes-counter").textContent = getTotalLikes(medias); 
    
};


function getTotalLikes(medias)  {
    let totalLikes = 0;
    medias.forEach(media => {
        totalLikes = totalLikes + media.likes;
    })
    return totalLikes
}


async function init() {
    // Get photographer data  
    const { photographers, media } = await getPhotographers();
    const photographer= photographers.filter(d => d.id == getId());
    const medias = media.filter(d => d.photographerId == getId());

    function sortMedias(medias) {
        if (document.getElementById("select").textContent === 'Popularité'){
            let sortedMedias = medias.sort((a, b) => {
                return b.likes - a.likes;
            });
            console.log('pop', document.getElementById("select").textContent )
            return sortedMedias
            
        } else if (document.getElementById("select").textContent === 'Date') {
            let sortedMedias = medias.sort((a, b) => {
                let da = new Date(a.date),
                    db = new Date(b.date);
                return da - db;
            });
            console.log('nopop', document.getElementById("select").textContent )
            return sortedMedias
        } else if (document.getElementById("select").textContent === 'Titre') {
            let sortedMedias = medias.sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            console.log('nopop', document.getElementById("select").textContent )
            return sortedMedias
        }

    
    }
    //let sortedMedias = sortMedias(medias)
    //console.log(sortedMedias)

    displayDataPhotographer(photographer[0]);
    displayData(photographer[0], sortMedias(medias));
    
    function newSort() {
        document.querySelector(".medias").innerHTML = '';
        //document.getElementById("main").remove();
        displayData(photographer[0], sortMedias(medias));
        console.log('nopop', document.getElementById("select").textContent )
    }

    items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", newSort)
    }
    
};

init();

