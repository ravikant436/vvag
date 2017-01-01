(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
	
	// Modal Code
	$('#coirButton').click(function(){
		$('#modalHeader').css('background','url(img/1.png)');
		$('#modalTitle').html("Coir Pith");
		$('#modalBody').html("Coir pith a waste product obtained during the extraction of coir fibre from husk is very light, highly compressible and highly hygroscopic. It is used as a soil conditioner, surface mulch/ rooting medium and desiccant. Composted coir pith is an excellent organic manure for indoor plants as well as for horticulture crops. Several firms are manufacturing composted coir pith in the country. Compressed coir pith in the form of briquettes for easy transportation is also manufactured in the country. India accounts for more than two-thirds of the world production of coir and coir products. <br><br><b>And we bring to you the best of ‘em all!</b>");
	});

	$('#coconutButton').click(function(){
		$('#modalHeader').css('background','url(img/2.png)');
		$('#modalTitle').html("Coconuts");
		$('#modalBody').html("Coconuts are known for their great versatility, as evidenced by many traditional uses, ranging from food to cosmetics. Some of the world’s best coconut varieties are found in the western ghats region of India. They are preferred by buyers all across the globe for its taste and nature. India is the world's third largest producer of coconuts <br><b>And we bring to you the best of ‘em all!</b>");
	});
	
	var agroString="<br><h5 style='font-weight:bold;'>Vegetables</h5>"+
		"<p>Vegetables, the edible part of a plant, are rich sources of several vital nutrients, contributing immensely to the overall growth of the living being.</p>"+
		"<ul>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Carrot</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-lady-finger.html' target='_blank'>Lady Finger (Okra)</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-french-beans.html' target='_blank'>French Beans</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-potato.html' target='_blank'>Potato</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Cucumber</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Lemon</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Onion (Shallot)</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Spinach</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Mushroom</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Cauliflower</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Bottle Gourd</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Radish</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Peas</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Sponge Gourd</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Chili</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Cabbage</a></li>"+
		"</ul>"+
		"<br><h5 style='font-weight:bold;'>Fruits</h5>"+
		"<p>Fruits are a rich source of many important nutrients like fibers, vitamins, water, etc. The daily consumption of fruits keeps one healthy and at the same time maintains a young look</p>"+
		"<ul>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Banana</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-lady-finger.html' target='_blank'>Sapodilla</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-french-beans.html' target='_blank'>Water Melon</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-potato.html' target='_blank'>Papaya</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Guava</a></li>"+
		"</ul>"+
		"<br><h5 style='font-weight:bold;'>Spices</h5>"+
		"<p>Spices are defined as dried seed or fruit, in whole or powder form, used as food additives for enhancing the flavor or taste of a particular food item. India produces 3.2 million tonnes of various spices. </p>"+
		"<ul>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Black Pepper</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-lady-finger.html' target='_blank'>Cardamom</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-french-beans.html' target='_blank'>Chilli Powder</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-potato.html' target='_blank'>Cinnamon</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Cloves</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-french-beans.html' target='_blank'>Dry Red Chilly</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-potato.html' target='_blank'>Salt</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Turmeric</a></li>"+
		"</ul>"+
		"<br><h5 style='font-weight:bold;'>Cereals &Pulses</h5>"+
		"<p>Cereals and pulses are an integral part of our lives, as they are the only food products that provide instant energy.</p>"+
		"<ul>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-carrot.html' target='_blank'>Ground Nut</a></li>"+
		"<li><a href='http://www.agriculturalproductsindia.com/vegetables/vegetables-lady-finger.html' target='_blank'>Rice Bran</a></li>"+
		"</ul>"+
		"";
	
	$('#agroButton').click(function(){
		$('#modalHeader').css('background','url(img/3.png)');
		$('#modalTitle').html("Agro Products");
		$('#modalBody').html(agroString);
	});
	
})(jQuery); // End of use strict
