// JavaScript Document

$(document).ready(function(){
	$(function() {

	  $('.long-div').appear();

	  $(document.body).on('appear', '.long-div', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.long-div').addClass('slideInRight');
		});
		  
	  });
	});

});

//round divs animation
$(document).ready(function(){
	$(function() {

	  $('.roundImgDiv').appear();

	  $(document.body).on('appear', '.roundImgDiv', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.roundImgDiv').addClass('slideInLeft');
		});
		  
	  });
	});

});

$(document).ready(function(){
	$(function() {

	  $('.roundImgDiv2').appear();

	  $(document.body).on('appear', '.roundImgDiv2', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.roundImgDiv2').addClass('slideInRight');
		});
		  
	  });
	});

});

//TriLineDiv Animation
$(document).ready(function(){
	$(function() {

	  $('.triLineDiv').appear();

	  $(document.body).on('appear', '.triLineDiv', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.triLineDiv').addClass('slideInLeft');
		});
		  
	  });
	});

});


$(document).ready(function(){
	$(function() {

	  $('.triLineDiv2').appear();

	  $(document.body).on('appear', '.triLineDiv2', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.triLineDiv2').addClass('slideInUp');
		});
		  
	  });
	});

});


$(document).ready(function(){
	$(function() {

	  $('.triLineDiv3').appear();

	  $(document.body).on('appear', '.triLineDiv3', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.triLineDiv3').addClass('slideInRight');
		});
		  
	  });
	});

});



//two div img


$(document).ready(function(){
	$(function() {

	  $('.pb-img').appear();

	  $(document.body).on('appear', '.pb-img', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.pb-img').addClass('flipInY');
		});
		  
	  });
	});

});



$(document).ready(function(){
	$(function() {

	  $('.pb-img').appear();

	  $(document.body).on('appear', '.pb-img', function(e, $affected) {
		// this code is executed for each appeared element
		$affected.each(function() {
		  $('.pb-img').addClass('flipInY');
		});
		  
	  });
	});

});





//zoom in js
$('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

//contact
//	function sendMail() {
//			var name = document.getElementById("name").value;
//			var email = document.getElementById("email").value;
//			var num = document.getElementById("num").value;
//			var sub = document.getElementById("sub").value;
//			var msg = document.getElementById("msg").value;
//			window.location.href = "mailto:" + email + "?subject=" + sub + "&body=I'm " + name + " " + msg;
//		}