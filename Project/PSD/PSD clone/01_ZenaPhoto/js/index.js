let setColor = [
    {
        colorBg: 'rgb(255,255,255)',
        colorLogo:'rgb(0,0,0)',
        colorTitle:'rgb(155,155,155)', 
        colorFooter:'#000'
    },
    {
        colorBg: 'rgb(223,220,214)',
        colorLogo:"rgb(0,0,0)",
        colorTitle :'rgb(136, 118, 86)',
        colorFooter: '#333'
    },

    {
        colorBg: 'rgb(0,0,0)', 
        colorLogo : 'rgb(255,255,255)',
        colorTitle: 'rgb(255,0,85)', 
        colorFooter:'rgb(153,153,153)'
    }
]

// Hiệu ứng Button SWAP-SKIN.
let btn = document.getElementById('btn'),
    switcher = document.getElementById('switcher'),
    show = document.getElementById('show');
let count = 0;
document.addEventListener('DOMContentLoaded', function() {
    btn.onclick = ()=> {
        console.log('dmm2');
        count++;
        switcher.classList.remove('active');
        switcher.classList.remove('active2');
        btn.classList.remove('active');
        btn.classList.remove('active2');

        show.removeAttribute('style');
        (count % 2 ==0) ? 
        [
            switcher.classList.add('active'),
            
            btn.classList.add('active2'),
            switcher.removeAttribute('style')
        ] : 
        [
            switcher.classList.add('active2'),
            
            btn.classList.add('active'),
            show.style.boxShadow = '0 0 100px #EBB3A9'
        ];

    }
})

//Hiệu ứng đổi màu Nền.
//setColor.
let colorLogoHeader = document.getElementById('color-Logo'),
    colorTitleHeader = document.getElementById('color-Title'),
    colorFooterTitle = document.getElementById('footer-title'),
    colorFooterIcon = document.getElementById('footer-icon'),
    menuContainer = document.getElementById('menu-container'),
    bannerTitle =document.getElementById('banner-title');

    
let skin = document.getElementsByClassName('skin'); 
let btnApp = document.getElementById('btn-app');

    for(let i = 0; i < skin.length; i++) {
      
        skin[i].onclick = ()=> {   
           
            btnApp.onclick =()=> {
                document.body.style.backgroundColor = setColor
                [i].colorBg;
                colorLogoHeader.style.color = setColor[i].colorLogo;
                colorTitleHeader.style.color = setColor[i].colorTitle;
                colorFooterIcon.style.color = setColor[i].colorLogo;
                colorFooterTitle.style.color = setColor[i].colorLogo;
                menuContainer.style.backgroundColor = setColor[i].colorBg;
                bannerTitle.style.color = setColor[i].colorLogo;
                
            }
        }
    }

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementsByClassName("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        let hideHeader = document.getElementsByClassName('header');
        let hideFooter = document.getElementById('index-footer');
        console.log(hideFooter);
        console.log(hideHeader);
        for(let i = 0; i < img.length; i++) {
            img[i].onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
                hideHeader[0].classList.add('hide-header-footer');
                hideFooter.classList.add('hide-header-footer');
            }
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close");
        // When the user clicks on <span> (x), close the modal
        span[0].onclick = function() {
          modal.style.display = "none";
          hideHeader[0].classList.remove('hide-header-footer');
          hideFooter.classList.remove('hide-header-footer');
        }
