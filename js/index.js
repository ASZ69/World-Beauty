// JavaScript Document

$(document).ready(function(){
//	$('#vid').get(0).play();
});


//contact
	function sendMail() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var num = document.getElementById("num").value;
			var sub = document.getElementById("sub").value;
			var msg = document.getElementById("msg").value;
			window.location.href = "mailto:" + email + "?subject=" + sub + "&body=I'm " + name + " " + msg;
		}