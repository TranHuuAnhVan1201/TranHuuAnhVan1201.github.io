let iconMenuToggle = document.getElementById('menu-toggle');
let siteHeader = document.getElementById('site-header');
console.log('site-header');
let count = 0;
iconMenuToggle.onclick = ()=> {
    siteHeader.classList.toggle('open');
    
    count++;

    if(count % 2 == 0) {
        iconMenuToggle.classList.add('removeX');
        iconMenuToggle.classList.remove('openX');
    }
    else {
        iconMenuToggle.classList.remove('removeX');
        iconMenuToggle.classList.add('openX');
    }
}

// let navAnimation = document.getElementsByClassName('nav-anim');
// let idContentArea =document.getElementsByClassName('area-hide');
// for(let i=0; i < navAnimation.length; i++) {
//     navAnimation[i].onclick = ()=> {
//         for(let j = 0; j < idContentArea.length; j++) {
//             idContentArea[j].classList.remove('hide-off');
//         }
//         idContentArea[i].classList.add('hide-off');
//     }
// }

let navSection = document.getElementsByClassName('nav-anim');
for(let i = 0; i < navSection.length; i++) {
    navSection[i].onclick = ()=> {
        let ndhienthi = navSection[i].getAttribute('data-section');
        let hienthi = document.getElementById(ndhienthi);
        let idContentArea = document.getElementsByClassName('area-hide');

        for(let j = 0; j < idContentArea.length; j++) {
            idContentArea[j].classList.remove('hide-off');
        }
        hienthi.classList.add('hide-off');
        siteHeader.classList.remove('open');
        
    }
}
filter();
function filter(){
    //Class:filter, index.html - row: 134
    //Btn.
    let btnFilter = document.getElementsByClassName('filter');
    for(let i = 0; i < btnFilter.length; i++) {
        btnFilter[i].onclick = ()=> {
            let ndhienra = btnFilter[i].getAttribute('data-group');
            let hienthi = document.getElementsByClassName(ndhienra);
        //B1: Current in all-show ! -> dele all-show.
            let allShow = document.getElementById('project-flex');
            allShow.classList.remove('all-show');
        //B2: item - visibility: hidden, display: none;
        //B2: item.show: visibility: visible; display: block;
        //B2: current: item.show = "show";
        //B2: dele-show in all-item = "hide item";
            let item = document.getElementsByClassName('item'); 
            for(let z = 0; z < item.length; z ++) {
                item[z].classList.remove('show');              
            }
            
        //B3: Click All - visibility - all item.
        //B3: add all-show.
            if(ndhienra == "category_all") {
                allShow.classList.add('all-show');
            }
        //B4: visibility: item - className: [data-group:] {examp: category_html, category_react}
        //B4: add className: show.
            for(let j = 0; j < hienthi.length; j++) {
                hienthi[j].classList.add('show');
                
            }
            //B5: btnFilter -
            for(let g = 0; g < btnFilter.length; g++) {
                btnFilter[g].classList.remove('active');
            }
            btnFilter[i].classList.add('active');
        }
        
            
    }
}

let setColor = [
    {
        bgColor: "linear-gradient(to bottom,rgb(10,109, 121), rgb(11, 156, 114))",
        bgContainerContent: "rgb(68,68,68)",
        btnColorIconMainMenu: "#fea621",
        colorBody: "rgb(11,163,118)",
        colorSpan: "123",

    },

    {
        bgColor: "#6c757d",
        bgContainerContent: "linear-gradient(#9d2bf3,#5050f5)",
        btnColorIconMainMenu:"#5e2fd6",
        colorBody: "black",
        colorSpan: "#5e2fd6"
    },
    {
        bgColor: "linear-gradient(#fe6d72,#fea621)",
        bgContainerContent: "linear-gradient(#fe6d72,#fea621)",
        btnColorIconMainMenu:"#fea621",
        colorBody: "black",
        colorSpan: "#fea621"
    }
]

function btnSetColor() {
    let bgColor = document.getElementById('img-bg');
    let bgContainerContent = document.getElementById('page-container');
    let btnMainMenu = document.getElementsByClassName('link-text');
    let colorBody = document.body;
    let colorSpan = document.getElementById('about').getElementsByTagName('span');
   
    bgColor.style.background = setColor[2].bgColor;
    bgContainerContent.style.background = setColor[2].bgContainerContent;
    for(let i = 0; i < btnMainMenu.length; i++) {
        btnMainMenu[i].style.backgroundColor = setColor[2].btnColorIconMainMenu;
    }
    colorBody.style.color = setColor[2].colorBody;
    for(let j = 0; j < colorSpan.length; j++) {
        colorSpan[j].style.color = setColor[2].colorSpan;
    }
   
}

