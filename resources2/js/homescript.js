//Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//get: function () {
//    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//}});
//$('body').on('click touchstart', function () {
//        const videoElement = document.getElementById('outVid');
//        if (videoElement.playing) {
//            // video is already playing so do nothing
//        }
//        else {
//            // video is not playing
//            // so play video now
//            videoElement.play();
//        }
//});

$(document).ready(function(){

//$("#vidPlay").delay(5500).click();
//$("#head1").delay(500).fadeIn(1000).delay(500).fadeOut(1000);  
//$("#head2").delay(3100).fadeIn(1000).delay(500).fadeOut(1000);
//$("#head3").delay(5700).fadeIn(1000);
//$("div.homePop").delay(7000).fadeIn(1000);
//setTimeout(function(){
//$("#head1").fadeToggle(1000);
//}, 1200);
//$("#head1").fadeToggle(1000);
//setTimeout(function(){
//$("#head2").fadeToggle(1000);
//}, 1200);
//$("#head2").fadeToggle(1000);
});
function showWork1(){
    if ($("#work2").is(':visible'))
    $("#work2").slideToggle(500);
    if ($("#work3").is(':visible'))
    $("#work3").slideToggle(500);
    if ($("#work4").is(':visible'))
    $("#work4").slideToggle(500);
    if ($("#work5").is(':visible'))
    $("#work5").slideToggle(500);
    if ($("#work6").is(':visible'))
    $("#work6").slideToggle(500);
    $("#work1").slideToggle(500);
}
function showWork2(){
    if ($("#work1").is(':visible'))
    $("#work1").slideToggle(500);
    if ($("#work3").is(':visible'))
    $("#work3").slideToggle(500);
    if ($("#work4").is(':visible'))
    $("#work4").slideToggle(500);
    if ($("#work5").is(':visible'))
    $("#work5").slideToggle(500);
    if ($("#work6").is(':visible'))
    $("#work6").slideToggle(500);
    $("#work2").slideToggle(500);
}
function showWork3(){
    if ($("#work2").is(':visible'))
    $("#work2").slideToggle(500);
    if ($("#work1").is(':visible'))
    $("#work1").slideToggle(500);
    if ($("#work4").is(':visible'))
    $("#work4").slideToggle(500);
    if ($("#work5").is(':visible'))
    $("#work5").slideToggle(500);
    if ($("#work6").is(':visible'))
    $("#work6").slideToggle(500);
    $("#work3").slideToggle(500);
}
function showWork4(){
    if ($("#work2").is(':visible'))
    $("#work2").slideToggle(500);
    if ($("#work3").is(':visible'))
    $("#work3").slideToggle(500);
    if ($("#work1").is(':visible'))
    $("#work1").slideToggle(500);
    if ($("#work5").is(':visible'))
    $("#work5").slideToggle(500);
    if ($("#work6").is(':visible'))
    $("#work6").slideToggle(500);
    $("#work4").slideToggle(500);
}
function showWork5(){
    if ($("#work2").is(':visible'))
    $("#work2").slideToggle(500);
    if ($("#work3").is(':visible'))
    $("#work3").slideToggle(500);
    if ($("#work4").is(':visible'))
    $("#work4").slideToggle(500);
    if ($("#work1").is(':visible'))
    $("#work1").slideToggle(500);
    if ($("#work6").is(':visible'))
    $("#work6").slideToggle(500);
    $("#work5").slideToggle(500);
}
function showWork6(){
    if ($("#work2").is(':visible'))
    $("#work2").slideToggle(500);
    if ($("#work3").is(':visible'))
    $("#work3").slideToggle(500);
    if ($("#work4").is(':visible'))
    $("#work4").slideToggle(500);
    if ($("#work5").is(':visible'))
    $("#work5").slideToggle(500);
    if ($("#work1").is(':visible'))
    $("#work1").slideToggle(500);
    $("#work6").slideToggle(500);
}

$("#showWork1").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("Total HIIT Circuit");
                                $("#workp").text("This 'sweat and burn' style workout features multiple short sets and even shorter rests that guarantee a heart pounding strength and cardio experience! An exciting class format provides an individual challenge in every set, keeping you motivated with a progressive training environment and pushing you to new levels of accomplishment!");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });
$("#showWork2").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("Interval Up Circuit");
                                $("#workp").text("Challenge your cardio and strength endurance with this calorie incinerating workout! Multiple sets of each exercise provide maximum strength benefits while short rest periods ensure cardiovascular development. These increasing interval lengths are sure to provide the results that you need while the workout structure enables you to customize your experience. All of this adds up to a world class training experience that is sure to lead you to your goals!");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });
$("#showWork3").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("Strength Endurance Circuit");
                                $("#workp").text("The pump, the burn, the grind... call it what you will, this interval workout features long targeted sets that will make you feel it ALL! Short rests and an exercise sequence that alternates between upper and lower body ensures that your cardio stays high and will give you a full body workout to remember!");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });
$("#showWork4").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("TABATA Circuit");
                                $("#workp").text("Guaranteed to challenge your every fibre, this fun, high-intensity interval training (HIIT) approach has been proven to boost calorie burn and provide peak fitness. Experience the excitement of this fast-paced workout, completing multiple sets of short but intense training with minimal time off. Mercifully, the programming offers numerous ways to tailor the experience to meet you and your fitness goals right where you are whether an elite athlete or just getting started.");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });
$("#showWork5").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("30/30 HIIT Circuit");
                                $("#workp").text("How many bullets do you have in your gun? You will find out as you reap the benefits of high intensity, anaerobic training intervals that deliver major metabolic results! This fun and dynamic experience utilizes full body exercises in short, intense bursts that torches body fat and delivers peak results in strength and cardio.");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });
$("#showWork6").click(function(){
                            $("#workwrap").fadeToggle(400);
                            setTimeout(
                            function(){
                                $("#workh2").text("Interval Down Circuit");
                                $("#workp").text("Start hard and finish strong in this amazing interval workout designed to maximize your results! Cycle through each exercise pairing in progressively shorter intervals to give you the kick you need to see the change you want in your fitness. A full body experience, this workout will challenge your cardio, strength and endurance and leave you gasping for more!");
                            }, 400);
                            $("#workwrap").fadeToggle(400);
                        });