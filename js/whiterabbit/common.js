$(document).ready(function() {

	$(window).load(function() {
        var img_link = $("#logo a img").attr('src');
        var img_temp = "http:/" + img_link.substring(img_link.length - 6, 6);
		var images = new Array ('01.png', '02.png', '03.png');

    var imgNum = Math.floor(Math.random() * images.length);
    $("#logo a img").attr('src', img_temp + images[imgNum]);
	});

	// Create event sub-navi for Page
	$('.nav-sub').hide();
	$('.navi > li').hover(
		function() { 
			$(this).addClass('active')
					.find('ul.nav-sub')
					.css({visibility: "visible",display: "none"})
					.slideDown(800); 
		},function() { 
			$(this).removeClass('active')
					.find('ul.nav-sub')
					.css({visibility: "hidden"});
		}
	);

	$('.nav-sub > li').hover(
		function() {
			$(this).children('a').stop().css({'color':'#9b1b64'});
		},
		function() {
			$(this).children('a').stop().css({'color':'#000'});
		}
	);

	// Create rollover for navigation
	$(".navi > li > a, .nav-access > li > a, .nav-footer > li > a").hover(
		function() {
			$(this).stop().fadeTo("2000",0);
	}, function() {
			$(this).stop().fadeTo("1000",1.0);
	});

	// Create slide for main visual
	var $mainSlider = $('.main-slider');

	if($mainSlider.length > 0) {
		$mainSlider.bxSlider({
      mode: 'fade',
      auto: true,
      pause: 4000,
      speed: 1500,
      pager: true,
      controls: false
		});
	}

	$('.form-search .ipt-text').on({
		focus: function() {
			if($(this).val() == 'Subscrible now') {
				$(this).val('');
			}
		},
		blur: function() {
			if($(this).val() == '') {
				$(this).val('Subscrible now');
			}
		}
	});

	$('.utility > li').each(function() {
		var txt = $(this).text();
		var attrClass = $(this).attr('class');
		$(this).hover(function() {
			$(this).parents('.discrition').find('.benifit').addClass(attrClass).html(txt).show();
		}, function() {
			$(this).parents('.discrition').find('.benifit').removeClass(attrClass).hide();
		});
	});

	if($('.pagination').length > 0) {
		$('.pagination').pagination({
			items: 100,
			itemsOnPage: 10
			// prevText: '<<',
			// nextText: '>>'
		});
	}

	getDatePicker(".datepicker");

}); // end document jquery

function getDatePicker(item) {
    var img_link = $(".col03 img").attr('src');
    if(item.length > 0) {
        $(item).datepicker({
            showOn: 'both',
            dateFormat: 'yy/mm/dd',
            buttonImage: img_link,
            buttonImageOnly: true,
            changeMonth: true,
            changeYear: true,
            showMonthAfterYear: true
        });
    }
}

