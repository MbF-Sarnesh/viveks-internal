////////////////////
//Application Module
////////////////////
var app = (function() {
    "use strict";
    //-----------------------------------------------------------------
    // Page Initalization handler : exposed to app.init();
    //-----------------------------------------------------------------
    var init = function() {
            fullwidthEvents();
            _commonEvents();
            _formElements();
            _verticalTab();
            _testimonialSlider();
            _voucherCode();
            _providerSlider();
            _zoom();
            _scrollTopfunction();
            _tabSection();
            _accordionTab();
            _appendDiv();
            _accordionScrooltop();
            _filterbyDropdown();
            _scrollTopNav();
            _searchBar();
            _discriptionSlider();
            myAccountAccordTab();
            _address();
            _cardSection();
            _mobileMenuHandler();
            _menuSlide();
            _shopCatagory();
            _searchHandler();
        },
        _searchHandler= function(){
            $(".search-icon").on('click', function(e){
                e.preventDefault();
                $('.hide-onsearch').fadeOut('fast', function(){
                    $('.search-wrapper').fadeIn();
                });
                $('header').addClass("search-active");
            });
            $(".search-close").on('click', function(e){
                e.preventDefault();
                $('.search-wrapper').fadeOut('fast', function(){
                    $('.hide-onsearch').fadeIn();
                });
                $('header').removeClass("search-active");
                $('.search-box').val('');
                $('.search-result').slideUp();
            });
            $('.search-box').keyup(function(){
                $('.search-wrapper').addClass('active');
                var sval=$(this).val();
                if(sval==''){
                    $('.search-result').slideUp();
                }else{ 
                    $('.search-result').slideDown();
                }
            });
        },
        _menuSlide = function() {
            $('.dropdown').click(function(){
                if($('.dropdown').hasClass('classOne')){
                   $('.dropdown').removeClass('classOne')
                }else{
                  $('.dropdown').addClass('classOne')
                }
                $('.mega-menu').slideToggle('slow').toggleClass('classOne');
            });
        },
        _mobileMenuHandler = function() {
            $('.mobiMenu li > a').on('click', function(){
               //$(this).toggleClass('on');
               // $(this).parent('li').find('.sub-nav').slideToggle().toggleClass('active');
               if (!$(this).hasClass('slides')) {
                   $('.mobiMenu li a').removeClass('slides');
                   $(".sub-nav").stop(true, true).slideUp('slow').removeClass('active');
                   $(this).addClass('slides');
                   $(this).siblings(".sub-nav").slideDown('slow').toggleClass('active');
               } else {
                   $('.mobiMenu li a').removeClass('slides');
                   $(".sub-nav").stop(true, true).slideUp('slow').removeClass('active');
               }
           });
        },
         _shopCatagory = function(){
            $('.mega-menu-tab a').on('click', function(e)  {
              e.preventDefault();
              var currentAttrValue = $(this).attr('href');
              $(this).parent('li').addClass('active').siblings().removeClass('active');
              $(currentAttrValue).fadeIn(800).siblings('.mega-menu-items').hide();
            });
          },
        _cardSection=function(){
            $('.buy-physical').on('click', function(){
                $(".buy-physical-con").fadeIn(800).siblings().hide();
            });
             $('.phy-cancle').on('click', function(){
                $("#physical").fadeIn(800).siblings().hide();
            });
             $('.buy-ecard').on('click', function(){
                $(".buy-ecard-con").fadeIn(800).siblings().hide();
            });
             $('.e-cancle').on('click', function(){
                $("#e").fadeIn(800).siblings().hide();
            });
        },
        _address=function(){
            $('.address-add').on('click', function(){
                $(".address-section.add").fadeIn(800).siblings().hide();
            });
            $('.address-add-cancel').on('click', function(){
                $(".address-section.book").fadeIn(800).siblings().hide();
            });
            $('.address-edit').on('click', function(){
                $(".address-section.edit").fadeIn(800).siblings().hide();
            });
        },
        myAccountAccordTab=function(){
            if($(window).width() <= 1024) {
                $('.myaccount-subform h2').on('click', function(){
                  if(!$(this).hasClass('active')){
                       $('.myaccount-subform h2').removeClass('active');
                       $(".myaccount-subform .subformtab").stop(true, true).slideUp();
                       $(this).addClass('active');
                       $(this).next(".subformtab").slideDown();
                  }else{
                      $('.myaccount-subform h2').removeClass('active');
                        $(".myaccount-subform .subformtab").stop(true, true).slideUp();
                  }
                });
                $('.myaccount-subform h2').first().addClass('active');
                $(".myaccount-subform .subformtab").first().slideDown();
                $('.myaccount-subform h2').bind('click',function(){
                    var self = $('.myaccount-form');
                    setTimeout(function() {
                        var theOffset = $(self).offset();
                        $('body,html').animate({ scrollTop: theOffset.top-150});
                    }, 100); // ensure the collapse animation is done
                });
            }
            $('.myaccount-sidetab li').on('click', function(e) {
                e.preventDefault();
                var currentAttrValue = $(this).attr('value');
                $(this).addClass('active').siblings().removeClass('active');
                $(currentAttrValue).fadeIn(800).siblings().hide();
            });
        },
        _discriptionSlider=function(){
            $('.discription_card-slider').slick({
              infinite: false,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              rows:0,
              // prevArrow: '<button class="slideArrow slick-prev"><img src="images/slideArrow.png"></button>',
              // nextArrow: '<button class="slideArrow slick-next"><img src="images/slideArrow.png"></button>', 
                prevArrow: '<button class="slick-arrow-round slick-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-arrow-round slick-next"><i class="fa fa-angle-right"></i></button>', 
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    dots:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                  }
                },
                // {
                //   breakpoint: 768,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1,  
                //     prevArrow:false,                    
                //     nextArrow:false 
                //   }
                // },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            }).on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        },
        _searchBar =function(){
            $('.openbtn').click(function(){
                $('.inp').animate({
                    width:'500px',
                });
            });
        },
        _scrollTopNav =function(){
            $(".scroll-top a").on('click', function(e) { 
                e.preventDefault();
                $("html,body").animate({scrollTop:0},"1000");
            }); 
        },
        _appendDiv = function(){
            var productItem=[];
            // product list
            if($(window).width() <= 1000) {
                $(".product h2, .product h3, .product .product-cost").each(function(index, value){
                    productItem[index]= $(this).text();
                });
                $(".prepend-sec").append("<h2>" + productItem[0] + "</h2>");
                $(".prepend-sec").append("<h3>" + productItem[1] + "</h3>");
                $(".prepend-sec").append("<div class='product-cost'>" + productItem[2] + "</div>");
            }
        },

        _accordionTab = function(){
            // $('.hero-banner-item').slick({
            //     slidesToShow: 1,
            //     slidesToScroll:1,  
            //     rows:0,
            //     dots: false,
            //     arrows: false, 
            //     asNavFor: '.hero-banner-slider',
            //     prevArrow: '<i class="fa fa-angle-left slick-arrow slick-prev"></i>',
            //     nextArrow: '<i class="fa fa-angle-right slick-arrow slick-next"></i>', 
            // });
            
            // $('.hero-banner-slider').slick({
            //     slidesToShow: 13, 
            //     slidesToScroll:1, 
            //     rows:0,
            //     centerMode: true,
            //     centerPadding: '0px',
            //     focusOnSelect: true,
            //     dots: false,
            //     arrows: false, 
            //     asNavFor: '.hero-banner-item',
            // }); 

            $('.hero-banner-item').each(function(key, item) {

              var sliderIdName = 'slider' + key;
              var sliderNavIdName = 'sliderNav' + key;

              this.id = sliderIdName;
              $('.hero-banner-slider')[key].id = sliderNavIdName;

              var sliderId = '#' + sliderIdName;
              var sliderNavId = '#' + sliderNavIdName;

              $(sliderId).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                rows:0,
                asNavFor: sliderNavId,
              });

              $(sliderNavId).slick({
                slidesToShow: 13,
                slidesToScroll: 1,
                rows:0,
                asNavFor: sliderId,
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                ]
              });

            });
            $('.home-banner-slider').not('.slick-initialized').slick({
                autoplay:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:true,
                fade: true,
                rows:0,
            });

            $('.product-offer-slider').each(function(key, item) {

              var sliderIdName = 'product-slider' + key;

              this.id = sliderIdName; 

              var sliderId = '#' + sliderIdName;
              $(sliderId).not('.slick-initialized').slick({
                arrows:true,
                prevArrow: '<button class="slick-arrow-round slick-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-arrow-round slick-next"><i class="fa fa-angle-right"></i></button>', 
                rows:0,
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 764,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                // {
                //   breakpoint: 480,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }
              ]
              });
            });

            

            if($(window).width() <= 1024) {
                // accordion handler
                $('.accordiantab h4,.accordiantab .accordiantab-title').on('click', function(){
                  if(!$(this).hasClass('active')){
                        $('.accordiantab h4,.accordiantab .accordiantab-title ').removeClass('active');
                        $(".accordiantab-content").stop(true, true).slideUp();
                        $(this).addClass('active');
                        var currnetPanel=$(this);
                        var currnetPanelContent=$(this).next(".accordiantab-content");
                        $('html,body').animate({
                            scrollTop: $('.accordiantab-wrapper').offset().top
                        }, 'slow', function() {
                            // Animation complete.
                            currnetPanelContent.slideDown();
                            $('.product-offer-slider').slick('refresh');
                        });
                  }else{
                       $('.accordiantab h4,.accordiantab .accordiantab-title').removeClass('active');
                       $(".accordiantab-content").stop(true, true).slideUp();
                  }
                });                
                $('.accordiantab h4:first-of-type,.accordiantab .accordiantab-title:first-of-type').addClass('active');
                $(".accordiantab-content:first-of-type").slideDown();
            }
            else{
                var listItem=[];
                $(".accordiantab > a").each(function(index, value) { 
                    listItem[index]= $(this).text();
                    $(this).next(".accordiantab-content").attr("id","tab"+index);
                });
                $(".tab-list ul").empty();
                $.each(listItem, function(index, value) {
                  $(".tab-list ul").append("<li><a href='#tab"+index+"'>" + value + "</li>");
                });
                $('.tab-list li:first-child').find("a").addClass('active');
                $('.accordiantab-content:first-of-type').fadeIn(800);
                $('.tab-list li a').on('click', function(e) {
                    e.preventDefault();
                    var currentAttrValue = $(this).attr('href');
                    $(this).parent('li').addClass('active').siblings().removeClass('active');
                    $('.tab-list li a').removeClass('active');
                    $(this).addClass('active');
                    $(currentAttrValue).fadeIn(800).siblings().hide();
                    $('.product-offer-slider').slick('refresh');
                });
            }

            $('.hero-tab-nav li a').on('click', function(e) {
                e.preventDefault();
                var currentAttrValue = $(this).attr('href');
                $(this).parent('li').addClass('active').siblings().removeClass('active');
                $('.hero-tab-nav li a').removeClass('active');
                $(this).parent('li').addClass('active');
                $(currentAttrValue).fadeIn(800).siblings().hide();
                $('.hero-banner-slider').slick('refresh');
                $('.hero-banner-item').slick('refresh');
            });
        },

        _accordionScrooltop = function(){
            if($(window).width() <= 1024) {
               $('.tabs-content h4').bind('click',function(){
                    var self = $('.tabs');
                    setTimeout(function() {
                        var theOffset = $(self).offset();
                        $('body,html').animate({ scrollTop: theOffset.top - 65});
                    }, 100); // ensure the collapse animation is done
                }) 
            }
        },

        _verticalTab = function(){
            $('.card-tab').click(function(){
                if(!$(this).hasClass('current')){
                var tab_id = $(this).attr('data-tab');
                $('.card-tab').removeClass('current');
                $('.tab-content').removeClass('current').hide();
                $(this).addClass('current');
                $("#"+tab_id).fadeIn();
                var windowWidth=$(window).width();
                if (windowWidth < 768) {
                    $('html,body').animate({
                        scrollTop: $("#"+tab_id).offset().top-100
                    },'slow');
                }
                else{
                    $('html,body').animate({
                        scrollTop: $("#"+tab_id).offset().top-95
                    },'slow');}
                }
            });
        },
        
        // zoom 
        _zoom = function(){
            // var winWid = $(window).width();
            // if(winWid >= 640){
            //     $('.product-zoom')
            //     .wrap('<span style="display:inline-block"></span>')
            //     .css('display', 'block')
            //     .parent()
            //     .zoom({
            //         url: $(this).find('img').attr('data-zoom')
            //     });
            // }
            [].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn ) {
                new ProgressButton( bttn, {
                    callback : function( instance ) {
                        var progress = 0,
                        interval = setInterval( function() {
                            progress = Math.min( progress + Math.random() * 0.1, 1 );
                            instance._setProgress( progress );
                            if( progress === 1 ) {
                                instance._stop(1);
                                clearInterval( interval );
                            }
                        }, 200 );
                    }
                });
            });
        },

        // full width events
        fullwidthEvents = function(){
            var winWid = $(window).width();
            var containerWidth = $('.container').width();
            var containerOuter = $('.container').outerWidth();
            var containerInner;
            if(winWid <= 1024) {
                containerInner = $('.container').outerWidth() - 40;
            }
            else{
                containerInner = $('.container').outerWidth() - 30;
            }
            var centerWidth2 = $('.middle-block').width();
            var centerWidth3 = $('.product-wrap .tabs').width();
            
            var tabWid = $('.tabs').width();
            var getWid = Math.round((containerInner - tabWid)/2) - 5;

            var parentContainer=$('.middle-block').parents(".container").width();
            var outSlide2 = Math.round((winWid - containerWidth)/2);
            var innerColWidth=parentContainer - centerWidth2;
            var colCenterBlock=$('.col-center-block').outerWidth();
            var halfCenterBlock=(containerOuter - colCenterBlock)/2;
            if($(".generic").find(".container .col-center-block").length>=1){
                var outSlide2=outSlide2+halfCenterBlock;
                $('.container-right').css({width:containerInner,'margin-left':-halfCenterBlock});
                var innerColWidth=0;
            }
            else{
                $('.container-right').css({width:containerInner});
            }
    
            $('.fluid-wrapper').css({'margin-left':-outSlide2, 'margin-right':-(outSlide2+innerColWidth)});   
            $('.fluid-right').css({'margin-right':-outSlide2});    
            $('.fluid-col').css({'margin-left': -getWid, 'margin-right':-getWid});     
            $('.fluid-wrapper-col').css({'width':colCenterBlock});
            if(winWid <= 640) {
                $('.sidebar-paragraph').insertAfter('.sidebar--line ul');
            }
            if(winWid <= 768) {
                $('.sub-introcontent').find(".sticky").parent(".col-xs-4.no-padding").insertBefore('.sub-introcontent .col-xs-8');
            }else{
                $('.sub-introcontent').find(".sticky").parent(".col-xs-4.no-padding").insertAfter('.sub-introcontent .col-xs-8');
            }
            
            
            if($(window).width() <= 1024) {
                $('.home-banner-slider').not('.slick-initialized').slick({
                    arrows: false,
                    dots: true,
                    rows: 0,
                    speed: 300,                    
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    swipeToSlide:true,
                });
            }
            if(winWid<1024) {
                $(".prod-filter").insertBefore($(".prod-sort"));
            }
        },

        // common events
        _commonEvents = function(){
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
            
            $('.floating-nav a').on('click', function(e){
                const id = $(this).attr('href');
                e.preventDefault();
                $("html,body").animate({scrollTop:$(id).offset().top},"1000");
                return false;
            })

            $("#homePage, #subPage").delay(500).animate({opacity:1},{duration:800});
            // $('.logo').animate({'opacity':1}, 1500);

            // before css
            $('.generic-list ul').prev('p').css('padding-bottom', '3px');
            
            var videoUrl = $('#videoFrame').attr('src'); 
            $('.popup-trigger').on('click', function(e){
                e.preventDefault();
                $('html').addClass('y-hidden');
                var id = $(this).attr('data-id');
                $('#'+id).fadeIn();
                $('#videoFrame').attr('src',videoUrl+'?autoplay=1'); 
                $('body, html').addClass('y-hidden');
            });
                    
            var videoUrl = $('#videoFrame').attr('src'); 
            $('.popup-close').on('click', function(e){
                e.preventDefault();
                $('html').removeClass('y-hidden');
                $('.popup').fadeOut();
                $('#videoFrame').attr('src',videoUrl+'?autoplay=0');
                $('body, html').removeClass('y-hidden');
            });
            
            $('.menuHum').on('click', function(){
                $('body, header, .menuHum').toggleClass('open');
            }); 

            $('.card_top').on('click', function(){
                 $(this).toggleClass('active');
            });
            // submenu open
            $('.submenu a').on('click', function(){
                $(this).parent().addClass('open');
                $('.mobiMenu').addClass('open');
            });
            // submenu close
            $('.multimenu li:first-child').on('click', function(){
                $(this).parents('.submenu').removeClass('open');
                $('.mobiMenu').removeClass('open');
            })
            
            // globel message
            $('.theme-globalerror i').on('click', function(){
                $(this).parent('.theme-globalerror').slideUp();
            });
            /*cookie action*/
            $(".cookie-action a").on('click', function(e){
                e.preventDefault();
                $(this).parents(".cookie-wrapper").addClass("inactive");
            });

            // image need noneed 
            var tag = $('.mobile-image').find('img');
            if(tag[0] === undefined){
                $('.hero-banner').addClass('nobanner');
            }else{
                $('.hero-banner').removeClass('nobanner');
            }
            var findImage = $('.blog-detail').find('img');
            for(i = 0; i < findImage.length; i++){
                $(findImage[i]).parent().addClass('active');
            }
            $('.all-link').parents('section').addClass('active');
        },
        
        //form elements

        _formElements = function() {
            /*jquery ui selectbox placeholder start*/
            $.widget('app.selectmenu', $.ui.selectmenu, {
                _drawButton: function() {
                    this._super();
                    var selected = this.element
                    .find('[selected]')
                    .length,
                    placeholder = this.options.placeholder;

                    if (!selected && placeholder) {
                        this.buttonItem.text(placeholder);
                    } 
                }
            });

             //Select menu
            $('.select-menu').each(function() {
                var $placeholder = $(this).data('placeholder');
                $(this).selectmenu({
                    placeholder: $placeholder,
                    appendTo: $(this).parent(".select-row"),
                    create: function(event, ui) {
                        $('.ui-selectmenu-text').addClass('placeholder');
                    },
                    change: function(event, ui) {
                        $('.ui-selectmenu-text').removeClass('placeholder');
                    }
                });
            });

            if($('.select-menu').length>0){
                $(".select-menu").selectmenu({
                    select: function(event, ui) {
                        var errorText  = $(this).parents('.form-row').find('label').attr('data-error');
                        if($('option:selected',$(this)).index()>0) {
                            $(this).parents('.form-row').removeClass('error-row');
                            $(this).parents('.form-row').find('.error-message').slideUp(function(){
                                $(this).remove();
                            });
                        } else {
                            $(this).parents('.form-row').addClass('error-row');
                            $(this).parents('.form-row').find('.error-message').slideDown(); 
                        }
                    }
                });
            }

            $(".select-menu").selectmenu({
                change: function(event, ui) {
                  if ($('.select-menu option:selected').val() != 0) {
                      $('.select-menu').find('.error-message').hide();
                      $('.select-menu').parent('.form-row').removeClass('error-row');
                  }
                }
            }); 

            $('.floating-item input, textarea').focus(function(){
                $(this).parent('.floating-item').addClass('input-animate'); 
            });
            /* Contact page form */

            // Email validation
            $('input[type="email"], input[type="text"], input[type="password"], input[type="number"], input[type="tel"], textarea').keyup(function() {
                if ($(this).val() !== "") {
                    $(this).addClass('input-email-active');
                } else {
                    $(this).removeClass('input-email-active');
                }
            });

            // form validation
            $(".form-wrap .input-item").not(".non-mandatory").bind({                
                keyup: function() {
                    var $thisValue = $(this).val();
                    var errorText  = $(this).parents('.formRow').find('label').attr('data-error');
                    if ($thisValue.length != 0) {
                        $(this).parents('.formRow').removeClass('error-row');
                        $(this).parents('.formRow').find('.error-message').fadeOut(function(){
                            $(this).remove();
                        });
                    }
                },
                blur: function() {
                    var $thisValue = $(this).val();
                    var $errorText  = $(this).parents('.formRow').find('label').attr('data-error');

                    if ($thisValue.length == 0) {
                        $(this).parents('.formRow').addClass('error-row');
                        if($(this).parents('.formRow').find('.error-message').length==0) {
                            $(this).parents('.formRow').append('<div class="error-message">'+$errorText+'</div>');
                        }
                    } else {
                        $(this).parents('.formRow').removeClass('error-row');
                    }
                }
            });

            $('.button-submit').on('click', function(){
                var $val = 0;

                var $fname = $('#name'),
                    $fnameVal = $fname.val();
                if ($fnameVal.length == 0) {
                     var $errorText  = $fname.parents('.formRow').find('label').attr('data-error');
                    $fname.parents('.formRow').addClass('error-row');
                    if($fname.parents('.formRow').find('.error-message').length==0) {
                        $fname.parents('.formRow').append('<div class="error-message">'+$errorText+'</div>');
                    }else {
                        $fname.parents('.formRow').removeClass('error-row');
                    }
                    $val += 1;
                }

                var $lname = $('#phone'),
                    $lnameVal = $lname.val();
                if ($lnameVal.length == 0) {
                     var $errorText  = $lname.parents('.formRow').find('label').attr('data-error');
                    $lname.parents('.formRow').addClass('error-row');
                    if($lname.parents('.formRow').find('.error-message').length==0) {
                        $lname.parents('.formRow').append('<div class="error-message">'+$errorText+'</div>');
                    }else {
                        $lname.parents('.formRow').removeClass('error-row');
                    }
                    $val += 1;
                }

                var $email = $('#email'),
                    $emailVal = $email.val();
                if ($emailVal.length == 0) {
                     var $errorText  = $email.parents('.formRow').find('label').attr('data-error');
                    $email.parents('.formRow').addClass('error-row');
                    if($email.parents('.formRow').find('.error-message').length==0) {
                        $email.parents('.formRow').append('<div class="error-message">'+$errorText+'</div>');
                    }else {
                        $email.parents('.formRow').removeClass('error-row');
                    }
                    $val += 1;
                }
                var $message = $('#message'),
                    $messageVal = $message.val();
                if ($messageVal.length == 0) {
                     var $errorText  = $message.parents('.formRow').find('label').attr('data-error');
                    $message.parents('.formRow').addClass('error-row');
                    if($message.parents('.formRow').find('.error-message').length==0) {
                        $message.parents('.formRow').append('<div class="error-message">'+$errorText+'</div>');
                    }else {
                        $message.parents('.formRow').removeClass('error-row');
                    }
                    $val += 1;
                }
            });

            $('#email').bind('keyup',function () {
                var $email = this.value;
                validateEmail($email);
            });
            
            function validateEmail(email) {
                var $email = $('#email'),
                    $emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 
                    $errorText  = $email.parents('.formRow').find('label').attr('data-error-valid'),
                    $emailVal = $email.val();

                if (!$emailReg.test(email)) {
                    $('.notvalid-error-message').show();
                    $email.parents('.formRow').addClass('error-row-email');
                }else{
                    $('.notvalid-error-message').hide();
                    $email.parents('.formRow').removeClass('error-row-email');
                }
            } 
        },
        _scrollTopfunction = function(){
            $('.description-link a').on('click', function(e){
                const id = $(this).attr('href');
                e.preventDefault();
                $("html,body").animate({scrollTop:$("#"+id).offset().top},"1000");
                return false;
            }) 
        },

        _providerSlider = function(){
            // var $carouselLength = $carousel.children().length;
            $('.provider').slick({
                slidesToShow: 1,
                slidesToScroll:1,  
                dots: false,
                arrows: false, 
                asNavFor: '.provider-nav',
                prevArrow: '<i class="fa fa-angle-left slick-arrow slick-prev"></i>',
                nextArrow: '<i class="fa fa-angle-right slick-arrow slick-next"></i>', 
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false, 
                            dots:true,
                        }
                    },
                ]
            });
            
            $('.provider-nav').slick({
                slidesToShow: 5, 
                slidesToScroll:1, 
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: true,
                dots: false,
                arrows: false, 
                vertical: true,
                asNavFor: '.provider',
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            arrows: true, 
                            vertical:false,
                            verticalSwiping:false,
                        }
                    }
                ]
            }); 
            
            $('.like-slider').slick({
                slidesToShow: 4.5,
                slidesToScroll:4,  
                dots: false,
                arrows: true, 
                infinite:false,
                prevArrow: '<i class="fa fa-angle-left slick-arrow slick-prev"></i>',
                nextArrow: '<i class="fa fa-angle-right slick-arrow slick-next"></i>', 
                responsive: [
                {
                        breakpoint: 1200,
                        settings: {
                            arrows: true, 
                            slidesToShow: 4,
                            slidesToScroll:4,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true, 
                            slidesToShow: 2.5,
                            slidesToScroll:2,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: "unslick"
                    } 
                ]
            });
            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in',
                callbacks: {
                    open: function() {
                        $('body, html').addClass('y-hidden');
                        $('.provider-popup').slick({
                            slidesToShow: 1,
                            slidesToScroll:1,  
                            dots: true,
                            arrows: true, 
                            asNavFor: '.provider-navpopup',
                            prevArrow: '<i class="fa fa-angle-left slick-arrow slick-prev"></i>',
                            nextArrow: '<i class="fa fa-angle-right slick-arrow slick-next"></i>', 
                            responsive: [
                                {
                                    breakpoint: 640,
                                    settings: {
                                        arrows: true, 
                                        dots:true
                                    }
                                },
                            ]
                        });
                        $('.provider-navpopup').slick({
                            slidesToShow: 4, 
                            slidesToScroll:1, 
                            centerMode: true,
                            focusOnSelect: true,
                            dots: false,
                            arrows: false, 
                            vertical: true,
                            asNavFor: '.provider-popup',
                            verticalSwiping: true,
                            responsive: [
                                {
                                    breakpoint: 1000,
                                    settings: {
                                        arrows: true, 
                                        vertical:false,
                                        verticalSwiping:false,
                                    }
                                }
                            ]
                        }); 
                    },
                    close: function(){
                        $('body, html').removeClass('y-hidden');
                    }
                }
            });
        },

        _voucherCode = function() {
            $('.addvoucher').click(function(){
                $(this).fadeOut(function(){
                    $('.applybutd').fadeIn();
                    $('.applybutd .textBox').focus();          
                })
            });
            // close voucher
            $('.close-voucher').click(function(){
                $(this).parent('.applybutd').fadeOut(function(){
                    $('.addvoucher').fadeIn();
                });
            });

        }, 

        _testimonialSlider = function(){
            $('.testimonial-slider').not('.slick-initialized').slick({
                arrows: false,                
                dots:true,
                dotsClass:'slick-dots slider-dots',
                rows: 0,                  
                autoplay: true,
                autoplaySpeed: 18000,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                swipeToSlide:true,
                pauseOnHover:false,
                pauseOnDotsHover:false,
                PauseOnFocus:false,
                prevArrow: "<i class='fa fa-angle-left'></i>",
                nextArrow: "<i class='fa fa-angle-right'></i>",
            });
            $('.slick-dots').find('button').on('click', onDotClick());
            function onDotClick () {
              $('.testimonial-slider').slick('slickSetOption', {'autoplay':false}, false);
              // slick('slickSetOption', 'autoplay', true, true);
            }
        },
        
        //tab function
        _tabSection = function() {
            // $('.pro_tab').on('click', function(e) {
            //     e.preventDefault();
            //     var currentAttrValue = $(this).attr('value');
            //     console.log(currentAttrValue);
            //     $(this).addClass('active').siblings().removeClass('active');
            //     $('.tab ' + currentAttrValue).fadeIn(800).siblings().hide();
            // });
        },

        _filterbyDropdown = function() {
            // $(".drop-links").find('li:first-of-type').addClass("active");

            // $(".noshow").fadeOut(500).first().addClass("active").fadeIn(500);
            // $(".noshow").find('.col-4').each(function(i) {
            //     $(this).delay(100 * i).fadeOut(500,function(){
            //         $(".noshow").first().find('.col-4').each(function(i) {
            //             $(this).delay(100 * i).fadeIn(500);
            //         });
            //     });
            // });
            // $('.drop-links li').on('click', function(e){
            //     var getId = $(this).attr('tablinks');
            //     if(e.target.checked === true){
            //         $('.drop-links').addClass('inactive');
            //         $(".noshow.active").fadeOut(500, function(){
            //             $(this).find('.col-4').each(function(i) {
            //                 $(this).delay(100 * i).fadeOut(500, function(){
            //                     $('.drop-links').removeClass('inactive');
            //                     $('#' + getId).fadeIn(500, function(){
            //                         $(this).addClass('active').siblings().removeClass('active');
            //                         $(this).find('.col-4').each(function(i) {
            //                             $(this).delay(100 * i).fadeIn(500, function(){
            //                                 console.log(1);
            //                             });
            //                         })
            //                     });
            //                 });
            //             });
            //         });
            //     }else{
            //         $('.noshow.active').addClass('active').siblings().removeClass('active');
            //         // console.log($('#' + getId).removeClass('active'));
            //         // $('#Allcategories').find('.col-4').each(function(i) {
            //         //     $(this).delay(100 * i).fadeIn(500).addClass(i);
            //         // })
            //     }
            // });
            
            
            $('.desktop-drop').on('click', function(){
                if(!$(this).parents('.drop-links').hasClass('active')){
                    $('.drop-links').removeClass('active');
                    var winWid = $(window).width();
                    if(winWid<1000) {    
                        $('.drop-links').find('.mobile-drop,.desktop-drop').next().slideUp('fast');
                    }
                    else{
                        $('.drop-links').find('.desktop-drop').next().slideUp('fast');
                    }
                    
                    $(this).parents('.drop-links').addClass('active');
                    $(this).siblings('ul', this).stop(true, true).slideToggle();
                }
                else{
                    $('.drop-links').removeClass('active');      
                    if(winWid<1000) {    
                        $('.drop-links').find('.mobile-drop,.desktop-drop').next().slideUp('fast');
                    }
                    else{
                        $('.drop-links').find('.desktop-drop').next().slideUp('fast');
                    } 
                }
            });
            $('.mobile-drop').on('click', function(){
                if(!$(this).parents('.drop-links').hasClass('active')){
                    $('.drop-links').removeClass('active');
                    var winWid = $(window).width();
                    if(winWid<1000) {    
                        $('.drop-links').find('.mobile-drop,.desktop-drop').next().slideUp('fast');
                    }
                    else{
                        $('.drop-links').find('.desktop-drop').next().slideUp('fast');
                    }
                    
                    $(this).parents('.drop-links').addClass('active');
                    $(this).siblings('ul', this).stop(true, true).slideToggle();
                }
                else{
                    $('.drop-links').removeClass('active');      
                    if(winWid<1000) {    
                        $('.drop-links').find('.mobile-drop,.desktop-drop').next().slideUp('fast');
                    }
                    else{
                        $('.drop-links').find('.mobile-drop,.desktop-drop').next().slideUp('fast');
                    } 
                }
            });
           
            $("html").click(function(event) {
                if ($(event.target).closest('.drop-links').length === 0) {
                  $('.drop-links').find('.desktop-drop').next().slideUp('fast');
                } 
              });
            if($('.drop-js').length>0){
                //$('.drop-links').find('.desktop-drop').next('ul').addClass('test');
                $('.drop-links .desktop-drop').next('ul').find('li.drop-item').on('click', function(e){
                    e.preventDefault();
                    console.log(selectedVal);
                    var selectedVal=$(this).find('span').html();
                    $(this).parents('.drop-links').find('.desktop-drop h2').html(selectedVal);
                    $(this).parents('.drop-links').removeClass('active');
                    $(this).parents('.drop-links').find('.desktop-drop').next().slideUp('fast');   
                });
            }
        }

    // Expose Global Functions
    return {
        init: init,
        fullwidthEvents: fullwidthEvents,
    };
})();

if(!Modernizr.touch) {
    $(window).resize(function(){
        /* Init Functions */
        // midDiv();
        app.fullwidthEvents();
    });
    $("input[type='tel']").attr('type', 'number'); 
}

$(window).resize(function(){
    app.fullwidthEvents();
    var winWid = $(window).width();

    if(winWid>768) {
        $('.project-image').each(function(){            
            if ($(this).find('img').is('[data-width]')) {
                var naturalImg=$(this).find('img').attr("data-width");
                $(this).find('img').css({width:naturalImg/2});
            }
            else{
                var naturalImg=$(this).find('img').innerWidth();
                $(this).find('img').attr("data-width",naturalImg);
                $(this).find('img').css({width:naturalImg/2});
            }
            
        });
        
    }
});

$(window).scroll(function() {
    //scroll function here
    var winWid = $(window).width();
    if(winWid>1024) {
        var opac = 1-$(window).scrollTop() * 10 / $(window).height() / 10;
        $('.madeIntro .row').css('opacity',opac);
    }
    
    var scroll = $(window).scrollTop();
    if(scroll > 400){
        $(".scroll-btn").addClass('active');
    }else{
        $(".scroll-btn").removeClass('active');
    }

});

$().ready(function() {
    app.init();
});

// if(Modernizr.touch){  
//   //modernizer touch function code here for mobile
// }
$(window).on('load', function() {
    var winWid = $(window).width(); 
    $('.render-blk').stop(true, true).animate({ opacity: 1 }, 1000);
    if (sessionStorage.getItem('loader') == null) {
        sessionStorage.setItem('loader', 'true');
    }
});
