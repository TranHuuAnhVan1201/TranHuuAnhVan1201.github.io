//----show menu humburger.
// B1: Click icon -> toggle: active-animation.
// B1: - active-animation vào iconHumburger-container.
// B2: Click % 2 # 0: show (active5).
// B2: Click % 2 ==0: hide show (active4).

let humburger = document.getElementById('humburger');
let showMenu = document.getElementById('show-menu');
let countX = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    humburger.onclick = ()=> {
        countX++
        humburger.classList.toggle('active-animation');
        (countX % 2 == 0) ?
        [
            menuContainer.classList.add('active5'),
            menuContainer.classList.remove('active4')
        ] :
        [
            menuContainer.classList.remove('active5'),
            menuContainer.classList.add('active4')
            
        ];
    }

})