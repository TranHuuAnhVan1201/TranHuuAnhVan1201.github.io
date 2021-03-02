let iconPlus = document.getElementsByClassName('icon-plus'),
    contentHide = document.getElementsByClassName('content-hide');
let countIconPlus = 0;
for(let i = 0 ; i < iconPlus.length; i++) {
    iconPlus[i].onclick = ()=> {
        countIconPlus++;
        contentHide[i].classList.toggle('active-menu-drop');
        iconPlus[i].classList.add('active-icon-plus-1');
        
        (countIconPlus % 2 == 0) ?
        [
            iconPlus[i].classList.add('active-icon-plus-2'),
            iconPlus[i].classList.remove('active-icon-plus-1'),
        ] :
        [
            iconPlus[i].classList.add('active-icon-plus-1'),
            iconPlus[i].classList.remove('active-icon-plus-2'),
        ]
    }
}