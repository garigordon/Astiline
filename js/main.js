$(document).ready(function() {
  var validator;
    $(function () {
        $('.js-open-menu').click(function (e) {
            e.preventDefault();
      if($('#dropdown-menu').css("display")=="none")
            {$('#dropdown-menu').css("display","block");}
      else{$('#dropdown-menu').css("display","none");}
        });
        $('.js-cart-notify').click(function (e) {
            e.preventDefault();
      $('#cart-notify').css("display","block");
        });
        $('.close-cart-notify').click(function (e) {
            e.preventDefault();
      $('#cart-notify').css("display","none");
        });
        $('.js-open-call-form').click(function (e) {
            e.preventDefault();
            if ($(this).attr('data-form')) {
                showOrder($(this).attr('data-form'));
            } else {
                showOrder("#call-form");
            }
        });
        $('.js-open-item').click(function (e) {
            e.preventDefault();
            showOrder("#item-form");
        });
        $('.js-open-reg').click(function (e) {
            e.preventDefault();
            showOrder("#reg-form");
        });
        $('.js-open-add').click(function (e) {
            e.preventDefault();
            showOrder("#add-form");
        });
        $('.js-send-form').click(function (e) {
            e.preventDefault();
            var form = $(this).parents('.js-call-form');
            var validator = $(form).validate(validator_rules);
            if (!validator.form())
                return;
            var data = form.serialize();

            var action = 'sendmail';
            sendForm(action, data, function (answer) {
                var msg = "Ошибка сервиса.";
                if (answer == "ok")
                    msg = "Ваше сообщение принято.";
                alert(msg);
            });
            $.modal.close();
        });
    });
 $(".slider-own").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
  $(".onw-slider-bestbox").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
  $(".onw-slider-new").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  $(".own-best-product").owlCarousel({
    navigation : true,
      items : 4,
      pagination:true,
      navigationText : ["",""] ,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3],
    itemsTablet : [768,2],
    itemsMobile : [479,1]
  });

  $(".own-look").owlCarousel({
    navigation : true,
      items : 4,
      pagination:true,
      navigationText : ["",""] ,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3],
    itemsTablet : [768,2],
    itemsMobile : [479,1]
  });
    
equalheight = function(container){
  var currentTallest = 0,
   currentRowStart = 0,
   rowDivs = new Array(),
   $el,
   topPosition = 0;
  $(container).each(function() {

  $el = $(this);
  $($el).height('auto')
  topPostion = $el.position().top;

  if (currentRowStart != topPostion) {
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
   rowDivs.length = 0; // empty the array
   currentRowStart = topPostion;
   currentTallest = $el.height();
   rowDivs.push($el);
  } else {
   rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }

  $(window).load(function() {
    equalheight('.main-products .b-product,.benefit');
    equalheight('.main-slider-look .slide .b-product');
  });


  $(window).resize(function(){
    equalheight('.main-products .b-product,.benefit');
    equalheight('.main-slider-look .slide .b-product');
  });

 /*


  $("#owl-partners").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  $("#own-advisor-box").owlCarousel({
 	  navigation : true,
      items : 2,
      pagination:false,
      navigationText : ["<i class='demo-icon icon-left-open-big'>&#xe802;</i>","<i class='demo-icon icon-right-open-big'>&#xe801;</i>"] ,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
 	  itemsTablet : [768,1],
 	  itemsMobile :	[479,1]
  });

  $("#own-blog-box").owlCarousel({
 	  navigation : true,
      items : 2,
      pagination:false,
      navigationText : ["<i class='demo-icon icon-left-open-big'>&#xe802;</i>","<i class='demo-icon icon-right-open-big'>&#xe801;</i>"] ,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
 	  itemsTablet : [768,1],
 	  itemsMobile :	[479,1]
  });
  $("#own-team-box").owlCarousel({
 	  navigation : true,
      items : 3,
      pagination:false,
      navigationText : ["<i class='demo-icon icon-left-open-big'>&#xe802;</i>","<i class='demo-icon icon-right-open-big'>&#xe801;</i>"] ,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
 	  itemsTablet : [768,2],
 	  itemsMobile :	[479,1]
  });*/
});
$( window ).load(function() {
    var top = $("#catalog-menu").offset().top;
    var h =  $("#catalog-menu").height();
    console.log(top,h);
    $('#catalog-menu .js-submenu--level1, .js-submenu--level2').css('height', h);
    $('#catalog-menu .js-submenu--level1, .js-submenu--level2').each(function(){
        var elemTop = $(this).offset().top;
        $(this).css('top',top - elemTop);
    });
});
/*
$(window).scroll(function()
{
    if($(document).scrollTop() > 140)
    {
        $('#header').addClass('sticky animated fadeInDown');
    }
    else
    {
        $('#header').removeClass('sticky animated fadeInDown');
    }


});*/