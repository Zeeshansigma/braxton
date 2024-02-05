$(document).ready(function() {
    var slider = $(".a1p_grid-wrapper").lightSlider({
        controls: true,
        item: 2,
        loop: false,
        speed: 600,
        pager: false,
        slideMove: 3,
        slideMargin: 5,
        responsive: [
            {
                breakpoint:920,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
});