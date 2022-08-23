window.onload = function() {

    var imageIndex = 0;
    
    // add event listener to each of the images and call function on click event
    var images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", swapImg);
    }
    
    function swapImg() {

        imageIndex++; 
        // hide current image
        images[imageIndex-1].classList.remove("activeImg"); 
        // on 3rd click reset index 
        if (imageIndex == 3) {imageIndex = 0} // desktop images
        if (imageIndex == 6) {imageIndex = 3} // mobile images
        // show next image
        images[imageIndex].className += " activeImg";
    }

    
///////////////////////////////////////////////////////////////////////////////////

    //add event listener to icons
    var pc = document.getElementById("pc");
    var mob = document.getElementById("mob");
    pc.addEventListener("click", togglePC);
    mob.addEventListener("click", toggleMob);
    
    
    function toggleMob() {
               
        // show mobile images
        document.getElementById("mobile").style.display = "inline-block";
        // hide desktop images
        document.getElementById("desktop").style.display = "none";

        //remove active class and add to mobile image
        images[imageIndex].classList.remove("activeImg");
        images[3].className += " activeImg";

        // set counter to first image
        imageIndex = 3;

    }

    function togglePC() {

        //show desktop images
        document.getElementById("desktop").style.display = "inline-block";
        // hide mobile images
        document.getElementById("mobile").style.display = "none";

        //remove active class and add to desktop image
        images[imageIndex].classList.remove("activeImg");
        images[0].className += " activeImg";

        // set counter to first image
        imageIndex = 0;
    }


    /* ---------change layout to horizontal slides for small devices------------ */
/*
    // get relevant elements 
    var left = document.getElementsByClassName("nav-left");
    var right = document.getElementsByClassName("nav-right");
    var description = document.getElementsByClassName("description");  
    var examples = document.getElementsByClassName("examples");

    // add click event listener and assign variables from array 
    for (i = 0; i < left.length; i++) {
        left[i].addEventListener("click", navleft);
        right[i].addEventListener("click", navright); 
        description[i];
        examples[i];   
    }
    
    function navleft() {       
        // check which element was selected  
        if (this.id == "nav-left1") {
            i = 0;
        } else if (this.id == "nav-left2") {
            i = 1;
        } else {
            i = 2;
        }
        // move description on-screen
        description[i].style.transform = "translateX(0)";
        // move examples section off-screen
        examples[i].style.transform = "translateX(116%)"; 
        // swap arrow visibility
        left[i].style.opacity = "0";
        right[i].style.opacity = "1";
    }

    function navright() {
        // check which element was selected
        if(this.id == "nav-right1") {
            i = 0;
        } else if (this.id == "nav-right2") {
            i = 1;
        } else {
            i = 2;
        }
        // move examples on-screen
        examples[i].style.transform = "translateX(0)";
        // move examples section off-screen
        description[i].style.transform = "translateX(-116%)";  
        // swap arrow visibility
        left[i].style.opacity = "1";
        right[i].style.opacity = "0";       
    }*/

    ////////////////////////////////////////////////////////////////

    /* video reset */

    var video = document.getElementById("video");
    video.addEventListener('ended', function(){
        // Reset the video to 0
        video.currentTime = 0;
    });

} 

