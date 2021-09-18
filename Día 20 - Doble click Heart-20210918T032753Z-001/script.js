const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

/*  Probar 
loveMe.addEventListener('dblclick', (e) => {
    console.log('123')
} ) */


loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        //console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            //createHeart(e)
            //console.log(123);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
  
}