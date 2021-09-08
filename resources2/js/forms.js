$(document).ready(function(){
             $("#class1").toggleClass("classDay2");
             $("#class2").toggleClass("classDay2");
             $("#class3").toggleClass("classDay2");
             $("#class4").toggleClass("classDay2");
             $("#class5").toggleClass("classDay2");
             $("#class6").toggleClass("classDay2");
             $("#class7").toggleClass("classDay2");
             $("#class8").toggleClass("classDay2");
             $("#class9").toggleClass("classDay2");
             $("#class10").toggleClass("classDay2");
             $("#class11").toggleClass("classDay2");
             $("#class12").toggleClass("classDay2");
             $("#class13").toggleClass("classDay2");
         }); 
function learnMorePop() {
    $email = $('#email').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Learn More Popup Form");
    $("#learnH4").addClass("hideForm");
    $("#learnFormWrap").addClass("hideForm");
    $("#learnMessage").fadeToggle(1);
    return true;
}

function flSchedulePop() {
    $("#scheduleH4").addClass("hideForm");
    $("#confirmH2").addClass("hideForm");
    $("#confirmH4").addClass("hideForm");
    $("#scheduleFormWrap").addClass("hideForm");
    $("#scheduleMSG").fadeToggle(1);
    return true;
}
function outfitterPop() {
    $email = $('#email4').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Ownership Form");
    $("#outfitterH4").addClass("hideForm");
    $("#outfitterP").addClass("hideForm"); $("#outfitterFormWrap").addClass("hideForm");
    $("#outfitterMessage").fadeToggle(1);
    return true;
}
function locationsPop() {
    $email = $('#email2').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Locations Form");
    $("#locFormWrap").addClass("hideForm");
    $("#locMessage").fadeToggle(1);
    return true;
}
function footerPop() {
    $("#footFormWrap").addClass("hideForm");
    $("#locMessage").fadeToggle(1);
    return true;
}
function footerPop3() {
    $email = $('#email1').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Footer Form Desktop");
    $("#footFormWrap").addClass("hideForm");
    $("#locMessage").fadeToggle(1);
    return true;
}
function frPop() {
    $email = $('#email1').val();
    window.Northbeam.fireEmailCaptureEvent($email, "First Responders Form");
    $("#frFormWrap").addClass("hideForm");
    $("#frMessage").fadeToggle(1);
    return true;
}
function footerPop2() {
    $email = $('#email2').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Footer Form Mobile");
    $("#footFormWrap2").addClass("hideForm");
    $("#locMessage2").fadeToggle(1);
    return true;
}