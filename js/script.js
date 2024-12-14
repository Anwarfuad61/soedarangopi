let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

function showImage(img) {
    // Ambil elemen modal dan gambar
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var downloadBtn = document.getElementById("downloadBtn");
    // Tampilkan modal dan atur sumber gambar
    modal.style.display = "block";
    modalImg.src = img.src;
     // Mengatur URL untuk tombol download
    downloadBtn.href = imgElement.src;
  }
  
  function closeImage() {
    // Sembunyikan modal
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});