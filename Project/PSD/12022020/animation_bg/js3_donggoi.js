//B1: Làm cho Slide chuyển động khi kích nút.
//B1 -> yêu cầu, biết ngta click
//B1 -> Hàm: PreviousElementSibling -> trả về trước.
//B1 -> Hàm: 
//B2: Hiệu ứng đi vào cho Chuyển động B1.
let nut = document.querySelectorAll('.chuyenslide ul li'),
    slides = document.querySelectorAll('.cacslide ul li'),
    slsl = slides.length,
    btnsL = document.querySelector('.btnsL'),
    btnsR = document.querySelector('.btnsR'),
    soLuongSlides = slides.length, //số lượng slide.
    current = 0,
    currentL = soLuongSlides;
    console.log(nut);
    


document.addEventListener("DOMContentLoaded", function () {
    //hàm thời gian: auto slide

    let tg = setInterval(function () { autoSlide() }, 2000);
    for (let i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {
            //remove all kichhoat.
            //Ngừng autoSlide ngay khi kích chuột.
            clearInterval(tg);
            for (let j = 0; j < nut.length; j++) {
                nut[j].classList.remove('kichhoat');
            }
            //add kich hoat, cho nút được kích.
            this.classList.add('kichhoat');
            let nutkichhoat = this,
                vitrinut = 0,
                nutHienTai = this;                               
                for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) { }
                // Lần về trước nó.
                // <<<<<<<<<<<
                // console.log('vi tri nut kich hoat: ' + vitrinut);
                //Để chuyển Slide.
                //B1: cho tất cả slide ẩn đi.
            for (let z = 0; z < slides.length; z++) {
                slides[z].classList.remove('active');
                slides[z].classList.remove('xuatHien');
                slides[z].classList.remove('bienMat');

                if (vitrinut == 0) {
                    slides[slides.length - 1].classList.add('bienMat');
                    slides[0].classList.add('active');
                    slides[0].classList.add('xuatHien');
                }
                else {
                    slides[vitrinut].classList.add('active');
                    slides[vitrinut].classList.add('xuatHien');
                    slides[vitrinut].previousElementSibling.classList.add('bienMat');
                }
            }
        })
    }
    //end nut[i]


    // //click nút phải.
    // btnsR.addEventListener('click', clickBtnsR);
    // function clickBtnsR() {
    //     clearInterval(tg);

    //     for (let i = 0; i < soLuongSlides; i++) {
    //         slides[i].classList.remove('active');
    //         nut[i].classList.remove('kichhoat');
    //         slides[i].classList.remove('bienMat');
    //         slides[i].classList.remove('xuatHien');
    //     }
    //     // slide hiện tại.

    //     let slideCurrent = slides[current];
    //     if (current < soLuongSlides - 1) {current = current + 1;}
    //     else {current = 0;}

    //     let slideNext = slides[current];
    //     slideNext.classList.add('active');
    //     nut[current].classList.add('kichhoat');
    //     //2 hiệu ứng.
    //     slideCurrent.classList.add('bienMat');
    //     slideNext.classList.add('xuatHien');
    // }
    // //BtnsL nút trái.
    // btnsL.addEventListener('click', function () {
    //     clearInterval(tg);
    //     for (let i = 0; i < soLuongSlides; i++) {
    //         slides[i].classList.remove('active');
    //         nut[i].classList.remove('kichhoat');
    //         slides[i].classList.remove('xuatHien');
    //         slides[i].classList.remove('bienMat');
    //         //---       
    //     }
    //     let slideCurrent = slides[current];
    //     if (current > 0) {current = current - 1;}
    //     else {current = (soLuongSlides - 1);}

    //         let slideNext = slides[current];
    //         slideNext.classList.add('active');
    //         nut[current].classList.add('kichhoat');
    //         //2 hiêu ứng.
    //         slideNext.classList.add('xuatHien');
    //         slideCurrent.classList.add('bienMat');

    // })

    function chuyenSlide(nutnao) {
        clearInterval(tg);
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove('active');
            slides[i].classList.remove('xuatHien');
            slides[i].classList.remove('bienMat');
            nut[i].classList.remove('kichhoat');
        }
        let slideCurrent = slides[current];
        if (nutnao == 'nutTrai') {       
            // if (current > 0) {current = current - 1;}
            // else {current = (soLuongSlides - 1);}
            current = (current > 0) ? (current - 1) : (soLuongSlides - 1);
        }
        else if (nutnao == 'nutPhai') {
            // if (current < soLuongSlides - 1) {current = current + 1;}
            // else {current = 0;}
            current = (current < soLuongSlides - 1) ? current + 1 : (current = 0)
        }
        let slideNext =slides[current];
        slideNext.classList.add('xuatHien');
        slideNext.classList.add('active');
        slideCurrent.classList.add('bienMat');
        nut[current].classList.add('kichhoat'); 
              
    }
    let chuyenSlideNutTrai = function () { chuyenSlide('nutTrai'); },
        chuyenSlideNutPhai = function () { chuyenSlide('nutPhai'); };
    //gọi hàm.
    btnsL.addEventListener('click', chuyenSlideNutTrai);
    btnsR.addEventListener('click', chuyenSlideNutPhai);

})


function autoSlide() {
    //B1: xem Slide nào đang hiển thị.
    let vtSlide = 0,
        slideHt = document.querySelector('.cacslide ul li.active');
    for (vtSlide = 0; slideHt = slideHt.previousElementSibling; vtSlide++) { }

    if (vtSlide < (slides.length - 1)) {
        //cho ẩn hết đi
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            slides[i].classList.remove('xuatHien');
            slides[i].classList.remove('bienMat')
            nut[i].classList.remove('kichhoat');


        }
        //cho phần tử tiếp theo của Slides hiện ra.
        slides[vtSlide].nextElementSibling.classList.add('active');
        nut[vtSlide].nextElementSibling.classList.add('kichhoat');
        slides[vtSlide].nextElementSibling.classList.add('xuatHien');
        slides[vtSlide].classList.add('bienMat');
    }
    else {
        //cho ẩn hết đi
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            nut[i].classList.remove('kichhoat');
            slides[i].classList.remove('xuatHien');
            slides[i].classList.remove('bienMat');

        }
        //cho phần tử tiếp theo của Slides hiện ra.
        slides[0].classList.add('active');
        nut[0].classList.add('kichhoat');
        slides[0].classList.add('xuatHien');



    }
}

