$(function () {

    function pop() {

        var minMargin = 50;
        var viewportHeight = $(".viewport").height();
        var popupHeight = $(".popup:visible").height();

        var margin = (viewportHeight - popupHeight) / 2;

        if (margin < minMargin) {
            margin = minMargin; // big
        }

        $(".popup").css({ marginTop: margin, marginBottom: margin });

        $(".scrollbase").height(popupHeight + 2 * margin);
    }



    $(".button").on('click', function () {




        $("body").addClass("scrollable");
        $(".viewport").addClass("scrollable");

        if ($(this).hasClass("p1")) {
            $(".pop1").show();
        } else {
            $(".pop2").show();
        }

        pop();

        return false;
    });

    $(".popup").click(function (event) {
        event.stopPropagation();

    });

    $(".scrollbase").on('click', function () {
        $("body").removeClass("scrollable");
        $(".viewport").removeClass("scrollable");
        $(".popup").hide();
        return false;
    });

    $(window).resize(function () {
        pop();
    })
});

var audio = document.getElementById("audio1");  // Switch
var audio2 = document.getElementById("audio2"); // Click link
var audio3 = document.getElementById("audio3"); // Hover little click

$("#box-1").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
});

$("#box-2").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
});

$("#box-3").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
});

$("a").click(function(){
    audio2.currentTime = 0;
    audio2.play();
});

$("#top-menu-sound1, #top-menu-sound2, #top-menu-sound3, #top-menu-sound4, #top-menu-sound5").mouseenter(function(){
    audio3.currentTime = 0;
    audio3.play();
});


var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    function doCORSRequest(options, printResult) {
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = x.onerror = function() {
            printResult(x.responseText || ''
        );
    };
    x.send(options.data);
}

$(document).ready(function(){
        doCORSRequest({
            method: "GET",
            url: "https://addons.opera.com/fr/extensions/details/collins-kosuke-extension/",
            data: "",
        },
        function printResult(dataopera) {
            //var data = $.HTMLparse(data)
            var versionopera = $(dataopera).find("section.about > dl > dd:eq(2)").text();

            var operaVersion = document.getElementById("opera-version")

            operaVersion.innerText = "V" + versionopera
        });
        doCORSRequest({
            method: "GET",
            url: "https://addons.mozilla.org/fr/firefox/addon/collins-kosuke-extension/",
            data: "",
        },
        function printResult(datafirefox) {
            //var data = $.HTMLparse(data)
            var versionfirefox = $(datafirefox).find("dd.AddonMoreInfo-version").text();

            var firefoxVersion = document.getElementById("firefox-version")

            firefoxVersion.innerText = "V" + versionfirefox
        })
});

document.getElementById("closeFrame").onclick = function () {
    $('.hot-info').css('display','none');
    localStorage.setItem('chromeInfo', 'Hide');
};
$(document).ready(function(){
    if (localStorage.getItem('chromeInfo') === null) {
        localStorage.setItem('chromeInfo', 'Visible');
    } else if (localStorage.getItem('chromeInfo') == "Hide") {
        $('.hot-info').css('display','none');
    }
})

$(document).ready(function(){
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    if (isOpera === true) {
        var operaTooltip = document.getElementById("opera-tooltip")
        operaTooltip.innerHTML = "<i class=\"far fa-check-circle\" style=\"font-size: 20px; color: rgb(30, 255, 49);\"></i><span class=\"tooltiptext tooltip-left\">Tu utilises Opera !</span>"
    } else {
        var operaTooltip = document.getElementById("opera-tooltip")
        operaTooltip.innerHTML = "<i class=\"far fa-times-circle\" style=\"font-size: 20px; color: rgb(255, 30, 30);\"></i><span class=\"tooltiptext tooltip-left\">Tu utilises pas Opera !</span>"
    }

    if (isFirefox === true) {
        var firefoxTooltip = document.getElementById("firefox-tooltip")
        firefoxTooltip.innerHTML = "<i class=\"far fa-check-circle\" style=\"font-size: 20px; color: rgb(30, 255, 49);\"></i><span class=\"tooltiptext tooltip-left\">Tu utilises Firefox !</span>"
    } else {
        var firefoxTooltip = document.getElementById("firefox-tooltip")
        firefoxTooltip.innerHTML = "<i class=\"far fa-times-circle\" style=\"font-size: 20px; color: rgb(255, 30, 30);\"></i><span class=\"tooltiptext tooltip-left\">Tu utilises pas Firefox !</span>"
    }
})