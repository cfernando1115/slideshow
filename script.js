const imageContainer=document.querySelector('.images');
    
const wait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    })
}

const hideImage=function(img){
    img.setAttribute('style','display:none');
}

    
var loadNPause=async function(img){
    try {
        var imageEl=document.createElement('img');
        imageEl.src=await img;
        imageContainer.append(imageEl);
        await wait(2);   
        hideImage(imageEl);   
    } catch (error) {
        console.log(error.message);
    }
};


(async function(){
    try {
        await loadNPause('img/img-1.jpg');
        await wait(2);
        await loadNPause('img/img-2.jpg');
        await wait(2);
        await loadNPause('img/img-3.jpg');
    } catch (error) {
        console.log(error.message);
    }
})();


    
    



