$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

 document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url.trim();
        window.open(url, '_blank');
      });
    });


        $(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.scroll-up-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});

var typed = new Typed(".typing",{
  strings:["Web Developer","Frontend Developer","Software Developer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true,
});



  const themeBtn = document.querySelector('.theme');

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darktheme');

    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('darktheme')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

