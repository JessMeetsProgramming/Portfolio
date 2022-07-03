window.onload = function() {


    // add event listener to each of the images and call function on click event
    var images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", swapImg);
    }

    function swapImg() {

        // get relevant elements
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");

        // get the style values for each image (because they are not inline styles)
        var styles1 = window.getComputedStyle(img1);
        var styles2 = window.getComputedStyle(img2);
        var styles3 = window.getComputedStyle(img3);

        
        // toggle which image is displayed
        if (styles1.display == "block") {            
            img1.style.display = "none";
            img2.style.display = "block";
        } else if (styles2.display == "block") {
            img2.style.display = "none";
            img3.style.display = "block";
        } else if (styles3.display == "block") {
            img3.style.display = "none";
            img1.style.display = "block";
        }
    }

    

}