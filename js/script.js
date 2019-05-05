/*---------------------------------------

Project: Anfang - Agency, Startup and SaaS Template
Template Version: 1.0.1 Jan 5, 2019
Author: YasirKareem

01. All Script
    02.1 Navbar Fixed Top
    02.2 Navbar Toggle
    02.3 Navbar Collapse Hide
    02.4 Faq Nav
    02.5 Scroll Top
    02.6 State
    02.7 testimonials  
02. Faq Accordion
03. Map
04. Coming Soon Page
05. Customization What We Do Section

---------------------------------------*/

// allScript
$(function () {
    'use strict';
    // navbarFixedTop
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav');
        }
    });

    // navbarToggle
    $('.menu-icon').on('click', function () {
        $('.navbar-toggle').toggleClass('change');
    });

    // navbarCollapseHide
    $('a.click-close').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    // FaqNav
    $('body').scrollspy({target: ".faq-link", offset: 50});
    $(".faq-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
    
    // scrollTop 
    var scrollButton = $(".scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    // state
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('.state-items').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.stat-count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
            a = 1;
        }
    });

    // testimonials
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            991: {
                items: 2.5
            }, 
            768: {
                items: 1.5
            },
            767: {
                items: 1.2
            },
            480: {
                items: 1,
                nav: false
            },
            315: {
                items: 1
            }
        }
    });
    
    $("button.owl-prev, button.owl-next");
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

});


//faqAccordion
$(function () {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.drop-title');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.menu-text').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('.accordion-list'), false);
});

// map
function initMap() {
    // Styles a map in night mode.
    'use strict';
    var anfang = {
        lat: 47.285339,
        lng: 9.644274
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 47.285339,
            lng: 9.644274
        },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: anfang,
        map: map,
        title: 'Anfang',
        icon: 'img/map/blank.png'
    });
}


// comingSoonPage
var count = new Date("aug 30,2019 00:01:00").getTime();
var x = setInterval(function () {
    'use strict';
    var now = new Date().getTime(),
        d = count - now,
        days = Math.floor(d / (1000 * 60 * 60 * 24)),
        hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (d <= 0) {
        clearInterval(x);
    }
}, 1000);

//CustomizationWhatWeDoSection
$(window).resize(function() {
  if ($(window).width() < 991) {
    $(".what-img").parent().addClass('container');
    $(".what-img").parent().removeClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
  }
 else {
    $(".what-img").parent().removeClass('container');
     $(".what-img").parent().addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
 }
});