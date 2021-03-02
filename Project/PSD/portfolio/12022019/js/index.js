
let current = document.getElementsByClassName('item'),
    roundyDeg = document.getElementById('left-menu-roundy'),
    lengthItem = current.length,
    itemIcon = document.getElementsByClassName('item-icon'),
    leftHeader = document.getElementsByClassName('left-header'),
    roundyDot = document.getElementsByClassName('roundyDot'),
    showOf = document.getElementsByClassName('show');
    
let setColor = [
    "rgb(210, 96, 247)",
    "rgb(1, 209, 167)",
    "rgb(248, 75, 6, 2)", 
    "rgb(255, 117, 24)"
];

document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < lengthItem; i++) {
        current[i].addEventListener('click',function() {
            let values = i * 90;
            roundyDeg.style.transform = "rotate("+values+"deg)";


            
            for(let j = 0; j < lengthItem; j++) {
                current[j].classList.remove('color-icon');
                this.classList.add('color-icon');
                
                itemIcon[j].removeAttribute("style");
            
                let colorIcon = setColor[i];               
                itemIcon[i].style.color = colorIcon;
                leftHeader[0].style.backgroundColor = colorIcon;
                
                roundyDot[0].style.backgroundColor = colorIcon;
                showOf[j].style.opacity = 0;
                showOf[i].style.opacity = 1;

                
            }
        })
    }
})


