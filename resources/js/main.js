window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RBJB28LZBG');

$(document).ready(function(){
      $("div.slideBox").slideToggle(0);
});
$('.readmore').click(function(e) {
    $(this).next().slideToggle('slow');
    $(this).slideToggle('fast');
});
       
   
function toggleMain(){
    $("div.popOutter").fadeToggle(300);
}
function toggleMobMenu(){
            $("div.mobmenu").toggleClass("showMobMenu");
        }
function appleQR(){
    $("div.popApple").fadeToggle(300);
}
function googleQR(){
    $("div.popGoogle").fadeToggle(300);
}
function toggleMainFL(){
    $("div.popFL").fadeToggle(300);
    $("div.popFL").toggleClass("showPop");
    $("div.popOutter").fadeToggle(300);
}
function toggleQ(){
    $("div.popQ").fadeToggle(300);
}
function toggleFL(){
    $("div.popFL").fadeToggle(300);
    $("div.popFL").toggleClass("showPop");
    
}
function toggleLocX(){
    $("div.popLoc").fadeToggle(300);
}
//function toggleLoc(){
//    
//    
//}
//
//           


function zipSearch() {
    var zipText = $('#zipInput').val();
    var myZip = parseInt(zipText);
    if(myZip > 33299 && myZip < 33445){
        $("div.popFL").toggleClass("showPop");
        $("div.popFL").fadeToggle(300);
    }
    else{
        $("div.popLoc").fadeToggle(300);
    }
}
function submitNews() {
    $email = $('#email_foot').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Footer Sign Up");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}
function freeWorkout() {
    $email = $('#email_f').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Get Started Popup");
    var url= "thank-you-1.html";
    window.location = url;
    return true;
}
function freeWorkout1() {
    $email = $('#email_fw1').val();
    $phone = $('#phoneNumber_fw1').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Free Workout 1");
    window.Northbeam.fireCustomGoalEvent("sms_app_download_link_send", {phoneNumber: "<phone number>"})
    var url= "thank-you-1.html";
    window.location = url;
    return true;
}
function freeWorkout2() {
    $email = $('#email_fw2').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Free Workout 2");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}
function questionsForm() {
    $email = $('#email_q').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Questions Form");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}
function careerForm() {
    $email = $('#email_c').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Career Form");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}
function ownForm() {
    $email = $('#email_o').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Ownership Form");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}
function locationsForm() {
    $email = $('#email_l').val();
    window.Northbeam.fireEmailCaptureEvent($email, "Locations Form");
    var url= "thank-you-2.html";
    window.location = url;
    return true;
}

//function learnMorePop() {
//    $email = $('#email').val();
//    window.Northbeam.fireEmailCaptureEvent($email, "Learn More Popup Form");
//    $("#learnH4").addClass("hideForm");
//    $("#learnFormWrap").addClass("hideForm");
//    $("#learnMessage").fadeToggle(1);
//    return true;
//}