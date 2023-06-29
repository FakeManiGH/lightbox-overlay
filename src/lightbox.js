// Lightbox Overlay v.1.01
// Lightbox Overlay "original" script was written by (c) Timo Anjala.
// Lightbox Overlay is free to use in any personal or commercial projects, free of charge.
// Lightbox Overlay script can be modified to fit the needs of person obtaining a copy of the it.

// NOTE:    Creator Informaiton and Version must remain in all copies of the script. Any visual mentioning on website is not required.
//          If orginal script is changed, but parts of it remain in use, mentioning of the original script is required.


// Creates DIV element on document to work ligthbox gallery overlay.
const lightBox = document.createElement('div');
lightBox.className = 'lightbox';
document.body.appendChild(lightBox);


// Creates container which will hold image and image-data to center of lightbox overlay.
var imageContainer = document.createElement('div');
imageContainer.className = 'image-container';
lightBox.appendChild(imageContainer);


// Image element which will display the clicked image inside the lightbox.
var lightboxImg = document.createElement('img');
lightboxImg.className = 'lightbox-img';
lightboxImg.setAttribute('lightbox-data', '');
imageContainer.appendChild(lightboxImg);


// H2 element which will display clicked images ALT-data as title in lightbox.
var imageData = document.createElement('h3');
imageData.className = 'image-data';
imageContainer.appendChild(imageData);


// Link Element as a close button for lightbox overlay.
var lightClose = document.createElement('a')
lightClose.className = 'image-close';
lightClose.innerHTML = 'X';
lightClose.title = 'Close Lightbox';
imageContainer.appendChild(lightClose);


// Info slot in ligthbox to show current and total amount of pictures in gallery.
var slideInfo = document.createElement('h3');
slideInfo.className = 'slide-info';
imageContainer.appendChild(slideInfo);
slideInfo.innerHTML = '';


// button to move to previus picture in gallery.
var previousBtn = document.createElement('a');
previousBtn.className = 'previous-btn';
previousBtn.innerHTML = '&#9651;';
imageContainer.appendChild(previousBtn);


// button to move to next picture in gallery.
var nextBtn = document.createElement('a');
nextBtn.className = 'next-btn';
nextBtn.innerHTML = '&#9651;';
imageContainer.appendChild(nextBtn);


// Will change the cursor to pointer when hovering over image containing "lightbox-data" attribute.
document.querySelectorAll('img').forEach(img => {
    if (img.hasAttribute('lightbox-data')) {
        img.style.cursor = 'pointer';
        lightboxImg.style.cursor = 'zoom-in';
    }
});


// EventListener to open Lightbox Overlay on click for all the IMG elements on document that contain "lightbox-data" attribute.
// If many images on document contain same "lightbox-data" attribute value, lightbox will create a gallery of all the images with same value.
document.querySelectorAll('img').forEach(img => {
    if (img.hasAttribute('lightbox-data')) {
        img.addEventListener('click', function() {
            lightBox.style.display = 'flex'
            lightboxImg.src = img.getAttributeNode('src').value;
            lightboxImg.alt = img.getAttributeNode('alt').value;
            lightboxImg.getAttributeNode('lightbox-data').value = img.getAttributeNode('lightbox-data')?.value;
            imageData.innerHTML = lightboxImg.alt;
            if (img != lightboxImg) {       // prevents info search on click in lightbox (would build up duplicates in gallery array).
                getSlideInfo();
            }
        });
    }   
});
    
        
// Collects all the image SRC and ALT values from document on an array.
// Function will print collected information as slide information on Lightbox overlay.
var imageArray = [];
var altArray = [];
function getSlideInfo() {
    document.querySelectorAll('img').forEach(img => {
        if (img.getAttributeNode('lightbox-data')?.value == lightboxImg.getAttributeNode('lightbox-data').value && img.getAttributeNode('lightbox-data').value != '') {
            imageArray.push(img.getAttributeNode('src').value);
            altArray.push(img.getAttributeNode('alt').value);
        } 
    });
    imageArray.pop(); // removes the last value in array (its a duplicate from clicked image in lighbox).
    altArray.pop(); // removes the last value in array (its a duplicate from clicked image in lighbox).
    var slideTotal = imageArray.length;
    var currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value); 
    if (lightboxImg.getAttributeNode('lightbox-data').value == '') { // If there is no lightbox-data value, slide-info and browsing is disabled.
        slideInfo.innerHTML = '';
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        slideInfo.innerHTML = ((currentSlide + 1)+ ' / ' +slideTotal); // Prints Slide information to lightbox. +1 to currentSlide get rid of the 0 index in array for slide counter.
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}


// Function to move on to next picture in lightbox gallery. 
// Moves to next SRC and ALT index on array and prints the values to lightbox for corresponding image.
nextBtn.addEventListener('click', function() {
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
    if (currentSlide + 1 < imageArray.length) {
        currentSlide++;
        lightboxImg.src = imageArray.at(currentSlide);
        lightboxImg.alt = altArray.at(currentSlide);
        imageData.innerHTML = lightboxImg.alt;
        imageArray = []; // Emptys array before new info search;
        altArray = []; // Emptys array before new info search;
        getSlideInfo();
    }
});

// Same function to move to next image in gallery, but with 'keydown' event on 'ArrowRight'.
document.addEventListener('keydown', function(e) {
    if (e.code == 'ArrowRight') {
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
        if (currentSlide + 1 < imageArray.length) {
            currentSlide++;
            lightboxImg.src = imageArray.at(currentSlide);
            lightboxImg.alt = altArray.at(currentSlide);
            imageData.innerHTML = lightboxImg.alt;
            imageArray = []; // Emptys array before new info search;
            altArray = []; // Emptys array before new info search;
            getSlideInfo();
        }
    }
});


// Function to move on to previous picture in lightbox gallery. 
// Moves to previous SRC and ALT index on array and prints the values to lightbox for corresponding image.
previousBtn.addEventListener('click', function() {
    currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
    if (currentSlide > 0) {
        currentSlide--;
        lightboxImg.src = imageArray.at(currentSlide);
        lightboxImg.alt = altArray.at(currentSlide);
        imageData.innerHTML = lightboxImg.alt;
        imageArray = []; // Emptys array before new info search;
        altArray = []; // Emptys array before new info search;
        getSlideInfo();
    } 
});

// Same function to move to previous image in gallery, but with 'keydown' event on 'ArrowLeft'.
document.addEventListener('keydown', function(e) {
    if (e.code == 'ArrowLeft') { 
        currentSlide = imageArray.indexOf(lightboxImg.getAttributeNode('src').value);
        if (currentSlide > 0) {
            currentSlide--;
            lightboxImg.src = imageArray.at(currentSlide);
            lightboxImg.alt = altArray.at(currentSlide);
            imageData.innerHTML = lightboxImg.alt;
            imageArray = []; // Emptys array before new info search;
            altArray = []; // Emptys array before new info search;
            getSlideInfo();
        }
    } 
});


// Click function to zoom in on lightbox image (one click zooms in, secont click back to normal).
// Hides all the slide information while zoom in function is active.
lightboxImg.addEventListener('click', function() {
    if (lightboxImg.style.transform == 'scale(1.5)') {
        lightboxImg.style.transform = 'scale(1)';
        lightboxImg.style.cursor = 'zoom-in';
        imageData.style.display = 'block';
        lightClose.style.display = 'block';
        slideInfo.style.display = 'block';
        if (lightboxImg.getAttributeNode('lightbox-data').value != '') {
            previousBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    } else {
        lightboxImg.style.transform = 'scale(1.5)';
        lightboxImg.style.cursor = 'zoom-out';
        imageData.style.display = 'none';
        lightClose.style.display = 'none';
        previousBtn.style.display = 'none';
        slideInfo.style.display = 'none';
        nextBtn.style.display = 'none';
    }
});


// EventListener for close button inside the lightbox overlay. Will close Lightbox.
lightClose.addEventListener('click', function() {
    lightBox.style.display = 'none';
    lightboxImg.style.transform = 'scale(1)';
    imageArray = [];
    altArray = [];
});


// EventListener for 'BACKSPACE' key while lightbox overlay is open. Will close Lightbox.
document.addEventListener('keydown', function(e) {
    if (e.code == 'Backspace') {
        lightBox.style.display = 'none';
        lightboxImg.style.transform = 'scale(1)';
        imageArray = [];
        altArray = [];
    }
});

// EventListener for 'ESCAPE' key while lightbox overlay is open. Will close Lightbox.
document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        lightBox.style.display = 'none';
        lightboxImg.style.transform = 'scale(1)';
        imageArray = [];
        altArray = [];
    }
});

// EventListener for click outside the image inside the Lightbox overlay. Will close Lightbox. (Only remove commenting below this line to activate).
//lightBox.addEventListener('click', function(e){
//    if (!lightboxImg.contains(e.target)) {
//          lightBox.style.display = "none";
//          imageArray = [];
//          altArray = [];
//    }
//});