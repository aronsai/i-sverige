var lastScroll = 0;

var menu = ["hem", "isverige", "programmet"];

$(function(){

    partOffsets = {};

    for(item of menu) {
        partOffsets[item] = $("#"+item).offset().top;
    }

    // Buggar i Safari till OS X
    /*$(window).scroll(function(e) {
        var scroll = $(this).scrollTop();

        var offset = lastScroll - scroll;
        if(Math.abs(offset) > 200) {
            lastScroll = scroll;
            return;
        }
        if(offset > 0) {
            $(".navigation").css("opacity", 1);
        }
        else {
            $(".navigation").css("opacity", 0);
        }

        lastScroll = scroll;
    });*/

    var scroller = function(name) {

        $("#"+name+"-nav").click(function() {
            offset = partOffsets[name] - $(window).height() * 0.02;
            window.scroll(0, offset);
        });
    };

    scroller("hem");
    scroller("isverige");
    scroller("programmet");


});
