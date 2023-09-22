*******
* LBO *
*******

Lightbox Overlay - LBO
(c) Timo Anjala
Version: 1.12


1. What is Lightbox Overlay (LBO)?
2. How to setup Lightbox Overlay?
3. Using Lightbox Overlay.
4. Using Download function.
5. Browser support.
6. Known bugs.
7. More information.




1. WHAT IS LIGHTBOX OVERLAY?	
----------------------------
	Overlay (LBO) is JavaScript “WIDGET" that creates an independent image viewing layer with user-interface on any web-document. 
	LBO helps to create easy to use image galleries with brwosing function, fullscreen view, and image download on any web-document. 
	LBO is fully automated script and very easy to implement to your project. You need only basic understanding of HTML. 



2. HOW TO SETUP LIGHTBOX OVERLAY?	
---------------------------------
	1. Setup Lightbox Overlay by downloading latest release of 'lightbox_overlay.css' and 'lightbox_overlay.js' files from GitHub.
	
	2. Place both files on your webserver in htdocs or specific folder where your website files are located. You can also create subfolder.
	
	3. Link both files to HTML document, where you wish to use lightbox Overlay for your images:
		> Add link 'lightbox_overlay.css' file anywhere in <head> section of HTML document. Example: 
		  
			<link rel="stylesheet" href="location/of/lightbox_overlay.css.css">
		  
		> Add link to 'lightbox_overlay.js' file to END of <body> section of HTML document. Example:	
	  	
			<script src="location/of/lightbox_overlay.js"></script>
	  	
	4. To activate lightbox in HTML, simply add 'lightbox-data' attribute on any image element you wish to view in Lightbox Overlay.
		
		> This is an example image code (myImages is example gallery name):
			
		<img src="location/of/image.jpg" lightbox-data="myImages" alt="description of my image">
	
	5. Enjoy The Overlay.



3. USING LIGHTBOX OVERLAY	
-------------------------
	- When image on your HTML document has 'lightbox-data' -attribute, it works as link to open image in Lightbox Overlay.

	- Adding the same 'lightbox-data' attribute value (eg. "myImages") menthioned in setup, allocates Lightbox Overlay gallery.
		> Script will collect all images with same value and creates browsable gallery.
		> Page can include many galleries with different names, script is dynamic.

	- ALT-attribute from your image element will be printed in Lightbox Overlay as title of the image.

	- You can move backwards and forward inside Lightbox Overlay by using arrow-buttons on screen or arrow-buttons on your keyboard.

	- By clicking the image inside Lightbox Overlay, image will zoom-in to 125% size. Second click will return normal size.

	- By clicking 'fullscreen' -button, you can view and browse images in device fullscreen.
		> In fullscreen mode, browsing works with arrow buttons on your keyboard and swipes on mobile screen.

	- You can close lightbox overlay by using close-button, 'BACKSPACE'-button on keyboard, or 'ESC'-button on keyboard. 



4. USING DOWNLOAD FUNCTION	
--------------------------
	- You can allocate download button for any image you add to Lightbox Overlay. You need to add 'download' attribute to image
	  element.

		eg. <img src="location/of/image.jpg" download lightbox-data="myImages" alt="description of my image">
		eg. <img src="location/of/image.jpg" lightbox-data="myImages" download alt="description of my image">
		eg. <img src="location/of/image.jpg" lightbox-data="myImages" alt="description of my image" download>



5. BROWSER SUPPORT
------------------
	Lightbox Overlay works on following popular browsers:

	- Mozilla Firefox
	- Google Chrome
	- Opera
	- Safari
	- Microsoft Edge
	- Samsung Internet (Mobile)



6. KNOWN BUGS
-------------
	- On mobile devices, too fast browsing might skip images.
	- On some screen sizes, image zoom leaves part of image (left) unscrollable.
		> Fullscreen function is not efected.

	!!! NOTE: If you find solution to fix these problems, please contact me: timo.anjala@gmail.com. Anyone can become contributor.



7. MORE INFORMATION
-------------------
	More information about Lightbox Overlay at:

	https://timoanjala.com/projects/lightbox.html
