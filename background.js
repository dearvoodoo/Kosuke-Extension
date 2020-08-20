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

$("#box-4").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
});

$("#box-5").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
});

$("#box-6").mouseenter(function() {
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
        url: "https://addons.mozilla.org/fr/firefox/addon/kosuke-extension/",
        data: "",
    },
    function printResult(datafirefox) {
        //var data = $.HTMLparse(data)
        var versionfirefox = $(datafirefox).find("dd.AddonMoreInfo-version").text();

        var firefoxVersion = document.getElementById("firefox-version")

        firefoxVersion.innerText = "V" + versionfirefox
    });

    doCORSRequest({
        method: "GET",
        url: "https://addons.opera.com/fr/extensions/details/collins-kosuke-extension/",
        data: "",
    },
    function printResult(dataopera) {
        //var data = $.HTMLparse(data)
        var user_opera = $(dataopera).find("section.about > dl > dd:eq(0)").text();

        doCORSRequest({
            method: "GET",
            url: "https://addons.mozilla.org/fr/firefox/addon/kosuke-extension/",
            data: "",
        },
        function printResult(datafirefox) {
            //var data = $.HTMLparse(data)
            var user_firefox = $(datafirefox).find(".AddonMeta-overallRating > .MetadataCard-list > .MetadataCard-content:eq(0)").text();

            var user_in_total = parseInt(user_opera, 10) + parseInt(user_firefox, 10)

            var total_user = document.getElementById("total-user")
            total_user.innerText = user_in_total
        });
    });

    doCORSRequest({
        method: "GET",
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC8Me97T5lfIU4g8iY3TJMwg",
        data: "",
    },
    function printResult(data) {
        var data = JSON.parse(data)
        var link1 = data.items[0].link;
        var id1 = link1.substr(link1.indexOf("=")+1);
        var thumbnail1 = "https://i1.ytimg.com/vi/" + id1 + "/maxresdefault.jpg";
        var title1 = data.items[0].title;
        var box1 = document.getElementById("box-6")
        var videolink1 = "https://www.youtube.com/watch?v=" + id1
        box1.setAttribute('href', videolink1)
        var box1thumb = document.getElementById("box-6-thumb")
        box1thumb.setAttribute('src', thumbnail1)
        var Titlebox = document.getElementById("video-title")
        Titlebox.innerText = title1
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


$(document).ready(function(){
    $.ajaxSetup({
        headers : {
            'Client-ID' : '88ilzeayc1obr0hlqrdj4dnm41t0ns',
            'Accept' : 'application/vnd.twitchtv.v5+json'
        }
    });
    $.getJSON("https://api.twitch.tv/kraken/users?login=kosuke", function(getid) {
        var id = getid.users[0]["_id"]
        var url = 'https://api.twitch.tv/kraken/streams/' + id
        $.getJSON(url, function(data) {
            if(data["stream"] == null) { // STREAM OFFLINE
                var boxTitle = document.getElementById("stream-status")
                boxTitle.innerHTML = "LIVE HORS LIGNE"
                boxTitle.style.color = "#e91c4c"

                var Textbox = document.getElementById("stream-title")
                Textbox.innerHTML = "Le live est hors ligne !"

                var boxLink = document.getElementById("box-4")
                boxLink.setAttribute('href', '#')

                $.getJSON("https://api.twitch.tv/kraken/channels/90468874", function(result){
                    var boxThumb = document.getElementById("box-4-thumb")
                    boxThumb.setAttribute('src', result["video_banner"])
                })
            }
            else { // STREAM ONLINE
                var game = data["stream"]["game"]
                var title = data["stream"]["channel"]["status"]

                var name = data["stream"]["channel"]["name"]
                var thumb = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + name + "-1920x1080.jpg"

                var boxTitle = document.getElementById("stream-status")
                boxTitle.innerHTML = "LIVE EN LIGNE"
                boxTitle.style.color = "#8dee1c"

                var boxThumb = document.getElementById("box-4-thumb")
                boxThumb.setAttribute('src', thumb)

                var boxLink = document.getElementById("box-4")
                boxLink.setAttribute('href', 'https://twitch.tv/kosuke')

                var Textbox = document.getElementById("stream-title")
                Textbox.innerHTML = "Le live est en ligne sur " + game
            }
        })
    })
});