const slider_List = document.querySelector('.slider_List')
const items = document.querySelectorAll('.item')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const item_Width = 400;
const slide_speed = 300;
const item_len = items.length; 
const itemfirst = document.querySelector('.item:first-child')
const itemlast = document.querySelector('.item:last-child')
const firstNode = itemfirst.cloneNode(true);
const lastNode = itemlast.cloneNode(true);

let carindex = 0;


slider_List.appendChild(firstNode);
slider_List.insertBefore(lastNode, slider_List.firstElementChild); // last Node를 첫번째 자식요소 
slider_List.style.width = `${item_Width*(item_len+2)}px`
slider_List.style.transform = `translate(-${item_Width}px)`


next.addEventListener('click', function(){
    if(carindex  <= item_len -1 ){
            slider_List.style.transition = slide_speed + "ms";
            slider_List.style.transform = `translate(-${item_Width*(carindex +2)}px)`
    }
    if (carindex  === item_len-1){
        setTimeout(function(){
        slider_List.style.transition = '0s' 
        slider_List.style.transform = `translate(-${item_Width}px)`
    }, 300)
        carindex  = -1
    }
    carindex++
})


prev.addEventListener('click', function(){
    if(carindex >= 0){
        slider_List.style.transition = slide_speed + "ms";
        slider_List.style.transform = `translate(-${item_Width*(carindex)}px)`
    }
    if(carindex === 0){    
        setTimeout(function(){
        slider_List.style.transition = '0s' 
        slider_List.style.transform = `translate(-${item_Width * item_len}px)`
    }, 300)
    carindex = item_len
}
--carindex
})
