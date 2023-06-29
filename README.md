# lightbox-overlay 1.01
Lightbox Overlay is JavaScript "software" that creates image overlay with browsing function for multiple images on any HTML page with images. Overlay script is fully automated and can be easily activated by adding single attribute on any image in your HTML document, no link tag required.


1. What is Lightbox Overlay?
2. How to setup Lightbox Overlay?
3. Using Lightbox Overlay.
4. Browser support.
5. Known bugs.
6. More information.


----------------------------
1. WHAT IS LIGHTBOX OVERLAY?	
----------------------------
	Lightbox Overlay is free JavaScript "software" that creates image overlay with browsing function for multiple images on any HTML page. 
	Overlay script is fully automated and can be easily activated by adding single attribute on any image in your HTML document. No link tag required. 


---------------------------------
2. HOW TO SETUP LIGHTBOX OVERLAY?
---------------------------------
	1. Setup lightbox overlay by downloading latest release of 'lightbox.css' and 'lightbox.js' files from GitHub.
	
	2. Place both files on your webserver in htdocs or specific folder where your website files are located. You can also create subfolder.
	
	3. Link both files to HTML document, where you wish to use lightbox overlay for your images:
	
		- Add link 'lightbox.css' file anywhere in <head> section of HTML document. Example: 
		  <link rel="stylesheet" href="location/of/lightbox.css">
		  
		- Add link to 'lightbox.js' file to END of <body> section of HTML document. Example:	
	  	<script src="location/of/lightbox.js"></script>
	  	
	4. To activate lightbox in HTML, simply add 'lightbox-data' attribute on any image element you wish to view in Lightbox Overlay.
		
		- This is an example image code:
		<img src="location/of/image.jpg" lightbox-data="myImages" alt="description of my image">
	
	5. Enjoy The Overlay.


-------------------------
3. USING LIGHTBOX OVERLAY	
-------------------------
	- When image on your HTML document has 'lightbox-data' attribute, it works as link to open image in lightbox overlay.

	- ALT attribute from your image element will be printed in lightbox overlay as title of the image.

	- You can move back and fort inside lightbox by using arrow buttons in lightbox or arrow buttons on your keyboard.

	- By clicking the image inside lightbox overlay, image will zoom-in to 150% size. Second click will return normal size.

	- You can close lightbox overlay by using close-button, 'BACKSPACE'-button on keyboard, or 'ESC'-button on keyboard. 


------------------
4. BROWSER SUPPORT
------------------
	Lightbox Overlay works on all popular browsers:

	- Mozilla Firefox
	- Google Chrome
	- Opera
	- Safari
	- Microsoft Edge
	- Samsung Internet (Mobile Only)


-------------
5. KNOWN BUGS
-------------
	- On some screen sizes, image zoom leaves part of image (left) unscrollable.
	- If you change font-family or font-size of overlay elements, you might need to make changes to position values.


-------------------
6. MORE INFORMATION
-------------------
	More information about Lightbox Overlay at:
	(( PAGE COMING SOON ))
