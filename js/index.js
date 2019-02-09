// JavaScript Document
$(document).ready(function () {
    $(function () {

        $('.long-div').appear();

        $(document.body).on('appear', '.long-div', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.long-div').addClass('slideInRight');
            });

        });
    });

});

//round divs animation
$(document).ready(function () {
    $(function () {

        $('.roundImgDiv').appear();

        $(document.body).on('appear', '.roundImgDiv', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.roundImgDiv').addClass('fadeInLeft');
            });

        });
    });

});

$(document).ready(function () {
    $(function () {

        $('.roundImgDiv2').appear();

        $(document.body).on('appear', '.roundImgDiv2', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.roundImgDiv2').addClass('fadeInRight', 'slower');
            });

        });
    });

});

//TriLineDiv Animation
$(document).ready(function () {
    $(function () {

        $('.triLineDiv').appear();

        $(document.body).on('appear', '.triLineDiv', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.triLineDiv').addClass('bounceInLeft');
            });

        });
    });

});


$(document).ready(function () {
    $(function () {

        $('.triLineDiv3').appear();

        $(document.body).on('appear', '.triLineDiv3', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.triLineDiv3').addClass('bounceInRight', 'slower');
            });

        });
    });

});



//two div img


$(document).ready(function () {
    $(function () {

        $('.anim').appear();

        $(document.body).on('appear', '.anim', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.anim').addClass('flipInY', 'slower');
            });

        });
    });

});

//4div line 
$(document).ready(function () {
    $(function () {

        $('.st-tri-div').appear();

        $(document.body).on('appear', '.st-tri-div', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.st-tri-div').addClass('fadeInRight');
            });

        });
    });

});

$(document).ready(function () {
    $(function () {

        $('.st-tri-div2').appear();

        $(document.body).on('appear', '.st-tri-div2', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.st-tri-div2').addClass('fadeInLeft');
            });

        });
    });

});
//line div
$(document).ready(function () {
    $(function () {

        $('.img-1').appear();

        $(document.body).on('appear', '.img-1', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.img-1').addClass('rotateInDownLeft');
            });

        });
    });

});
//Row 7 Blocks

$(document).ready(function () {
    $(function () {

        $('.animRow7').appear();

        $(document.body).on('appear', '.animRow7', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.animRow7').addClass('flipInX');
            });

        });
    });

});
//Row 9th Blogs
$(document).ready(function () {
    $(function () {

        $('.long-div2 ').appear();

        $(document.body).on('appear', '.long-div2 ', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.long-div2').addClass('fadeInLeft');
            });

        });
    });

});


$(document).ready(function () {
    $(function () {

        $('.long-div3').appear();

        $(document.body).on('appear', '.long-div3', function (e, $affected) {
            // this code is executed for each appeared element
            $affected.each(function () {
                $('.long-div3').addClass('fadeInRight');
            });

        });
    });

});
//contect
function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var num = document.getElementById("num").value;
    var sub = document.getElementById("sub").value;
    var msg = document.getElementById("msg").value;
    window.location.href = "mailto:" + email + "?subject=" + sub + "&body=I'm " + name + " " + msg;
}