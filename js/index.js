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
//contact
//	function sendMail() {
//			var name = document.getElementById("name").value;
//			var email = document.getElementById("email").value;
//			var num = document.getElementById("num").value;
//			var sub = document.getElementById("sub").value;
//			var msg = document.getElementById("msg").value;
//			window.location.href = "mailto:" + email + "?subject=" + sub + "&body=I'm " + name + " " + msg;
//		}