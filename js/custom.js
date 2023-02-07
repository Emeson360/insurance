
    function numbersonly(e, decimal) {
    		var key;
    		var keychar;
    		if (window.event) {key = window.event.keyCode;}
    		else if (e) {key = e.which;}
    		else {return true;}
    		keychar = String.fromCharCode(key);
    		if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) ) {return true;}
    		else if ((("0123456789").indexOf(keychar) > -1)) {return true;}
    		else if (decimal && (keychar == ".")) {return true;}
    		else return false; 
    	}
// mobile navbar button
  $('.navbar-toggle').click(function() {
  $('.navbar-toggle').toggleClass("nav-bg").toggleClass("pad");
  $('.navbar').toggleClass("nav-bg").toggleClass("pad");

   $('body').toggleClass('pos-fix');
});
/* Zipcode place Holder Function */	
        $(document).ready(function() {
            var holder = 'Zip Code';
            $('.zip').blur(function() {
                if ($(this).val().length == 0)
                    $(this).val(holder).addClass('holder');
            }).focus(function() {
                if ($(this).val() == holder)
                    $(this).val('').removeClass('holder');
            }).val(holder).addClass('holder');
        });
/* equal height on index page */
function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).css({'height':'auto'}).height();
        if(thisHeight > tallest) {
            tallest = thisHeight ;
			if ($(this).find("p").length > 0) {
	tallest=tallest+40;
	     }
        }	
    group.height(tallest);
    });		
}

/* banner container fit */


/* $(document).ready(function() {
     $("#logoslider").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: false,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:992,
                visibleItems: 4
            },
			tabland: { 
                changePoint:1199,
                visibleItems: 5
            }
        }
    });
}); */



var btn1 = document.getElementById('activeBtn1');
var btn2 = document.getElementById('activeBtn2');
var btn3 = document.getElementById('activeBtn3');
var btn4 = document.getElementById('activeBtn4');

btn1.addEventListener('click', () => {
    btn1.classList.add('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
})

btn2.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.add('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
})
btn3.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.add('activeBtn');
    btn4.classList.remove('activeBtn');
})
btn4.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.add('activeBtn');
})
