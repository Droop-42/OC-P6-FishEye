

    function getLighthouseDOM(image, video, title, name, index, medias) {

        //Variables
        const modalbgContact = document.querySelector(".background-lighthouse");
        const pictureSrc = `assets/SamplePhotos/${name}/${image}`;
        const videoSrc = `assets/SamplePhotos/${name}/${video}`;
        let mediasLength = medias.length;
        let imgIndex = index;
        //let Type = getType(image, video);

        //Functions    
        function getType(image, video) {
            if (image) {
                console.log('image')
                return 'img'
            } else if (video) {
                console.log('video')
                return 'video'
            } else {
                console.log('unknow media type')
            }
        }   
        function closeLModal() {
            let lh = document.getElementById('lh');
            lh.removeChild(article);
            modalbgContact.style.display = "none";
            window.removeEventListener("keydown", handleKeys, true);

        } 
        //Get next Image from index--------------------     
        function nextImg() {
            

            if (imgIndex<mediasLength-1){
                imgIndex += 1;  
            } else {
                imgIndex = 0;
            }
            let nextImage = medias[imgIndex].image
            let nextVideo = medias[imgIndex].video
            let nextTitle = medias[imgIndex].title
            let nextImgSrc = `assets/SamplePhotos/${name}/${nextImage}`;
            let nextVideoSrc = `assets/SamplePhotos/${name}/${nextVideo}`;

            //----------------------------------

            document.getElementById('samp').remove();

            

            //img.remove();
            pictureType = getType(nextImage, nextVideo);
            console.log(pictureType);
            const img = document.createElement( pictureType );
            img.setAttribute("id","samp");
            img.setAttribute("src", nextImgSrc)
            if (pictureType === 'video') {
                img.setAttribute("src", nextVideoSrc)
                img.setAttribute("poster", "")
                img.setAttribute("controls", "")
                img.classList.add('media');
            } else {
                img.setAttribute("src", nextImgSrc)
                img.classList.add('media');
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
        //Get preview Image from index--------------------
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
            pictureType = getType(nextImage, nextVideo);
            console.log(pictureType);
            const img = document.createElement( pictureType );
            img.setAttribute("id","samp");
            img.setAttribute("src", nextImgSrc)
            if (pictureType === 'video') {
                img.setAttribute("src", nextVideoSrc)
                img.setAttribute("poster", "")
                img.setAttribute("controls", "")
                img.classList.add('media');
            } else {
                img.setAttribute("src", nextImgSrc)
                img.classList.add('media');
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
        
        const handleKeys = (event) => {
            if (event.defaultPrevented) {
              return; // Do nothing if the event was already processed
            }
          
            switch (event.key) {
              case "ArrowLeft":
                previewImg()
                break;
              case "ArrowRight":
                nextImg()
                break;
              case "Escape":
                closeLModal()
                break;
              case "Enter":
                break;
              default:
                return; // Quit when this doesn't handle the key event.
            }
          
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
          }

        window.addEventListener("keydown", handleKeys, true);

          

        //---------------------Create DOM -------------------------------------------------------------------------------------------
        //Lighthouse container
        const article = document.createElement( 'article' );
        article.classList.add('media-sample');

        //Left arrow
        const arrowL = document.createElement( 'button' );
        arrowL.classList.add('material-symbols-outlined');
        arrowL.textContent = 'arrow_back_ios';
        arrowL.classList.add('arrowL');
        arrowL.addEventListener('click', previewImg);

        //Media container (image + titre)
        const div = document.createElement( 'div' );
        const img = document.createElement( getType(image, video) );
        img.setAttribute("id","samp");
        img.classList.add('media');
        //img.setAttribute("src", pictureSrc)
        if (getType(image, video) === 'video') {
            img.setAttribute("src", videoSrc)
            img.setAttribute("poster", "")
            img.setAttribute("controls", "")
        } else {
            img.setAttribute("src", pictureSrc)
        }
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.setAttribute("id","titl");

        //Close button
        const close = document.createElement( 'button' );
        close .classList.add('material-symbols-outlined');
        close .textContent = 'close';
        close.classList.add('close');
        close.addEventListener('click', closeLModal);

        //Right arrow
        const arrowR = document.createElement( 'button' );
        arrowR.classList.add('material-symbols-outlined');
        arrowR.textContent = 'arrow_forward_ios';
        arrowR.classList.add('arrowR');
        arrowR.addEventListener('click', nextImg);

        article.appendChild(arrowL);
        div.appendChild(img);
        div.appendChild(h2);
        article.appendChild(div);
        article.appendChild(close);
        article.appendChild(arrowR);

        return (article);
    }
