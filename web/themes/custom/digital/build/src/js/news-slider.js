(function (Drupal) {
  Drupal.behaviors.slickInit = {
    attach: function (context, settings) {
      const newsCards = context.querySelectorAll('.news-cards');

      newsCards.forEach(function (newsCard) {
        if (!newsCard.classList.contains('slick-initialized')) {
          jQuery(newsCard).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true, // Ensure arrows are enabled by default
            prevArrow: '<button type="button" aria-label="Previous slide" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>',
            nextArrow: '<button type="button" aria-label="Next slide" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>',
            responsive: [
              {
                breakpoint: 1024, // Tablet
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: true // Explicitly enable for tablet
                }
              },
              {
                breakpoint: 768, // Mobile
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true // Explicitly enable for mobile
                }
              }
            ]
          });
        }
      });
    }
  };
})(Drupal);
