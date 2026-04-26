// menu toggle
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

$('.navbar .menu li a').click(function(){
    $('.navbar .menu').removeClass("active");
    $('.menu-btn i').removeClass("active");
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
  strings:["Software Developer","Full Stack Developer","Frontend Developer"],
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
 
  // const submitBtn=document.querySelector(".submit");

  // submitBtn.addEventListener("click",()=>{
  //   alert("Form submitted Thanku For Your Query");
  // })

const cards = document.querySelectorAll(".card");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150); // 🔥 delay for each card
    }
  });
}

window.addEventListener("scroll", revealCards);

// page load pe bhi run
revealCards();
const eduCards = document.querySelectorAll('.edu1, .edu2, .edu3, .edu4');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry, index)=>{
    if(entry.isIntersecting){
      
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // 👈 delay (200ms gap between cards)

    }
  });
},{ threshold: 0.2 });

eduCards.forEach(card=>{
  observer.observe(card);
});
const projectCards = document.querySelectorAll('.card1');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // 👈 delay (each card 200ms gap)

    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => {
  projectObserver.observe(card);
});
const contactSection = document.querySelector('.contact');

const contactObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      contactSection.classList.add('show');
    }
  });
},{ threshold: 0.3 });

contactObserver.observe(contactSection);

function validateForm() {
    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();

    if (name === "" || email === "") {
        alert("Name aur Email fill karo");
        return false; // ❌ stop submit
    }

    // 👇 success alert (IMPORTANT)
    setTimeout(() => {
        alert("Form submitted successfully ✅");
    }, 100);

    return true; // ✅ allow submit
}
