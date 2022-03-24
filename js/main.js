var nav = document.querySelector('nav');
      
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 70) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});
$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#once-popup").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#popup-close').click(function(e)
    {
    $('#once-popup').fadeOut();
    });
    $('#once-popup').click(function(e) 
    {
    $('#once-popup').fadeOut(); 
    });
});