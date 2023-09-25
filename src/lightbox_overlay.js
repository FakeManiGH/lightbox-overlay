// Lightbox Overlay (LBO) v.1.12
// Original script was written by (c) Timo Anjala.
// LBO is free to use in any personal or commercial projects, free of charge.
// LBO script can be modified to fit the needs of person obtaining a copy of the it.

/*
NOTE:   Creator Informaiton and version must remain in all copies of the script. Any user-facing notification on website is not required.
        If code is modified but parts of the orginal script remains in use, mentioning of the original script is expected.
*/



// LIGHTBOX SVG ICONS

// Close SVG icon.
const closeIcon = 
`<svg class="lightbox-close-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm78.84,180.51l-23.33,23.34-55.5-55.51-55.5,55.51-23.33-23.34,55.5-55.51-55.5-55.51,23.33-23.34,55.5,55.51,55.5-55.51,23.33,23.34-55.5,55.51,55.5,55.51Z"/>
</svg>`;


// Next SVG icon.
const nextIcon = 
`<svg class="lightbox-next-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm17.5,162.5l-62.5,37.5V50l62.5,37.5,62.5,37.5-62.5,37.5Z"/>
</svg>`;


// previous SVG icon.
const prevIcon = 
`<svg class="lightbox-previous-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm45,127.05v75l-62.5-37.5-62.5-37.5,62.5-37.5,62.5-37.5v75Z"/>
</svg>`;


// Download SVG icon.
const downloadIcon =
`<svg class="lightbox-download-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm75,166.02v30H50v-55h30v25h45l-25-25-25-25h35V46.02h30v70h35l-25,25-25,25h45v-25h30v25Z"/>
</svg>`;


// Fullscreen SVG icon.
const fullscreenIcon =
`<svg class="lightbox-download-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm80,134.29v70.71s-70.71,0-70.71,0l24.76-24.76-34.04-34.04-34.05,34.05,24.75,24.75H45s0-70.71,0-70.71l24.75,24.75,34.05-34.05-34.04-34.04-24.76,24.76V45h70.71s-24.74,24.74-24.74,24.74l34.04,34.04,34.03-34.03-24.75-24.75h70.71v70.71s-24.75-24.75-24.75-24.75l-34.03,34.03,34.04,34.04,24.74-24.74Z"/>
</svg>`;



// LIGHTBOX HTML ELEMENTS

// Creates DIV element on document to work ligthbox gallery overlay.
const lightBox = document.createElement('div');
lightBox.className = 'lightbox';
document.body.appendChild(lightBox);


// Creates container which will hold image and image-data to center of lightbox overlay.
const imageContainer = document.createElement('div');
imageContainer.className = 'image-container';
lightBox.appendChild(imageContainer);


// Flex-container to keep all elements above Lightbox-image inline.
const infoBar = document.createElement('div');
infoBar.className = 'info-bar';
imageContainer.appendChild(infoBar);


// Image element which will display the clicked image inside the lightbox.
var lightboxImg = document.createElement('img');
lightboxImg.className = 'lightbox-img';
lightboxImg.setAttribute('data-lbo', '');
lightboxImg.setAttribute('alt', '');
imageContainer.appendChild(lightboxImg);


// H2 element which will display clicked images ALT-data as title in LBO.
var imageData = document.createElement('h3');
imageData.className = 'image-data';
infoBar.appendChild(imageData);


// flex-container for buttons at top right corner inside LBO.
const infoBarBtns = document.createElement('div');
infoBarBtns.className = 'info-bar-btns';
infoBar.appendChild(infoBarBtns);


// Creates fullscreen button on LBO.
const fullScreen = document.createElement('a');
fullScreen.className = 'fullscreen-btn';
fullScreen.innerHTML = fullscreenIcon;
fullScreen.title = 'View Fullscreen';
infoBarBtns.appendChild(fullScreen);


// btn for image download (download-icon).
const imageDownload = document.createElement('a');
imageDownload.className = 'image-download';
imageDownload.setAttribute('href', '');
imageDownload.innerHTML = downloadIcon;
imageDownload.title = 'Download Image';
infoBarBtns.appendChild(imageDownload);


// Link Element as a close button for LBO.
const lightClose = document.createElement('a')
lightClose.className = 'image-close';
lightClose.innerHTML = closeIcon;
lightClose.title = 'Close Lightbox';
infoBarBtns.appendChild(lightClose);


// Flex-container to keep all elements below Lightbox-image inline.
const slideBar = document.createElement('div');
slideBar.className = 'slide-bar';
imageContainer.appendChild(slideBar);


// button to move to previus picture in gallery.
const previousBtn = document.createElement('a');
previousBtn.className = 'previous-btn';
previousBtn.innerHTML = prevIcon;
previousBtn.title = 'Previous Image';
slideBar.appendChild(previousBtn);


// Info slot in ligthbox to show current and total amount of pictures in gallery.
var slideInfo = document.createElement('h3');
slideInfo.className = 'slide-info';
slideBar.appendChild(slideInfo);
slideInfo.innerHTML = '';


// button to move to next picture in gallery.
const nextBtn = document.createElement('a');
nextBtn.className = 'next-btn';
nextBtn.innerHTML = nextIcon;
nextBtn.title = 'Next Image';
slideBar.appendChild(nextBtn);


// Will change the cursor to pointer when hovering over image containing "data-lbo" attribute.
document.querySelectorAll('img').forEach(img => {
    if (img.hasAttribute('data-lbo')) {
        img.style.cursor = 'pointer';
        lightboxImg.style.cursor = 'zoom-in';
    }
});



// FUNCTION TO OPEN THE LIGHTBOX OVERLAY

// EventListener to open Lightbox Overlay on 'click' for all the IMG elements on document that contain "data-lbo" attribute.
// If many images on document contain same "data-lbo" attribute value, LBO will create a gallery of all the images with same value.
document.querySelectorAll('img').forEach(img => {
    if (img.hasAttribute('data-lbo')) {
        img.addEventListener('click', function() {
            lightBox.style.display = 'flex'
            lightboxImg.src = img.getAttributeNode('src').value;
            lightboxImg.alt = img.getAttributeNode('alt').value;
            lightboxImg.getAttributeNode('data-lbo').value = img.getAttributeNode('data-lbo')?.value;
            imageData.innerHTML = lightboxImg.alt;
            if (img != lightboxImg) {       // prevents info search on click in lightbox (would build up duplicates in gallery array).
                getSlideInfo();
                getDownloadInfo();
            }
        });
    }   
});
    


// GET SLIDE INFO FOR LBO GALLERY
        
// Collects all the image SRC and ALT values from document on an array.
// Function will print collected information as slide information on Lightbox overlay.
var imageArray = []; // Creates empty array for images.
var altArray = []; // Creates empty array for alt-data.
function getSlideInfo() {
    document.querySelectorAll('img').forEach(img => {
        if (img.getAttributeNode('data-lbo')?.value == lightboxImg.getAttributeNode('data-lbo').value && img.getAttributeNode('data-lbo').value != '') {
            if (!imageArray.includes(img.getAttributeNode('src').value)) {  // Checks if imageArray already includes same img-"src". Prevents duplicates.
                imageArray.push(img.getAttributeNode('src').value); // Adds img "src" attributes to imageArray.
                altArray.push(img.getAttributeNode('alt').value); // Adds img "alt" attributes to altArray.
            }
        } 
    });
    var slideTotal = imageArray.length;
    var currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value); 
    if (lightboxImg.getAttributeNode('data-lbo').value == '') { // If there is no data-lbo value, slide-info and browsing is disabled.
        slideInfo.innerHTML = '';
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        slideInfo.innerHTML = ((currentSlide + 1)+ ' of ' +slideTotal); // Prints Slide information to lightbox. +1 to currentSlide get rid of the 0 index in array for slide counter.
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}



// GET DOWNLOAD INFO

// Function goes through all images on document, if image has 'data-download' -attribute and 'src' -attribute matches to the image presented in -
// Lightbox Overlay, download button is allocated for that specific image inside Overlay.
function getDownloadInfo() {
    document.querySelectorAll('img').forEach(img => {
        if ((img.hasAttribute('data-download')) && (img.getAttributeNode('src').value == lightboxImg.getAttributeNode('src').value)) {
            imageDownload.style.display = 'flex';
            lightboxImg.setAttribute('data-download', '');
            imageDownload.href = lightboxImg.getAttributeNode('src').value;
            imageDownload.setAttribute('download', '');
        } else {
            imageDownload.style.display = 'none';
        }
    });
}



// NEXT IMAGE BUTTON & NEXT IMAGE ARROW KEY

// Function to move on to next picture in lightbox gallery. 
// Moves to next SRC and ALT index on array and prints the values to lightbox for corresponding image.
nextBtn.addEventListener('click', function() {
    lightboxImg?.removeAttribute('data-download', '');
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
    if (currentSlide + 1 < imageArray.length) {
        currentSlide++;
        lightboxImg.src = imageArray.at(currentSlide);
        lightboxImg.alt = altArray.at(currentSlide);
        imageData.innerHTML = lightboxImg.alt;
        imageArray = []; // Emptys array before new info search;
        altArray = []; // Emptys array before new info search;
        getSlideInfo();
        getDownloadInfo();
    } else {
        lightboxImg.classList.add('end-shake');
        getDownloadInfo();
        setTimeout(()=> {
            lightboxImg.classList.remove('end-shake');
        }
        ,500);
    }
});


// Function to move to next image in gallery, but with 'keydown' event on 'ArrowRight'.
document.addEventListener('keydown', function(e) {
    if (e.code == 'ArrowRight') {
    lightboxImg?.removeAttribute('data-download', '');
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
        if (currentSlide + 1 < imageArray.length) {
            currentSlide++;
            lightboxImg.src = imageArray.at(currentSlide);
            lightboxImg.alt = altArray.at(currentSlide);
            imageData.innerHTML = lightboxImg.alt;
            imageArray = []; // Emptys array before new info search;
            altArray = []; // Emptys array before new info search;
            getSlideInfo();
            getDownloadInfo();
        } else {
            lightboxImg.classList.add('end-shake'); // This function adds shake animation when you reach end of gallery.
            getDownloadInfo();
            setTimeout(()=> {
                lightboxImg.classList.remove('end-shake');
            }
            ,500); // This is .5s timeout that resets shake animation. This way it can shake again, if user pushes button again.
        }
    }
});



// PREVIOUS IMAGE BUTTON & PREVIOUS IMAGE ARROW KEY

// Function to move on to previous picture in lightbox gallery. 
// Moves to previous SRC and ALT index on array and prints the values to lightbox for corresponding image.
previousBtn.addEventListener('click', function() {
    lightboxImg?.removeAttribute('data-download', '');
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
    if (currentSlide > 0) {
        currentSlide--;
        lightboxImg.src = imageArray.at(currentSlide);
        lightboxImg.alt = altArray.at(currentSlide);
        imageData.innerHTML = lightboxImg.alt;
        imageArray = []; // Emptys array before new info search;
        altArray = []; // Emptys array before new info search;
        getSlideInfo();
        getDownloadInfo();
    } else {
        lightboxImg.classList.add('end-shake'); // This function adds shake animation when you reach end of gallery.
        getDownloadInfo();
        setTimeout(()=> {
            lightboxImg.classList.remove('end-shake');
        }
        ,500); // This is .5s timeout that resets shake animation.
    }
});


// Function to move to previous image in gallery, but with 'keydown' event on 'ArrowLeft'.
document.addEventListener('keydown', function(e) {
    if (e.code == 'ArrowLeft') {
        lightboxImg?.removeAttribute('data-download', ''); 
        currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
        if (currentSlide > 0) {
            currentSlide--;
            lightboxImg.src = imageArray.at(currentSlide);
            lightboxImg.alt = altArray.at(currentSlide);
            imageData.innerHTML = lightboxImg.alt;
            imageArray = []; // Emptys array before new info search;
            altArray = []; // Emptys array before new info search;
            getSlideInfo();
            getDownloadInfo();
        } else {
            lightboxImg.classList.add('end-shake'); // This function adds shake animation when you reach end of gallery.
            getDownloadInfo();
            setTimeout(()=> {
                lightboxImg.classList.remove('end-shake');
            }
            ,500); // This is .5s timeout that resets shake animation.
        }
    } 
});



// QUICK ZOOM IN TO 125% SIZE

// Click function to zoom in on lightbox image (one click zooms in, secont click back to normal).
// Hides all the slide information while zoom in function is active.
// Cursor changes between zoom-in and zoom-out when you hover on image.
lightboxImg.addEventListener('click', function() {
    if (lightboxImg.style.scale == '1.25') {
        lightboxImg.style.scale = '1';
        lightboxImg.style.cursor = 'zoom-in';
        infoBar.style.display = 'flex';
        slideBar.style.display = 'flex';
        if (lightboxImg.getAttributeNode('data-lbo').value != '') {
            previousBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    } else {
        lightboxImg.style.scale = '1.25';
        lightboxImg.style.cursor = 'zoom-out';
        infoBar.style.display = 'none';
        slideBar.style.display = 'none';
    }
});



// FULLSCREEN BUTTON 

// Click function for 'fullScreen btn' to open Lightbox Image in fullscreen mode. Working depends on browser and device fullscreen support.
fullScreen.addEventListener('click', function() {
    lightboxImg.requestFullscreen();
})



// CLOSING THE LIGHTBOX OVERLAY

// EventListener for close button inside the lightbox overlay. Will close Lightbox.
lightClose.addEventListener('click', function() {
    lightboxImg?.removeAttribute('data-download', '');
    lightBox.style.display = 'none';
    lightboxImg.style.transform = 'scale(1)';
    imageArray = [];
    altArray = [];
});


// EventListener for 'BACKSPACE' key while lightbox overlay is open. Will close Lightbox.
document.addEventListener('keydown', function(e) {
    if (e.code == 'Backspace') {
        lightboxImg?.removeAttribute('data-download', '');
        lightBox.style.display = 'none';
        lightboxImg.style.transform = 'scale(1)';
        imageArray = [];
        altArray = [];
    }
});


// EventListener for 'ESCAPE' key while lightbox overlay is open. Will close Lightbox.
document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        lightboxImg?.removeAttribute('data-download', '');
        lightBox.style.display = 'none';
        lightboxImg.style.transform = 'scale(1)';
        imageArray = [];
        altArray = [];
    }
});

