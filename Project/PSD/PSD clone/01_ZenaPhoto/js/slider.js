let listSlide = document.getElementsByClassName('slide-img'),
    iconRight = document.getElementById('icon-right');
    iconLeft = document.getElementById('icon-left');

    
let number = 0;
let lengthListSlide = listSlide.length - 1;

    iconRight.onclick =()=> {
        iconLeft.style.opacity = '1';
        if(number < lengthListSlide) {      
            listSlide[number].style.marginLeft = '-27%';
            console.log(number);
            number++;
        }
        else {    
            iconRight.style.opacity = '0';
        }
}
    iconLeft.onclick =()=> {
        if(number == 1) {
            iconLeft.style.opacity = '0';
            listSlide[number-1].removeAttribute('style');
            number--;
            console.log(number);
        }
        else {
            listSlide[number-1].removeAttribute('style');
            console.log(number);
            number--;
            iconRight.style.opacity = '1';
        }
    }
//----------------end slider.