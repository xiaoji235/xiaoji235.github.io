
var deviceDetector=function(){var b=navigator.userAgent.toLowerCase(),a=function(a){void 0!==a&&(b=a.toLowerCase());return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b)?"phone":"desktop"};return{device:a(),detect:a,isMobile:"desktop"!=a()?!0:!1,userAgent:b}}();


//function orientation device detection
function doOnOrientationChange()
{
	var turnDiv = $('#warning');
	switch(window.orientation)
	{
		case -90:
			turnDiv.fadeIn();
			break;
		case 90:
			turnDiv.fadeIn();
			break;
		default:
			turnDiv.fadeOut();

			break;
	}
}



(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


//loader 
Pace.options.ajax = false;

Pace.on("done", function() {
		setTimeout(function(){ 
			$(".pace").fadeOut( 400 ,function(){
				$("#loader").fadeOut(800,function(){
					$(".pace").remove();
				});
			});
		}, 400);
});

$( document ).ready(function() {
	
	
	function scriviCookie(nomeCookie,valoreCookie,durataCookie)
		{
		  var scadenza = new Date();
		  var adesso = new Date();
		  scadenza.setTime(adesso.getTime() + (parseInt(durataCookie) * 60000));
		  document.cookie = nomeCookie + '=' + escape(valoreCookie) + '; expires=' + scadenza.toGMTString() + '; path=/';
		}

		function leggiCookie(nomeCookie)
		{
		  if (document.cookie.length > 0)
		  {
			var inizio = document.cookie.indexOf(nomeCookie + "=");
			if (inizio != -1)
			{
			  inizio = inizio + nomeCookie.length + 1;
			  var fine = document.cookie.indexOf(";",inizio);
			  if (fine == -1) fine = document.cookie.length;
			  return unescape(document.cookie.substring(inizio,fine));
			}else{
			   return "";
			}
		  }
		  return "";
		}

	 var controllo = leggiCookie('cookieAcc');
	 if(controllo == 1){
		 $(".cookie-bar").remove();
	 }
	 else{
		 $(".cookie-bar").show();
		 $(".cookie-bar").css("opacity","1");
	 }


	$(window).scroll(function(){
        if ($(window).scrollTop() > 1){
           $(".cookie-bar").fadeOut();
			scriviCookie('cookieAcc','1',500000);
        }
    });

	
	

	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
		$('#pointer').remove();
		
	
	} else{
		
		var selectorList = [".anim", ".work-txt", "input",".easy-link",".play-video",".proj-link","#submit"];
		var selector = selectorList.join(", ");

		var selectorListW = [".mini-menu li", ".menu li a",".contact-inner li",".contact-inner a", ".menu-trigger",".back"];
		var selectorW = selectorListW.join(", ");

		var selectorListO = [".pointer-overlay",".work-section-single","#hire-container"];
		var selectorO = selectorListO.join(", ");
		
		var selectorListArrow = [".anim",".work-txt"];
		var selectorA = selectorListArrow.join(", ");
		
		$(selectorA).mouseenter(function() {
			$('#pointer').addClass("hover-arrow");
		}).mouseleave(function() {
			$('#pointer').removeClass("hover-arrow");
		});

		$(selectorO).mouseenter(function() {
			$('#pointer').addClass("hover-o");
		}).mouseleave(function() {
			$('#pointer').removeClass("hover-o");
		});


		$(selectorW).mouseenter(function() {
			$('#pointer').addClass("hover-w");
		}).mouseleave(function() {
			$('#pointer').removeClass("hover-w");
		});

		$(selector).mouseenter(function() {
			$('#pointer').addClass("hover");
		}).mouseleave(function() {
			$('#pointer').removeClass("hover");
		});

		var selectorListB = [".nav-container", "footer",".menu-trigger",".back"];
		var selectorB = selectorListB.join(", ");

		$(selectorB).mouseenter(function() {
			$('#pointer').addClass("hover-w-m");
		}).mouseleave(function() {
			$('#pointer').removeClass("hover-w-m");
		});


		var xMousePos = 0;
		var yMousePos = 0;

		$(window).on('mousemove',function(event) {
			xMousePos = event.clientX;
			yMousePos = event.clientY;
		}); 

        window.requestAnimationFrame(function PointerMove() {

			$("#pointer").css('transform', 'matrix(1, 0, 0, 1, '+xMousePos+',  '+yMousePos+')');
			
			window.requestAnimationFrame(PointerMove);

		});
        
        
        //_________//
        
        
        
        
        
        
        //_____________//
		
	}
	
	

	
	
	$('.menu-trigger').clickToggle(function() {
		//Aggiungo classe menu e blocco scroll
		$("html, body").addClass('disable-scroll');$( ".hamburger" ).addClass('is-active');
		
		//animazioni apertura
		$('.nav-container').fadeIn(600);
		setTimeout(function(){ $(".link1").addClass('in'); }, 700);
		setTimeout(function(){ $(".link2").addClass('in'); }, 800);
		setTimeout(function(){ $(".link3").addClass('in'); }, 900);
		setTimeout(function(){ $(".link4").addClass('in'); }, 1000);
		setTimeout(function(){ $(".contact").fadeTo(1000,1); }, 1100);
	}, function() {
		//Rimuovo classe menu e riattivo scroll
		$("html, body").removeClass('disable-scroll'); $( ".hamburger" ).removeClass('is-active');
		
		//animazioni chiusura
	    $(".menu li a").removeClass('in'); 
		$(".contact").fadeTo(200,0); 
		$('.nav-container').delay(300).fadeOut(600);
	});
	
	
	
	$(".menu li a").on({
		mouseenter: function () {
			$('.menu li a').not(this).addClass('link-no-hover');
		},
		mouseleave: function () {
			$('.menu li a').not(this).removeClass('link-no-hover');
		}
	});

	
	$( ".menu li a" ).on( "click", function(event) {
		event.preventDefault();
		var urla = $(this).attr('href');
		$('.nav-container').addClass('loading');
		$(".menu li a").removeClass('in');
		$(".contact").fadeOut(400);
		$("#pointer").addClass('reduce');
		$("header").fadeOut(400);
		setTimeout(function(){ window.location.href = urla; }, 800);
	});
	
	var basicLinkList = [".home-link", ".mini-menu li a", ".go-hire", ".easy-link",".proj-link"];
	var basicLink = basicLinkList.join(", ");
	$( basicLink ).on( "click", function(event) {
		event.preventDefault();
		var urla = $(this).attr('href');
		$('body').fadeOut(400);
		setTimeout(function(){ window.location.href = urla; }, 800);
	});
	
	if(deviceDetector.device === 'desktop'){
    // You're on a desktop.
	}else{
		if(deviceDetector.device === 'tablet'){
		  // You're on a tablet.
		}else{
		 doOnOrientationChange();
		 window.addEventListener('orientationchange', doOnOrientationChange);
		}
	}


});

