let menuToggle = document.getElementById('menu-toggle');
let banner = document.getElementById('banner');
let menu = document.getElementById('menu');
let count = 0;
let page = document.getElementById('page');
console.log(page.offsetWidth);





menuToggle.onclick = ()=> {
    menu.classList.toggle('openX');
    console.log(count);
    
    (count % 2 == 0) ? 
    [
        banner.classList.add('open-menu')
    ] :
    [
        banner.classList.remove('open-menu')
    ];
    count++;
}

// window.addEventListener('DOMContentLoaded', (event) => {

//     myFunction();
//     function myFunction() {
//     var x = screen.width;
//     var y = "Total height: " + screen.height + "px";
//     console.log(x);
//     console.log(y);
//     let z = (600 * x) / 1440;
//     console.log(z);
//     banner.style.left = z+"px";

//     let header = document.getElementById('header');
    
//     if(header.offsetWidth = 1000) {
//         alert(header.offsetWidth);
//     }
//     }
// });

// height = 50% = 90px; w = 1440- man hinh.;
// height = x; w = (man hinh - tang gian);

window.onresize = function(event) {
    let header = document.getElementById('header');
    // w = width;
    let w = header.offsetWidth;
    // h = height;
    // 3000 > w > 1300
    let h = (header.offsetWidth * 571) / 1440;
    if(w > 1300) {
        header.style.height = h + "px";
        
    }
            
     
    
}