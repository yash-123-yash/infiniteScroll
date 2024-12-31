let imageContainer= document.querySelector(".image-conatiner");
let loader= document.querySelector(".loader");

let photosArray =[];

const count=10;
const apikey='qWfwi41DKkxzne9WjdcwJzyJaKR_0LZd_WmVcvh8KBc';

const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
    }catch(error){
        // error
    }
    
}

getPhotos();