const splash = document.querySelector('.splash');

//event listener to actual webpage
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('displayhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBaileyhttps://www.youtube.com/watch?v=CEuuegs6boE&t=1381s&ab_channel=ConorBailey')
    })
})





const header = document.querySelector('.header');

window.onscroll =function(){
    var top = window.scrollY;
    console.log(top);
    if (top>= 50){
        header.classList.add ('active')
    }else{
        header.classList.remove('active');
    }
}