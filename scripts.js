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

    ////////////////////////////////////////////////////////////////

    /* video reset */

    var video = document.getElementById("video");
    video.addEventListener('ended', function(){
        // Reset the video to 0
        video.currentTime = 0;
    });

} 

