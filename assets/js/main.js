document.addEventListener("DOMContentLoaded", function () {
    let navToggler = document.getElementById('navbar-toggler');
    let navCollapse = document.getElementById('navbar-collapse');
    let count = 1;



    let toggler = () => {
        count++;
        (count % 2 == 0) ?
            [
                navToggler.classList.add('add-toggler'),
                navToggler.classList.remove('remove-toggler'),
                navCollapse.classList.add('active')
            
            ] :
            [
                navToggler.classList.add('remove-toggler'),
                navToggler.classList.remove('add-toggler'),
                navCollapse.classList.remove('active')
            ]

        }
    navToggler.onclick = () => {
        toggler();
    }
})