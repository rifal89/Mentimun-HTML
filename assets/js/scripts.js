(function($) {
    "use strict";

    /*===================================================================================*/
    /*  HIDE SIDEBAR
    /*===================================================================================*/
    function hideSidebar(){
        var pageName = $('#pagename').text();
        //$.cookie('pageName', pageName, { path: '/' });
        if(widthScreen <= 980){
            if(pageName != "home"){
                $('.sidebar-module-container').addClass('nothome');
            }
        }
    }

    $(window).load(function(){
        hideSidebar();
    });

    $(window).resize(function(){
        hideSidebar();
    });

    window.addEventListener("resize",function() {
        hideSidebar();
    });

    /*===================================================================================*/
    /*	OWL CAROUSEL
    /*===================================================================================*/
    $(document).ready(function () {
        var dragging = true;
        var owlElementID = "#owl-main";
        
        function fadeInReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
            }
        }
        
        function fadeInDownReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
            }
        }
        
        function fadeInUpReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
            }
        }
        
        function fadeInLeftReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
            }
        }
        
        function fadeInRightReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
            }
        }
        
        function fadeIn() {
            $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        }
        
        function fadeInDown() {
            $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        
        function fadeInUp() {
            $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        
        function fadeInLeft() {
            $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        
        function fadeInRight() {
            $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }
        
        $(owlElementID).owlCarousel({
            
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            singleItem: true,
            addClassActive: true,
            transitionStyle: "fade",
            navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],
                
            afterInit: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            
            afterMove: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            
            afterUpdate: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            
            startDragging: function() {
                dragging = true;
            },
            
            afterAction: function() {
                fadeInReset();
                fadeInDownReset();
                fadeInUpReset();
                fadeInLeftReset();
                fadeInRightReset();
                dragging = false;
            }
            
        });
        
        if ($(owlElementID).hasClass("owl-one-item")) {
            $(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
        }
        
        $(owlElementID + ".owl-one-item").owlCarousel({
            singleItem: true,
            navigation: false,
            pagination: false
        });
        
        $('#transitionType li a').click(function () {
            
            $('#transitionType li a').removeClass('active');
            $(this).addClass('active');
            
            var newValue = $(this).attr('data-transition-type');
            
            $(owlElementID).data("owlCarousel").transitionTypes(newValue);
            $(owlElementID).trigger("owl.next");
            
            return false;  
        });


       $('.home-owl-carousel').each(function(){
            var owl = $(this);
            var  itemPerLine = owl.data('item');
            if(!itemPerLine){
                itemPerLine = 4;
            }
    		owl.owlCarousel({
    			items : itemPerLine,
                itemsTablet:[980,2],
    			navigation : true,
    			pagination : false,
    	           
    			navigationText: ["", ""]
    		});
    	});

      	$(".blog-slider").owlCarousel({
      		items : 3,
            itemsDesktopSmall :[979,2],
            itemsDesktop : [1199,2],
    		navigation : true,
    		slideSpeed : 300,
            pagination: false,
    		navigationText: ["", ""]
    	});

        $(".best-seller").owlCarousel({
            items : 3,
            navigation : true,
            itemsDesktopSmall :[979,2],
            itemsDesktop : [1199,2],
            slideSpeed : 300,
            pagination: false,
            paginationSpeed : 400,
            navigationText: ["", ""]
        });

        $(".sidebar-carousel").owlCarousel({
            items : 1,
            itemsTablet:[768,2],
            itemsDesktopSmall :[980,2],
            itemsDesktop : [1199,1],
            navigation : true,
            slideSpeed : 300,
            pagination: false,
            paginationSpeed : 400,
            navigationText: ["", ""]
        });

        $(".brand-slider").owlCarousel({
            items : 6,
            navigation : true,
            slideSpeed : 300,
            pagination: false,
            paginationSpeed : 400,
            navigationText: ["", ""]
        });    

        $("#advertisement").owlCarousel({
            items : 1,
            itemsTablet:[768,2],
            itemsDesktopSmall :[980,2],
            itemsDesktop : [1199,1],
            navigation : true,
            slideSpeed : 300,
            pagination: true,
            paginationSpeed : 400,
            navigationText: ["", ""]
        });    

        var $owl_controls_custom = $('.owl-controls-custom');
    	$('.owl-next' , $owl_controls_custom).click(function(event){
    		var selector = $(this).data('owl-selector');
    		var owl = $(selector).data('owlCarousel');
    		owl.next();
    		return false;
    	});

    	$('.owl-prev' , $owl_controls_custom).click(function(event){
    		var selector = $(this).data('owl-selector');
    		var owl = $(selector).data('owlCarousel');
    		owl.prev();
    		return false;
    	});

        $(".owl-next").click(function(){
            $($(this).data('target')).trigger('owl.next');
            return false;
        });

        $(".owl-prev").click(function(){
            $($(this).data('target')).trigger('owl.prev');
            return false;
        });
    });

    /*===================================================================================*/
    /*  LAZY LOAD IMAGES USING ECHO
    /*===================================================================================*/
    function lazyLoadEcho(){
        echo.init({
            offset: 100,
            throttle: 250,
            unload: false
        });
    }

    $(document).ready(function(){
        lazyLoadEcho();
    });

    /*===================================================================================*/
    /*  SAME WIDTH AND HEIGHT IMAGE PRODUCT
    /*===================================================================================*/
    function imageWrapHeight(){
        var widthProductImage = $('.product-big .product-image').width();
        $('.product-big .product-image').height(widthProductImage);

        var widthProductImageMicro = $('.product-micro .product-image').width();
        $('.product-micro .product-image').height(widthProductImageMicro);

        var widthProductHotDeals = $('.hot-deals .sidebar-carousel .hot-deal-wrapper').width();
        $('.hot-deals .sidebar-carousel .hot-deal-wrapper').height(widthProductHotDeals);

    }

    $(window).load(function(){
        imageWrapHeight();
    });

    $(window).resize(function(){
        imageWrapHeight();
    });

    var imgProductWidth = $(".product-image img").width();
    var imgProductHeight = $(".product-image img").height();


    /*===================================================================================*/
    /*  RATING
    /*===================================================================================*/
    function ratingProduct(){
        $('.rating').rateit({max: 5, step: 1, value : 4, resetable : false , readonly : true});
        $('.rating-input').rateit();
    }

    $(document).ready(function(){
        ratingProduct();
    });

    /*===================================================================================*/
    /* PRICE SLIDER
    /*===================================================================================*/
    $(document).ready(function () {
        // Price Slider
        if ($('.price-slider').length > 0) {
            $('.price-slider').slider({
                min: 100,
                max: 700,
                step: 10,
                value: [200, 500],
                handle: "square"
            });
        }
    });
 
    /*===================================================================================*/
    /* SINGLE PRODUCT GALLERY
    /*===================================================================================*/
    function singleProductGallery(){
        $('#owl-single-product').owlCarousel({
            singleItem  : true,
            itemsTablet : [768, 2],
        });

        $('#owl-single-product-pop').owlCarousel({
            singleItem  : true,
            itemsTablet : [768, 2],
        });

        $('#owl-single-product-thumbnails').owlCarousel({
            items: 4,
            itemsDesktop          : [1199, 4],
            itemsDesktopSmall     : [979, 4],
            itemsTablet           : [768, 4],
            itemsMobile           : [479, 4],
            pagination            : true,
            responsiveRefreshRate : 100,
        });

        $('#owl-single-product-thumbnails-pop').owlCarousel({
            items: 4,
            itemsDesktop          : [1199, 4],
            itemsDesktopSmall     : [979, 4],
            itemsTablet           : [768, 4],
            itemsMobile           : [479, 4],
            pagination            : true,
            responsiveRefreshRate : 100,
        });

        $('#owl-single-product2-thumbnails').owlCarousel({
            items: 6,
            pagination: true,
            rewindNav: true,
            itemsTablet : [768, 4]
        });

        $('.single-product-slider').owlCarousel({
            stopOnHover: true,
            rewindNav: true,
            singleItem: true,
            pagination: true
        });
        
        $(".slider-next").click(function () {
            var owl = $($(this).data('target'));
            owl.trigger('owl.next');
            return false;
        });
        
        $(".slider-prev").click(function () {
            var owl = $($(this).data('target'));
            owl.trigger('owl.prev');
            return false;
        });

        $('.single-product-gallery .horizontal-thumb').click(function(){
            var $this = $(this), owl = $($this.data('target')), slideTo = $this.data('slide');
            owl.trigger('owl.goTo', slideTo);
            $this.addClass('active').parent().siblings().find('.active').removeClass('active');
            return false;
        });
    }

    $(document).ready(function(){
        singleProductGallery();    
    });

    /*====================================================================================*/
    /* ADD TO CART POPUP
    /*====================================================================================*/

    function resizeModalCart(){
        if(widthScreen <= 800){
            $('.modalcart').width('95%');
        } else {
            $('.modalcart').width('900');
        }
    }

    $(window).resize(function() {
        //resizeModalCart();
    });
    
    /*
    function addToCart(){
        $('.addToCart').click(function(){
            var productname = $(this).attr('productname');
            $.ajax({
                url: base + "detail_popup",
                success: function(data){
                    $('#modalCart .modal-title').html(productname);
                    $('#modalCart .modal-body').html(data);

                    //resizeModalCart();

                    $('#modalCart').modal('show');
                    singleProductGallery();
                    lazyLoadEcho();
                    ratingProduct();
                    quantInput();
                }
            });
        });
    } */

    function addToCart(){
        $('.addToCart').click(function(){
            var productname = $(this).attr('productname');
            var deals = $(this).attr('deals');
            $('#modalCart .modal-title').html(productname);

            //resizeModalCart();

            $('#modalCart').modal('show');

            if(!deals){
                $('#modalCart .hot-deals').hide();
            } else {
                $('#modalCart .hot-deals').show();
            }

            singleProductGallery();
            lazyLoadEcho();
            ratingProduct();
            quantInput();

        });
    }

    $(document).ready(function(){
        addToCart();
    });

    /*===================================================================================*/
    /*  QUANTITY
    /*===================================================================================*/
    function quantInput(){
        $('.quant-input .plus').click(function() {
            var val = $(this).parent().next().val();
            val = parseInt(val) + 1;
            $(this).parent().next().val(val);
        });

        $('.quant-input .minus').click(function() {
            var val = $(this).parent().next().val();
            if (val > 0) {
                val = parseInt(val) - 1;
                $(this).parent().next().val(val);
            }
        });
    }

    $(document).ready(function(){
        quantInput();
    });


    /*===================================================================================*/
    /*  WOW 
    /*===================================================================================*/

    $(document).ready(function () {
        new WOW().init();
    });

      
    /*===================================================================================*/
    /*  TOOLTIP 
    /*===================================================================================*/
    $("[data-toggle='tooltip']").tooltip();

    $('#transitionType li a').click(function () {  
        $('#transitionType li a').removeClass('active');
        $(this).addClass('active');
        
        var newValue = $(this).attr('data-transition-type');
        
        $(owlElementID).data("owlCarousel").transitionTypes(newValue);
        $(owlElementID).trigger("owl.next");
        
        return false;  
    });

    /*===================================================================================*/
    /*  PERFECT SCROLLBAR
    /*===================================================================================*/
    $('#cart-intop').perfectScrollbar();

    /*===================================================================================*/
    /* HIDE ADDRESS BAR
    /*===================================================================================*/
    window.addEventListener("load",function() {
        // Set a timeout...
        setTimeout(function(){
            // Hide the address bar!
            window.scrollTo(0, 1);
        }, 0);
    });

    /*===================================================================================*/
    /*  COUNTDOWN
    /*===================================================================================*/
    $(function () {
        var indDay = new Date();
        indDay = new Date(indDay.getFullYear() + 1, 1 - 1, 26);
        $('.timing-wrapper').countdown({
            until: indDay,
        });
    });

    /*===================================================================================*/
    /*  ISOTOPE
    /*===================================================================================*/
    $(document).ready(function(){
        if(widthScreen <= 800){
            var $container = $('#footer .links-social');

            $container.imagesLoaded( function(){
                $container.isotope({
                    itemSelector : '.col-xs-12'
                });
            });
        }
    });

})(jQuery);