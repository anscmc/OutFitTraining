$(document).ready(function(){
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000;

});

//function toggleMenu(){
//    $('#mobileMenu').fadeToggle(500);
//}
                        $("div.dropDowns>a").click(function(){
                              $.fn.myFunctionAll();
                          });
                            $.fn.myFunctionAll = function() {
                                if ($("#showingWhat").is(":visible"))
                                $("#showingWhat").addClass("showdrop2");
                                else if ($("#showingJoin").is(":visible"))
                                $("#showingJoin").addClass("showdrop2");
                                else if ($("#showingLogin").is(":visible")) $("#showingLogin").addClass("showdrop2");
                            }
                        $("#showWhat").hover(function(){
//                            $.fn.myFunction1();
                              
                           $("#showingWhat").removeClass("showdrop2"); $("#showingWhat").toggleClass("showdrop");
                              
                          });
                          $("#showJoin").hover(function(){
//                              $.fn.myFunction2();
                           $("#showingJoin").removeClass("showdrop2");  $("#showingJoin").toggleClass("showdrop");
                          });
//                          $("#showLoc").click(function(){
//                            $("#showingLoc").fadeToggle("fast");
//                          });
                          $("#showLogin").hover(function(){
//                              $.fn.myFunction3();
                           $("#showingLogin").removeClass("showdrop2");  $("#showingLogin").toggleClass("showdrop");
                          });
                        $("#showingWhat").hover(function(){
//                            $.fn.myFunction1();
                        $("#showingWhat").toggleClass("showdrop");
                              
                          });
                          $("#showingJoin").hover(function(){
//                              $.fn.myFunction2();
                            $("#showingJoin").toggleClass("showdrop");
                          });
//                          $("#showLoc").click(function(){
//                            $("#showingLoc").fadeToggle("fast");
//                          });
                          $("#showingLogin").hover(function(){
//                              $.fn.myFunction3();
                            $("#showingLogin").toggleClass("showdrop");
                          });

                        $(document).ready(function(){
              

                            

                            

                            
                            
//                            $.fn.myFunctionAll();
                            
//                            $.fn.myFunction1 = function() {
//                                if ($("#showingJoin").is(":visible"))
//                                $("#showingJoin").fadeToggle("fast");
//                                else if ($("#showingLogin").is(":visible"))
//                                $("#showingLogin").fadeToggle("fast");
//                              }
//                            $.fn.myFunction2 = function() {
//                                if ($("#showingWhat").is(":visible"))
//                                $("#showingWhat").fadeToggle("fast");
//                                
//                                else if ($("#showingLogin").is(":visible"))
//                                $("#showingLogin").fadeToggle("fast");
//                              }
//                            $.fn.myFunction3 = function() {
//                                if ($("#showingWhat").is(":visible"))
//                                $("#showingWhat").fadeToggle("fast");
//                                else if ($("#showingJoin").is(":visible"))
//                                $("#showingJoin").fadeToggle("fast");
//                               
//                              }
                            
                        
                          $("#showExp").click(function(){
                            $("#hiddenExp").slideToggle();
                          });
                          $("#showExp").click();
                            
                        $("#workClick1").click(function(){
                            $("#subH2").text("Open Workout");
                            $("#subp").text("Join one of our open workouts for a fun, affordable, fitness experience at our designated training grounds near you. Meet new people and share the best total body workout you've ever had for about the price you pay for soda.");
                        });
                        $("#workClick2").click(function(){
                            $("#subH2").text("Team Training");
                            $("#subp").text("Organize your own group or join a team of OutFitters with similar fitness levels and goals. Our expert trainers the OutFitters In Charge will organize the perfect training workout for whatever level your group desires.");
                        });
                        $("#workClick3").click(function(){
                            $("#subH2").text("Private Training");
                            $("#subp").text("Can you imagine having a master personal trainer at your beck and call at the touch of a button for less than you pay for a boutique gym membership? OutFit private training provide the ultimate personal training with ultimate convenience for you. You name the place. You name the time. You name the intensity level. As a service bonus you can include another person in that training session at no additional charge*. We bring the best, customized workout of your life that painlessly stretches and tones and builds muscle and helps you get stronger and healthier with a super fun, totally motivating experience.");
                        });
//                          $("#workClick1").click();
//                            $("#workClick2").click(function(){
//                            $("#wc2").slideToggle();
//                          });
//                          $("#workClick2").click();
//                            $("#workClick3").click(function(){
//                            $("#wc3").slideToggle();
//                          });
//                          $("#workClick3").click();
                        });
                        
//                        function click1(){
//                                $("#wc1").slideToggle();
//                        }
//                        function click2(){
//                                $("#wc2").slideToggle();
//                        }
//                        function click3(){
//                                $("#wc3").slideToggle();
//                        }
                        
