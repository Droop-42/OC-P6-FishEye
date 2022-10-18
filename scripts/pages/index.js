
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json

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

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        
        const { photographers } = await getPhotographers();
        console.log("selection :",photographers.filter(d => d.id >= 500))

        displayData(photographers);
        
    };
    
    init();
    