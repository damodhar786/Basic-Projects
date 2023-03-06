let images = document.getElementsByClassName("images");

let dots = document.getElementsByClassName("dots");

let imageIndex = 0;

showImage(imageIndex);

function showImage(i){

    imageIndex += i;

    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(imageIndex > images.length - 1){
        imageIndex = 0;
    }
    if(imageIndex < 0){
        imageIndex = images.length - 1;
    }

    images[imageIndex].style.display = "block";
    dots[imageIndex].className += " active";

}




