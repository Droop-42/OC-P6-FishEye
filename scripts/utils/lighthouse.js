

    function getLighthouseDOM(image, video, title, name, index, medias) {

        //const index = aimage.indexOf(theImg);
        const modalbgContact = document.querySelector(".background-lighthouse");
        //const closeBtn = document.getElementById("close2");

        function closeLModal() {
            let lh = document.getElementById('lh');
            lh.removeChild(article);
            modalbgContact.style.display = "none";
            //closeModal2()
            
        }
        //closeBtn.addEventListener('click', closeLModal);

        const pictureSrc = `assets/SamplePhotos/${name}/${image}`;
        const videoSrc = `assets/SamplePhotos/${name}/${video}`;

        function getPictureType(image, video) {
            if (image) {
                //console.log('image')
                return 'img'
            } else if (video) {
                //console.log('video')
                return 'video'
            } else {
                console.log('unknow media type')
            }
        }
        pictureType = getPictureType(image, video)

        mediasLength = medias.length;
        let imgIndex = index;
        
        function nextImg() {
            

            if (imgIndex<mediasLength-1){
                imgIndex += 1;  
            } else {
                imgIndex = 0;
            }
            const nextImage = medias[imgIndex].image
            const nextVideo = medias[imgIndex].video
            const nextTitle = medias[imgIndex].title
            const nextImgSrc = `assets/SamplePhotos/${name}/${nextImage}`;
            const nextVideoSrc = `assets/SamplePhotos/${name}/${nextVideo}`;

            //----------------------------------
            document.getElementById('samp').remove();

            //img.remove();
            pictureType = getPictureType(nextImage, nextVideo);
            console.log(pictureType);
            const img = document.createElement( pictureType );
            img.setAttribute("id","samp");
            img.setAttribute("src", nextImgSrc)
            if (pictureType === 'video') {
                img.setAttribute("src", nextVideoSrc)
                img.setAttribute("poster", "")
                img.setAttribute("controls", "")
            } else {
                img.setAttribute("src", nextImgSrc)
            }
            //-----------------------------------

            //img.setAttribute("src", nextSrc);
            
            document.getElementById('titl').remove();
            const h2 = document.createElement( 'h2' );
            h2.textContent = nextTitle;
            h2.setAttribute("id","titl");
            
            div.appendChild(img);
            div.appendChild(h2);
        }
/*
        function previewImg() {
            if (imgIndex<1){
                imgIndex = mediasLength-1;  
            } else {
                imgIndex -= 1;
            }
            const nextImage = medias[imgIndex].image
            const nextTitle = medias[imgIndex].title
            const nextSrc = `assets/SamplePhotos/${name}/${nextImage}`;
            img.setAttribute("src", nextSrc);
            h2.textContent = nextTitle;
              
        }
*/
    function previewImg() {
        
        if (imgIndex<1){
            imgIndex = mediasLength-1;  
        } else {
            imgIndex -= 1;
        }
        const nextImage = medias[imgIndex].image
        const nextVideo = medias[imgIndex].video
        const nextTitle = medias[imgIndex].title
        const nextImgSrc = `assets/SamplePhotos/${name}/${nextImage}`;
        const nextVideoSrc = `assets/SamplePhotos/${name}/${nextVideo}`;

        //----------------------------------
        document.getElementById('samp').remove();

        //img.remove();
        pictureType = getPictureType(nextImage, nextVideo);
        console.log(pictureType);
        const img = document.createElement( pictureType );
        img.setAttribute("id","samp");
        img.setAttribute("src", nextImgSrc)
        if (pictureType === 'video') {
            img.setAttribute("src", nextVideoSrc)
            img.setAttribute("poster", "")
            img.setAttribute("controls", "")
        } else {
            img.setAttribute("src", nextImgSrc)
        }
        //-----------------------------------

        //img.setAttribute("src", nextSrc);
        
        document.getElementById('titl').remove();
        const h2 = document.createElement( 'h2' );
        h2.textContent = nextTitle;
        h2.setAttribute("id","titl");
        
        div.appendChild(img);
        div.appendChild(h2);
    }



        const article = document.createElement( 'article' );
        article.classList.add('media-sample');
        //article.addEventListener('click', launchModal);
        const arrowL = document.createElement( 'span' );
        arrowL.classList.add('material-symbols-outlined');
        arrowL.textContent = 'arrow_back_ios';
        arrowL.classList.add('arrowL');
        arrowL.addEventListener('click', previewImg);

        const div = document.createElement( 'div' );
        const img = document.createElement( pictureType );
        img.setAttribute("id","samp");
        img.setAttribute("src", pictureSrc)
        if (pictureType === 'video') {
            img.setAttribute("src", videoSrc)
            img.setAttribute("poster", "")
            img.setAttribute("controls", "")
        } else {
            img.setAttribute("src", pictureSrc)
        }
        //const div2 = document.createElement( 'div' );
        const close = document.createElement( 'span' );
        close .classList.add('material-symbols-outlined');
        close .textContent = 'close';
        close.classList.add('close');
        close.addEventListener('click', closeLModal);

        const arrowR = document.createElement( 'span' );
        arrowR.classList.add('material-symbols-outlined');
        arrowR.textContent = 'arrow_forward_ios';
        arrowR.classList.add('arrowR');
        arrowR.addEventListener('click', nextImg);

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.setAttribute("id","titl");

        article.appendChild(arrowL);

        div.appendChild(img);
        div.appendChild(h2);
        

        article.appendChild(div);
        article.appendChild(close);
        article.appendChild(arrowR);
        //article.appendChild(div2);

        return (article);
    }
