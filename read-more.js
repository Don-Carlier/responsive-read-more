$(function () {
    $(document).ready(function () {
        var $testimonials = $('.testimonial');
        checkReadmoreLinks($testimonials);

        window.onresize = function (event) {
            checkReadmoreLinks($testimonials);
        }
    });

    function checkReadmoreLinks($testimonials) {
        var windowWidth = $(window).width();
        var $readmoreLinks = $(".readmore", $testimonials);
        var minH = 42;
        $testimonials.find("div").height(minH);

        for (i = 0; i < $testimonials.length; i++) {
            var $string = $testimonials.eq(i).find("span").text();
            var stringLength = $string.length;

            if (stringLength < 165 && windowWidth < 374) {  //Small Mobile
                $readmoreLinks.eq(i).hide();
            } else if (stringLength < 205 && windowWidth > 374 && windowWidth < 540) {  //Mobile
                $readmoreLinks.eq(i).hide();
            } else if (stringLength < 245 && windowWidth > 540 && windowWidth < 768) {  //Tablet 
                $readmoreLinks.eq(i).hide();
            } else if (stringLength < 300 && windowWidth > 768) { //Desktop
                $readmoreLinks.eq(i).hide();
            } else {
                $readmoreLinks.eq(i).show();
            }

            $readmoreLinks.off('click');
            $readmoreLinks.on('click', function (event) {

                $readmoreLink = $(this);
                var $testimonials = $readmoreLink.parents(".testimonial");
                var isExpanded = $testimonials.hasClass("is-expanded");
                var maxH = parseInt($testimonials.find("span").css("height"));

                $readmoreLink.toggleClass("is-expanded", !isExpanded);
                $testimonials.toggleClass("is-expanded", !isExpanded);

                if (isExpanded) {
                    $testimonials.find("div").stop().animate({ height: minH }, 150, $.bez([0.4, 0.0, 0.2, 1]));
                    $testimonials.stop().animate({ height: minH + 40 }, 150, $.bez([0.4, 0.0, 0.2, 1]));
                } else {
                    $testimonials.find("div").stop().animate({ height: maxH }, 150, $.bez([0.4, 0.0, 0.2, 1]));
                    $testimonials.stop().animate({ height: maxH + 40 }, 150, $.bez([0.4, 0.0, 0.2, 1]));
                }
            });
        }
    }
});
