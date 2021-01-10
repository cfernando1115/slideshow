const imageContainer=document.querySelector('.images');

//promisify...
/*const loadImage=function(img){
    return new Promise(function(resolve, reject){
        el=document.createElement('img');
        el.setAttribute('src', img);
        imageContainer.append(el);
        wait(2)
        .then(()=>{
            resolve(el);
            reject(new Error('an error occurred.'));
        })
    })
}*/

    
/*loadImage('../img/img-1.jpg')
    .then((el)=>{
        hideImage(el);
        return wait(2);
    })
    .then(()=>loadImage('../img/img-2.jpg'))
    .then((el)=>hideImage(el))
    .catch(err=>console.log(err));*/

    
const wait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    })
}

const hideImage=function(img){
    img.setAttribute('style','display:none');
}

    
//async/await...
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


    
    



