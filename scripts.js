window.onload = function() {

    var imageIndex = 0;
    var mobIndex = 3;
    var pcIndex;
    
    // add event listener to each of the images and call function on click event
    var images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", swapImg);
    }
    
    function swapImg() {

        imageIndex++; 
        // hide current image
        images[imageIndex-1].style.display = "none";
        // on 3rd click reset index 
        if (imageIndex == 3) {imageIndex = 0} // desktop images
        if (imageIndex == 6) {imageIndex = 3} // mobile images
        // show next image
        images[imageIndex].style.display = "block";
        // save current index
        if (imageIndex <= 2) {pcIndex = imageIndex} 
        if (imageIndex >= 3) {mobIndex = imageIndex} 
    }


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
        // set counter to previously saved index
        imageIndex = mobIndex;
         
    }

    function togglePC() {

        //show desktop images
        document.getElementById("desktop").style.display = "inline-block";
        // hide mobile images
        document.getElementById("mobile").style.display = "none";
        // set counter to previously saved index
        imageIndex = pcIndex;
    }


}